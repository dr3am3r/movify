const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const assert = require('assert');

describe('Search', function() {
    describe('GET /search', function() {
        it('Should return 200 with json', function(done) {
            request
                .get('/search?title=matrix')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });

        it('Should return 200 with json and a movie found', function(done) {
            request
                .get('/search?title=wonder+woman')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    let json = JSON.parse(res.text);
                    assert(Array.isArray(json), 'Array is returned');
                    assert(json.length === 1, 'One item found');
                    done();
                });
        });
    });
})