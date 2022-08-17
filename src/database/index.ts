import { DataSource } from 'typeorm';

const AppDataSource = process.env.JEST_WORKER_ID ? getTestDataSource() : getDataSource();

async function initialiseDataSource(): Promise<void> {
    try {
        await AppDataSource.initialize();
    } catch (err) {
        console.error('Error during Data Source initialization', err);
    }
}

function getDataSource(): DataSource {
    const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
    return new DataSource({
        type: 'mysql',
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        synchronize: true,
        logging: false,
        entities: ['src/entities/*.*'],
        migrations: [],
        subscribers: [],
    });
}

function getTestDataSource(): DataSource {
    return new DataSource({
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        logging: false,
        entities: ['src/entities/*.*'],
        migrations: [],
        subscribers: [],
    });
}

export { AppDataSource, initialiseDataSource };
