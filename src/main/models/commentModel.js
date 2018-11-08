var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentModel;
try {

    CommentModel = mongoose.model('comment', new Schema({
        author: { type: String },
        content: { type: String },
        creationDate: { type: Date, default: Date.now },
    }))
} catch (e) {
    CommentModel = mongoose.model('comment');
}

module.exports = CommentModel;