import { DataSource } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST ?? 'localhost',
    port: Number(DB_PORT) ?? 3306,
    username: DB_USERNAME ?? 'user',
    password: DB_PASSWORD ?? 'secret',
    database: DB_DATABASE ?? 'db',
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
