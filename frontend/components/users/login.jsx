var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    UserStore = require('../../stores/UserStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    Link = require('react-router').Link;

var Login = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { username: "", password: "", user: "", errors: "", toggleError: 0 };
  },

  componentDidMount: function() {
    this.updateSession = UserStore.addListener(this.updateState);
    this.updateErrors = ErrorStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.updateSession.remove();
    this.updateErrors.remove();
  },

  updateState: function() {
    this.setState({
      user: UserStore.fetchUser(),
      errors: ErrorStore.fetchErrors()
    });

    if (this.state.user === undefined) {
      this.setState({toggleError: 1});
      this.props.history.push("/login")
    } else {
      var url = '/user/' + this.state.user.id;
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

  loginUser: function(e) {
    e.preventDefault();

    ApiUtil.createSession({
      username: "bmo",
      password: "password"
    })
  },

  render: function() {
    var errorMsg;

    if (this.state.toggleError) {
      errorMsg = <div className="error-msg">{this.state.errors}</div>;
    } else {
      errorMsg = <div></div>;
    }

    return(
      <div className="signup-login-form">
        <div className="user">
          <form onSubmit={this.handleSubmit}>
            {errorMsg}
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
          </form>
          <form onSubmit={this.loginUser}>
            <input type="submit" value="Guest log in" className="signuplogin-btn guest-login"></input>
          </form>
          <Link to="/signup" className="signlog-redirect">Sign up</Link>
        </div>

      </div>
    )
  }
});

module.exports = Login;
