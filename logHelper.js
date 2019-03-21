function LogHelper() {
    // private members
    var logs = {
        server: '[Server]: ',
        router: '[Router]: ',
        request_handler: '[RequestHandler]: '
    };

    return {
        tags: logs
    };
    // this.tags = logs;
};

module.exports = LogHelper;