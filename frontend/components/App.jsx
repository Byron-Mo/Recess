var React = require('react'),
    Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>App here</h1></header>
        <ul>
          <li><Link to="/signup">Sign up </Link></li>
          <li><Link to="/login">Log in</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
