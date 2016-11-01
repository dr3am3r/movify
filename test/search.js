const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Search', function() {
    describe('GET /search', function() {
        it('Should return 200 with json with movies found', function(done) {
            request
                .get('/search?title=matrix')
                .set('Accept', 'application/json')
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    console.log('@data ', res);
                    done();
                });
        });
    });
})