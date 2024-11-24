import { AppDataSource, initialiseDataSource, destroyDataSource } from '../../src/database';

describe('DataSource Utility', () => {
    const originalConsoleError = console.error;

    beforeEach(async () => {
        console.error = jest.fn();

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
