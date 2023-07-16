const request = require('supertest');
const baseUrl = require('../../env')

describe('Post request example', () => {
    it('Success create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 1234567,
            "username": "rafliedka",
            "firstName": "rafli",
            "lastName": "edka",
            "email": "rafliedka@gmail.com",
            "password": "12345",
            "phone": "085185572",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    });
});