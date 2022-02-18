import 'dotenv/config';
import express from 'express';
import router from './router';
import { apolloServer } from './services/ApolloServices/ApolloServerService';

const app = express();

apolloServer
    .start()
    .then(() => {
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
