import router from '../src/router';

describe('router', () => {
    it('should load router', () => {
        expect(router.stack.length).toBeGreaterThan(0);
    });
});
