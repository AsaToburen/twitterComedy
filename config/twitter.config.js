var Twitter = require('twitter');

module.exports = new Twitter({
    consumer_key:process.env.CONSUMER_KEYY,
    consumer_secret:process.env.CONSUMER_SECRETT,
    access_token_key:process.env.ACCESS_TOKENN,
    access_token_secret:process.env.ACCESS_SECRETT
 });