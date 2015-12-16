var React = require('react'),
    // UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link;

var UserHomepage = React.createClass({
  handleSubmit: function() {
    ApiUtil.logoutSession();
    // debugger
    this.props.history.pushState(null, '/')
  },

  render: function() {
    return(
      <div>
        <input type="button" value="Log out" onClick={this.handleSubmit}></input>
        <br></br>
        user home page
      </div>
    )
  }
});

module.exports = UserHomepage;
