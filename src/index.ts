import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import router from './router';
import { createApolloServer } from './services/ApolloServices/ApolloServerService';
import { initialiseDataSource } from './database';

const app = express();

createApolloServer()
    .then(async (apolloServer: { start: () => void; getMiddleware: () => any }) => {
        await apolloServer.start();
        await initialiseDataSource();

        app.use(express.json());
        app.use(apolloServer.getMiddleware());
        app.use(router);

        app.listen(process.env.PORT || 3333, () => {
            console.log(`🚀 App started on port ${process.env.PORT || 3333} - Hello ${process.env.HELLO}`);
        });
    })
    .catch(err => {
        console.log(err);
    });
