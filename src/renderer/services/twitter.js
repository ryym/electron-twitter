/* eslint-disable camelcase */

const Twit = require('twit');

module.exports = new Twit({
  consumer_key: 'JJ20ZHi4LTtfpfgawvCcnJYBo',
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: '3258314280-SgZ5gpnFfAqpgqQ0DuA9oGbb8MCwkOHQdyXhqqX',
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000,
});
