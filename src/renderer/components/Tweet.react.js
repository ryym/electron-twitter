const React = require('react');

module.exports = function Tweet({ tweet }) {
  const isRetweet = tweet.hasOwnProperty('retweeted_status');
  const status = tweet.retweeted_status || tweet;
  return (
    <div>
      <div>
        {status.user.name}
      </div>
      <p className="text">
        {status.text}
      </p>
      <div>
        {isRetweet ? '(retweet)' : ''}
      </div>
      <hr />
    </div>
  );
};
