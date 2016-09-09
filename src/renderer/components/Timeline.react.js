const React = require('react');
const Tweet = require('./Tweet.react');

module.exports = function Timeline({ tweets }) {
  const tweetComps = tweets.map(tweet => (
    <Tweet tweet={tweet} key={tweet.id} />
  ));
  return (
    <div>
      {tweetComps}
    </div>
  );
};
