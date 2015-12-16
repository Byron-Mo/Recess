var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    History = require('react-router').History,
    SessionStore = require('../../stores/SessionStore'),
    Link = require('react-router').Link;

var Login = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { username: "", password: "", user: "", errors: "" };
  },

  componentDidMount: function() {
    this.listener = SessionStore.addListener(this.updateState);
  },

  componentWillUnMount: function() {
    SessionStore.resetState();
    this.listener.remove();
  },

  updateState: function() {
    this.setState({
      user: SessionStore.fetchUser(),
      // errors: SessionStore.fetchErrors()
    });

    if (this.state.user === undefined || this.state.user === "") {
      alert("Invalid Credentials");
    } else {
      var url = '/user/' + this.state.user.username;
      this.props.history.push(url);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    ApiUtil.createSession({
      username: this.state.username,
      password: this.state.password
    })

    this.setState({ user: "", password: "" })
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
          <input type="submit" value="Log in" className="signuplogin-btn"></input>
          <br></br>
          <Link to="/signup" className="signlog-redirect">Sign up</Link>
        </form>
      </div>
    )
  }
});

module.exports = Login;
