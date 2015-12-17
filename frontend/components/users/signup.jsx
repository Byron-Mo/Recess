var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    History = require('react-router').History,
    UserStore = require('../../stores/UserStore'),
    Link = require('react-router').Link;

var Signup = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { username: "", password: "", user: "", errors: "" };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateState)
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateState: function() {
    this.setState({ user: UserStore.fetchUser(), errors: UserStore.fetchErrors() })
    if (this.state.user === undefined) {
      alert(this.state.errors)
    } else {
      var url = '/user/' + this.state.user.username
      var id = {id: this.state.user.username}
      this.props.history.pushState(null, url, id)
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createUser({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({password: ""});
  },

  render: function() {
    return(
      <div className="signup-login-form">

        <form className="user" onSubmit={this.handleSubmit}>
          <label className="signuplogin">Username</label>
          <br></br>
          <input type="text" valueLink={this.linkState("username")} className="user-input"></input>
          <br></br><br></br>
          <label className="signuplogin">Password</label>
          <br></br>
          <input type="password" valueLink={this.linkState("password")} className="user-input"></input>
          <br></br><br></br>
          <input type="submit" value="Create account" className="signuplogin-btn"></input>
          <br></br>
          <Link to="/login" className="signlog-redirect">Log in</Link>
        </form>
      </div>
    )
  }
});

module.exports = Signup;
