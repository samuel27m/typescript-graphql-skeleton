import { Request, Response } from 'express';

const IndexController = (request: Request, response: Response): Response => {
    return response.json(['ok']);
};

export { IndexController };
