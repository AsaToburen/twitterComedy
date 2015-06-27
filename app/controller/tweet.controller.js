var client = require('../../config/twitter.config.js');

module.exports.getComedians = function(req, res) {

  var params = {
    list_id: 206744608,
    slug: "comedians"
  };

  client.get('lists/members', params, function(error, tweets, response) {
    res.json(tweets);
    if (error) {
      console.log(error);
    }
  });
};

module.exports.getComedianDetail = function(req, res) {

  var params = {
    screen_name: req.params.name
  };

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    res.json(tweets);
    if (error) {
      console.log(error);
    }
  });
};

module.exports.getTotalTweets = function(req, res) {

  var params = {
    list_id: 206744608,
    slug: "comedians"
  };

  client.get('lists/statuses', params, function(error, tweets, response) {
    res.json(tweets);
    if (error) {
      console.log(error);
    }
  });
};
