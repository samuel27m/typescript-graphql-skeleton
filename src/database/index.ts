import { DataSource } from 'typeorm';
import { Recipe } from '../entities/Recipe';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Recipe],
    migrations: [],
    subscribers: [],
});

async function initialiseDataSource() {
    try {
        await AppDataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (err) {
        console.error('Error during Data Source initialization', err);
    }
}

export { AppDataSource, initialiseDataSource };
