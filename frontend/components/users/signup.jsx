var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    UserStore = require('../../stores/UserStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    Link = require('react-router').Link;

var Signup = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { username: "", password: "", user: "", errors: "", toggleError: 0 };
  },

  componentDidMount: function() {
    this.updateUser = UserStore.addListener(this.updateState);
    this.updateErrors = ErrorStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.updateUser.remove();
    this.updateErrors.remove();
  },

  updateState: function() {
    this.setState({ user: UserStore.fetchUser(), errors: ErrorStore.fetchErrors() })

    if (this.state.user === undefined) {
      this.setState({toggleError: 1})
    } else {
      var url = '/user/' + this.state.user.id
      this.props.history.push(url)
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    localStorage.setItem('visited', false)
    ApiUtil.createUser({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({password: ""});
  },

  loginUser: function(e) {
    e.preventDefault();
    localStorage.setItem('visited', false)
    ApiUtil.createSession({
      username: "Guest",
      password: "password"
    })
  },

  render: function() {
    var errorMsg;

    if (this.state.toggleError) {
      errorMsg = (
        <ul className="error-msg">
          {this.state.errors.map(function(msg) {
            return <li>{msg}</li>
          })}
        </ul>
      )
    } else {
      errorMsg = <div></div>
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
            <input type="submit" value="Create account" className="signuplogin-btn"></input>
            <br></br>
          </form>
          <form onSubmit={this.loginUser}>
            <input type="submit" value="Guest log in" className="signuplogin-btn guest-login"></input>
          </form>
          <Link to="/login" className="signlog-redirect">Log in</Link>
        </div>
      </div>
    )
  }
});

module.exports = Signup;
