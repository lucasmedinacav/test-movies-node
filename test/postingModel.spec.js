'use restrict'
let mongoose = require('mongoose');
let postingModel = require('../src/main/models/postingModel');
var expect = require('chai').expect;

/* describe('Database Tests', function () {
    before(function (done) {
        const dbURI = 'ds155073.mlab.com:55073/lucasmedinadb', user = 'lucasmedina', password = 'admin123';
        mongoose.connect('mongodb://' + user + ':' + password + '@' + dbURI);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('We are connected to test database!');
            done();
        });
    });
    describe('Test Database', function () {
        it('Should retrieve data from test database', function (done) {
            postingModel.find({ author: 'Lucas Medina' }, (err, name) => {
                if (err) { throw err; }
                if (name.length === 0) { throw new Error('No data!'); }
                done();
            });
        });
    });
    after(function (done) {
        mongoose.connection.close();
        done();
    }); 
});*/