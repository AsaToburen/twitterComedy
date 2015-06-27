var controller = require('./controller/tweet.controller');
var path = require('path');

module.exports = function(app) {

    app.get('/api/comedians', controller.getComedians);
    app.get('/api/comedians/tweets', controller.getTotalTweets);
    app.get('/api/comedians/:name', controller.getComedianDetail);

    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });
};
