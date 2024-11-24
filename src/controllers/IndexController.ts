import { NextFunction, Request, Response } from 'express';

const IndexController = (request: Request, response: Response, next: NextFunction) => {
    response.json({
        status: 200,
        message: 'Hello, world! ' + Date.now(),
    });
    next();
};
export { IndexController };
