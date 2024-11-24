import { IndexController } from '../../src/controllers/IndexController';
import { NextFunction, Request, Response } from 'express';

describe('IndexController', () => {
    it('should respond as expected', () => {
        const request = {};
        const response = {
            json: jest.fn(),
        };
        const next: NextFunction = jest.fn();

        IndexController(request as Request, response as unknown as Response, next);

        expect(response.json).toBeCalledWith(
            expect.objectContaining({
                status: 200,
            }),
        );
    });
});
