import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: ':memory:',
    synchronize: true,
    logging: false,
    entities: ['src/entities/*.*'],
    migrations: [],
    subscribers: [],
});

async function initialiseDataSource(): Promise<void> {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error('Error during Data Source initialization', err);
    }
}

async function destroyDataSource(): Promise<void> {
    await AppDataSource.destroy();
}

export { AppDataSource, initialiseDataSource, destroyDataSource };
