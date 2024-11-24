import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import router from './router';
import { initialiseDataSource } from './database';
import { createApolloServer } from './services/ApolloServices/ApolloServerService';

const app = express();

const startServer = async () => {
    await initialiseDataSource();

    const apolloServer = await createApolloServer();
    await apolloServer.start();

    app.use('/graphql', bodyParser.json(), expressMiddleware(apolloServer));
    app.use(express.json());
    app.use(router);

    app.listen(process.env.PORT || 3333, () => {
        console.log(`🚀 App started on port ${process.env.PORT || 3333} - Hello ${process.env.HELLO}`);
    });
};

startServer().catch(err => {
    console.error('Server failed to start', err);
});

export { startServer };
