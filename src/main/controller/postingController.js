var Posting = require('../models/postingModel');
let ActionResponse = require('./../util/actionResponse');
let Logger = require('./../util/logger');
const request = require('request');
var redis = require('redis');

module.exports = function (app) {


    app.get('/posting/findById/:idPosting', async function (req, res) {
        var idPosting = req.params.idPosting;

        await Posting.find({ '_id': idPosting }).lean().exec(function (err, posting) {
            if (err) {
                Logger.errorlog.error(err);
                res.status(500);
                res.json(new ActionResponse().send(500, err, {}));
            } else {
                if (posting && posting.length > 0 && posting[0].movieTitle) {
                    urlMovie = 'http://www.omdbapi.com/?apikey=5255dfd0&t=' + posting[0].movieTitle;
                    //FIRST I SEARCH INFO IN REDIS CACHE
                    app.client.get(urlMovie, function (error, result) {
                        //IF KEY NOT EXISTS IN REDIS I WILL SEARCH IN API
                        if (result === null) {
                            request(urlMovie, function (err, infos) {
                                //CACHING RESULT
                                if (infos && infos.body) {
                                    app.client.set(urlMovie, infos.body, redis.print);
                                    if (!err) {
                                        posting[0].imdbInfo = JSON.parse(infos.body);
                                    }
                                }
                                res.json(new ActionResponse().send(200, "Posting was Find", posting[0]));
                            });
                        }
                        //ELSE I ALREADY HAVE VALUE OF THE KEY I USE THE RESULT
                        else {
                            posting[0].imdbInfo = JSON.parse(result);
                            res.json(new ActionResponse().send(200, "Posting was Find", posting[0]));
                        }
                    });

                } else {
                    res.status(404);
                    res.json(new ActionResponse().send(404, "No posting was find", posting));
                }
            }
        });
    });

    app.get('/posting/findAll', async function (req, res) {
        await Posting.find({}, function (err, posting) {
            if (err) {
                Logger.errorlog.error(err);
                res.status(500);
                res.json(new ActionResponse().send(500, err, {}));
            } else {
                if (posting && posting.length > 0) {
                    res.json(new ActionResponse().send(200, "Posts was Find", posting));
                } else {
                    res.status(404);
                    res.json(new ActionResponse().send(404, "No posting was find", posting));
                }
            }
        });
    });

    app.put('/posting/update', async function (req, res) {
        var posting = req.body;
        await Posting.findOneAndUpdate({ "_id": posting._id }, posting, function (err, posting) {
            if (err) {
                Logger.errorlog.error(err);
                res.status(500);
                res.json(new ActionResponse().send(500, err, {}));
            } else {
                res.json(new ActionResponse().send(200, "Posting updated", posting));
            }
        });
    });

    app.delete('/posting/remove', async function (req, res) {
        var idPosting = req.body.id;
        await Posting.findByIdAndRemove({ '_id': idPosting }, function (err, posting) {
            if (err) {
                Logger.errorlog.error(err);
                res.status(500);
                res.json(new ActionResponse().send(500, err, {}));
            } else {
                res.json(new ActionResponse().send(200, "Posting deleted", { '_id': idPosting }));
            }
        });
    });
}