var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    logHelper = require('./logHelper'),
    lh = new logHelper()

function start(httpRoute, handle) {

    httpRoute(app, express, handle);

    server.listen(3000, function() {
        console.log(lh.tags.server + 'Listening on *:3000');
    });
}

exports.start = start;