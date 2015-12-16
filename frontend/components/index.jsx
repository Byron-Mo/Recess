var React = require('react'),
    Link = require('react-router').Link;

var Index = React.createClass({
  render: function() {
    return(
      <div>
        <Link to="/signup">Sign up</Link>
        <br></br>
        <Link to="/login">Log in</Link>
        <br></br>
      </div>
    )
  }
});

module.exports = Index;
