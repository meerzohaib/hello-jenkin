var request = require('supertest');

var app = require('../app.js');

// Test home page view
describe('GET /', function () {
    it('Home page test case', function (done) {
        request(app).get('/').expect('Hello Zohaib Jaan!', done);
    });
});