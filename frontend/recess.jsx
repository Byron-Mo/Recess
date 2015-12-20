var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/App'),
    Index = require('./components/index'),
    Signup = require('./components/users/signup'),
    Login = require('./components/users/login'),
    UserHomepage = require('./components/homepages/user_homepage'),
    LocationItem = require('./components/locations/LocationItem'),
    UserReview = require('./components/reviews/UserReview'),
    UserPreference = require('./components/preferences/UserPreference');

var RecessRouter = (
   <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="signup" component={Signup} />
      <Route path="login" component={Login} />
      <Route path="/user/:userid" component={UserHomepage} />
      <Route path="/user/:userid/reviews" component={UserReview} />
      <Route path="/location/:locationid" component={LocationItem} />
      <Route path="/user/:userid/preferences" component={UserPreference} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(RecessRouter, document.getElementById('content'));
});
