var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var httphandle = {
    '/': requestHandlers.start,
    '/start': requestHandlers.start,
    '/show': requestHandlers.show
};

server.start(router.http_route, httphandle);