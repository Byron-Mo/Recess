var React = require('react'),
    Link = require('react-router').Link;

var App = React.createClass({
  render: function() {
    return(
      <div>
        <header><h1>App here</h1></header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
