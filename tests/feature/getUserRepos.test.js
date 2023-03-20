const request = require('supertest');
const server = require('../../app');
const baseURL = 'http://localhost:3001';

describe('GET /users/:username/repos', () => {
    it('should return 200', async () => {
        const response = await request(baseURL).get('/users/elvisgannem/repos');
        expect(response.statusCode).toBe(200);
    });
});

afterAll(() => {
    server.close();
});