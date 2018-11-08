'use restrict'
let Logger = require('./../util/logger');

class ActionRespose {

    constructor() {
        this.statusCode;
        this.message;
        this.response;
    };

    send(statusCode, message, response) {
        this.statusCode = statusCode;
        this.message = message;
        this.response = response;
        return this;
    };
}

module.exports = ActionRespose;