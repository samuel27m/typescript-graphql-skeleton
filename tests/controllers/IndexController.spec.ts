import { IndexController } from '../../src/controllers/IndexController';
import { Request, Response } from 'express';

describe('IndexController', () => {
    it('should respond as expected', () => {
        const request = {};
        const response = {
            json: jest.fn(),
        };

        IndexController(request as Request, response as unknown as Response);

        expect(response.json).toBeCalledWith(['ok']);
    });
});
