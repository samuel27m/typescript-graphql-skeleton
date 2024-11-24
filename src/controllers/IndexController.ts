import { NextFunction, Request, Response } from 'express';

const IndexController = (request: Request, response: Response, next: NextFunction) => {
    try {
        response.json({
            status: 200,
            message: 'Hello, world! ' + Date.now(),
        });
    } catch (error) {
        next(error);
    }
};
export { IndexController };
