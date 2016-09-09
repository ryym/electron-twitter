(() => {
  require('babel-register');

  const React = require('react');
  const ReactDOM = require('react-dom');
  const MainContent = require('./components/MainContent.react');

  const root = document.getElementById('root');
  ReactDOM.render(
    React.createElement(MainContent),
    root
  );
})();
