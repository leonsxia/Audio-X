var logHelper = require('./logHelper'),
    lh = new logHelper();

function httpRoute(app, express, handle) {
    app.use('/', express.static(__dirname + '/www'));
    for (var i in handle) {
        app.get(i, handle[i]);
    };
};

exports.http_route = httpRoute;