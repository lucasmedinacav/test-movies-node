'use restrict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var commentModel = require('./commentModel');


let PostingModel;
try {
    PostingModel = mongoose.model('POSTING', new Schema({
        title: { type: String },
        content: { type: String },
        author: { type: String },
        creationDate: { type: Date, default: Date.now },
        movieTitle: { type: String },
        coments: [commentModel.schema]
    }));
} catch (error) {
    PostingModel = mongoose.model('POSTING');
}
module.exports = PostingModel;