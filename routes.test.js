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

test('GET /items/:name should return an item', async () => {
    const response = await request(app).get('/items/popsicle');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        name: 'popsicle',
        price: 2.45
    })
})      

test('PATCH /items/:name should update an item', async () => {
    const response = await request(app).patch('/items/popsicle').send({
        price: 3.45
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        updated: {
            name: 'popsicle',
            price: 3.45
        }
    })
})          

test('DELETE /items/:name should delete an item', async () => {
    const response = await request(app).delete('/items/popsicle');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
        message: 'Deleted'
    })
    expect(items.length).toBe(0);
})

