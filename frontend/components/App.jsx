var React = require('react'),
    Link = require('react-router').Link,
    ApiUtil = require('../util/apiutil'),
    UserStore = require('../stores/UserStore'),
    Nav = require('./Nav');

var App = React.createClass({
  render: function() {
    return(
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
