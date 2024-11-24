import { AppDataSource, initialiseDataSource, destroyDataSource } from '../../src/database';

describe('DataSource Utility', () => {
    let initCount: number = 0;
    const originalConsoleError = console.error;

    beforeEach(async () => {
        console.error = jest.fn();

        jest.spyOn(AppDataSource, 'initialize').mockImplementation(async () => {
            initCount++;
            if (initCount > 1) {
                throw new Error('initialize called more than once before destroying.');
            }
            Object.defineProperty(AppDataSource, 'isInitialized', {
                value: true,
                writable: true,
                configurable: true,
            });
            return AppDataSource;
        });

        jest.spyOn(AppDataSource, 'destroy').mockImplementation(async () => {
            initCount = 0;
            Object.defineProperty(AppDataSource, 'isInitialized', {
                value: false,
                writable: true,
                configurable: true,
            });
        });

        if (!AppDataSource.isInitialized) {
            await initialiseDataSource();
        }
    });

    afterEach(async () => {
        console.error = originalConsoleError;

        if (AppDataSource.isInitialized) {
            await destroyDataSource();
        }
    });

    it('should initialize the data source successfully', async () => {
        expect(AppDataSource.isInitialized).toBe(true);
    });

    it('should destroy the data source successfully', async () => {
        await destroyDataSource();
        expect(AppDataSource.isInitialized).toBe(false);
    });

    it('should throw an error if initialize is called twice without destroying', async () => {
        await expect(AppDataSource.initialize()).rejects.toThrow();
    });

    it('should allow reinitialization after destruction', async () => {
        await destroyDataSource();
        expect(AppDataSource.isInitialized).toBe(false);

        await initialiseDataSource();
        expect(AppDataSource.isInitialized).toBe(true);
    });

    it('should log an error if initialization fails', async () => {
        jest.spyOn(AppDataSource, 'initialize').mockImplementationOnce(() => {
            throw new Error('Mock Initialization Error');
        });

        await initialiseDataSource();

        expect(console.error).toHaveBeenCalledWith('Error during Data Source initialization', expect.any(Error));
    });
});
