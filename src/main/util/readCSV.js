'use restrict'
var CSV = require("csv-to-array")

var returnPosts = function (callback) {
    return new Promise((resolve, reject) => {
        CSV({
            csvOptions: {
                delimiter: ";"
            },
            file: "./src/main/util/files/posts.csv",
            columns: true
        }, function (err, array) {
            err ? reject(err) : resolve(array);
        });
    })
}


module.exports = {
    returnPosts: returnPosts
}