var ReadCSV = require('../util/readCSV');
var PostingModel = require('../models/postingModel')
var PostingsJson = require('../util/files/posts')
function defaultErrorLog(err, object) { if (err) return console.error(err); }

module.exports = function (app) {
    app.get('/csv/read', async function (req, res) {
        const posts = ReadCSV.returnPosts();
        await posts.then(response => res.json(response));

    });

    app.post('/csv/save', async function (req, res) {
        const posts = ReadCSV.returnPosts();
        await posts.then(response => {
            response.map(item => {
                var posting = PostingModel(item);
                posting.save(defaultErrorLog);
            });
            res.json(response);
        });
    });

    app.get('/json/read', async function (req, res) {
        await res.json(PostingsJson);
    });

    app.post('/json/save', async function (req, res) {
        await PostingsJson.map(item => {
            var posting = PostingModel(item);
            posting.save(defaultErrorLog);
        });
        res.json(PostingsJson);
    });
}