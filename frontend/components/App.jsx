var React = require('react'),
    Link = require('react-router').Link,
    ApiUtil = require('../util/apiutil'),
    UserStore = require('../stores/UserStore');

var App = React.createClass({
  getInitialState: function() {
    return { user: UserStore.fetchUser() }
  },

  updateState: function() {
    this.setState({user: UserStore.fetchUser()})
    // debugger
    console.log("updating")
    console.log(this.state.user)
  },

  componentDidMount: function() {
    // console.log("mounted")
    this.listener = UserStore.addListener(this.updateState);
    // fetch user id doesn't happen unless i refresh page
    if (window.CURRENT_USER_ID !== -1) {
      ApiUtil.fetchUser(window.CURRENT_USER_ID);
    }
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleSubmit: function() {
    ApiUtil.logoutSession();
    this.props.history.pushState(null, '/')
  },

  render: function() {
    var user = this.state.user;
    var links;
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
        <div key={this.state.user}>
          {links}
        </div>
        <br></br>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
