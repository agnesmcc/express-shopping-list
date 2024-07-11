const app = require('./app');
const request = require('supertest');
const items = require('./fakeDb');

test('GET /items should return all items', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(items);
})