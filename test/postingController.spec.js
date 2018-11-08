'use restrict'
let postingModel = require('../src/main/models/postingModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../src/config/server')();
let should = chai.should();



chai.use(chaiHttp);
//Our parent block
describe('Posts', () => {
    before((done) => { //Before each test we empty the database
        postingModel.remove({}, (err) => {
            done();
        });
    });
    describe('/GET and save posts', () => {
        it('it should GET table empty posts and status 404', (done) => {
            chai.request(app)
                .get('/posting/findAll')
                .end((err, res) => {
                    res.body.should.have.status(404);
                    res.body.response.length.should.be.eql(0);
                    done();
                });
        });
        it('it should save 20 posts from csv', (done) => {
            chai.request(app)
                .post('/csv/save')
                .end((err, res) => {
                    res.should.have.status(200);
                    setTimeout(function () { done() }, 1000);
                });
        });
        it('it should save 20 posts from json', (done) => {
            chai.request(app)
                .post('/json/save')
                .end((err, res) => {
                    res.should.have.status(200);
                    setTimeout(function () { done() }, 2000);
                });
        });
        it('it should GET 40 posts (20csv + 20json) and status 200', (done) => {
            chai.request(app)
                .get('/posting/findAll')
                .end((err, res) => {
                    res.body.should.have.status(200);
                    res.body.response.length.should.be.eql(40);
                    done();
                });
        });
    });
});