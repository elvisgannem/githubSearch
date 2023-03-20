const request = require('supertest');
const app = require('../../app');
const baseURL = 'http://localhost:3001';

describe('GET /users', (done) => {
    it('should return 200', async () => {
        const response = await request(baseURL).get('/users');
        expect(response.statusCode).toBe(200);
    });

    it('should return a list of 10 github users', async () => {
        const response = await request(baseURL).get('/users');
        expect(response.body).toHaveLength(10)
    })
});