var React = require('react'),
    // UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link;

var UserHomepage = React.createClass({
  handleSubmit: function() {
    // debugger
    ApiUtil.logoutSession();
    this.props.history.pushState(null, '/')
  },

  render: function() {
    return(
      <div>
        <input type="button" value="Log out" onClick={this.handleSubmit}></input>
        <br></br>
        user home page
        <br></br>
        <Link to="/review/new">Add Review</Link>
      </div>
    )
  }
});

module.exports = UserHomepage;
