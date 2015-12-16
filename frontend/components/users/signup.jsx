var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    History = require('react-router').History,
    UserStore = require('../../stores/UserStore');

var Signup = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { username: "", password: "", user: "", errors: "" };
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateState)
  },

  updateState: function() {
    this.setState({ user: UserStore.fetchUser(), errors: UserStore.fetchErrors() })
    if (this.state.user === undefined) {
      alert(this.state.errors)
    } else {
      var url = '/user/' + this.state.user.username
      this.props.history.push(url)
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
      <form className="user" onSubmit={this.handleSubmit}>
        <label className="signuplogin">Username</label>
        <br></br>
        <input type="text" valueLink={this.linkState("username")}></input>
        <br></br><br></br>
        <label className="signuplogin">Password</label>
        <br></br>
        <input type="password" valueLink={this.linkState("password")}></input>
        <br></br><br></br>
        <input type="submit" value="Create account" className="signuplogin-btn"></input>
        <br></br><br></br>

      </form>
    )
  }
});

module.exports = Signup;
