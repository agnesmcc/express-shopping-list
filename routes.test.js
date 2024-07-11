const app = require('./app');
const request = require('supertest');
const items = require('./fakeDb');

beforeEach(() => {
    items.push({
        name: 'popsicle',
        price: 2.45
    })
})

afterEach(() => {
    items.length = 0;
})

test('GET /items should return all items', async () => {
    const response = await request(app).get('/items');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(items);
})

test('POST /items should add an item', async () => {
    const response = await request(app).post('/items').send({
        name: 'tacos',
        price: 3.45
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
        added: {
            name: 'tacos',
            price: 3.45
        }
    })
})


