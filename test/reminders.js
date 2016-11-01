const supertest = require('supertest');
const request = supertest('http://localhost:3000');
const assert = require('assert');

describe('Reminders', function() {
    describe('POST /reminders', function() {
        it('Should return 201 Created', function(done) {
            request
                .post('/reminders')
                .send({ movieId: 'tt0451279', movieTitle: 'Wonder Woman', releaseDate: '02 Jun 2017', daysBefore: '14', email: 'jea.du.se@gmail.com' })
                .set('Accept', 'application/json')
                .expect(201)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });
});