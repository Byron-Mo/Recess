var React = require('react'),
    Link = require('react-router').Link,
    ApiUtil = require('../util/apiutil'),
    UserStore = require('../stores/UserStore'),
    History = require('react-router').History;

var Nav = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { user: UserStore.fetchUser() };
  },

  updateState: function() {
    this.setState({user: UserStore.fetchUser()})
    console.log(this.state.user)
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateState);
    if (window.CURRENT_USER_ID !== -1) {
      ApiUtil.fetchUser(window.CURRENT_USER_ID);
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleSubmit: function() {
    ApiUtil.logoutSession();
    this.history.pushState(null, "/")
  },

  render: function() {
    var user = this.state.user,
        links;

    if (user) {
      var url = "/user/" + user.username
      links = [
        <Link to={url}>Home</Link>,
        <input type="button" value="Log out" onClick={this.handleSubmit}></input>
      ]
    } else {
      links = [
        <Link to="/signup">Sign up</Link>,
        <Link to="/login">Log in</Link>
      ]
    }

    return(
      <div>
        {links}
      </div>
    )
  }
});

module.exports = Nav;
