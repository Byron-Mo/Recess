var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link,
    LocationInput = require('../locations/locationinput'),
    LocationStore = require('../../stores/LocationStore');

var UserHomepage = React.createClass({
  // getInitialState: function() {
  //   return { locations: LocationStore.all() }
  // },
  //
  // updateState: function() {
  //   this.setState({ locations: LocationStore.all() })
  // },
  //
  // componentDidMount: function() {
  //   this.listener = LocationStore.addListener(this.updateState)
  //   ApiUtil.fetchLocations();
  // },
  //
  // componentWillUnmount: function() {
  //   this.listener.remove();
  // },

  render: function() {
    return(
      <div>
        <br></br>
        user home page
        <br></br>
        <LocationInput userid={this.props.params.userid}/>
        <br></br>
      </div>
    )
  }
});

module.exports = UserHomepage;
