const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const assert = require('assert');

describe('Homepage', function() {
    describe('GET /', function() {
        it('Should return 200 with index page', function(done) {
            request
                .get('/')
                .set('Accept', 'text/html')
                .expect(200)
                .end(function(err, res) {
                    assert(res.text.indexOf('<!doctype html>') === 0, 'HTML page is returned');
                    done();
                });
        });
    });
})