const React = require('react');
const T = require('../services/twitter');
const Timeline = require('./Timeline.react');

module.exports = class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  render() {
    return (
      <div className="window">
        <Timeline tweets={this.state.tweets} />
      </div>
    );
  }

  componentDidMount() {
    T.get('statuses/home_timeline')
      .catch(err => console.error(err))
      .then(result => {
        this.setState({
          tweets: result.data
        });

        const stream = T.stream('user');

        stream.on('tweet', tweet => {
          this.setState({
            tweets: [tweet].concat(this.state.tweets)
          });
        });
      });
  }
};
