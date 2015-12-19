var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link,
    LocationInput = require('../locations/locationinput'),
    LocationStore = require('../../stores/LocationStore'),
    UserStore = require('../../stores/UserStore');

var UserHomepage = React.createClass({
  // getInitialState: function() {
  //   return { user: UserStore.fetchUser() }
  // },
  //
  // updateState: function() {
  //   this.setState({ user: UserStore.fetchUser() })
  // },
  //
  // componentDidMount: function() {
  //   this.listener = UserStore.addListener(this.updateState)
  //   ApiUtil.fetchUser();
  // },
  //
  // componentWillUnmount: function() {
  //   this.listener.remove();
  // },

  handleClick: function() {
    // debugger
    var url = "/user/" + this.props.params.userid + "/reviews";
    this.props.history.push(url);
  },

  render: function() {
    return(
      <div>
        <br></br>
        user home page
        <br></br>
        <LocationInput userid={this.props.params.userid}/>
        <br></br>
        <div onClick={this.handleClick} className="user-review-link">Your Reviews</div>
      </div>
    )
  }
});

module.exports = UserHomepage;
