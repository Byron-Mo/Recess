var React = require('react'),
    // UserStore = require('../../stores/UserStore'),
    History = require('react-router').History,
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link,
    LocationInput = require('../locations/locationinput'),
    LocationStore = require('../../stores/LocationStore');

var UserHomepage = React.createClass({
  getInitialState: function() {
    return { locations: LocationStore.all() }
  },

  updateState: function() {
    this.setState({ locations: LocationStore.all() })
  },

  componentDidMount: function() {
    this.listener = LocationStore.addListener(this.updateState)
    ApiUtil.fetchLocations();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  // handleSubmit: function() {
  //   ApiUtil.logoutSession();
  //   this.props.history.pushState(null, '/')
  // },

  render: function() {
    return(
      <div>
        <br></br>
        user home page
        <br></br>
        <LocationInput locations={this.state.locations} userid={this.props.location.query.id}/>
        <br></br>
        <Link to="/review/new">Add Review</Link>
      </div>
    )
  }
});

module.exports = UserHomepage;
