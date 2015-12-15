var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/App'),
    Index = require('./components/index');

var RecessRouter = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(RecessRouter, document.getElementById('content'));
});
