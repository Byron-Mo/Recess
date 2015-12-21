var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var LocationVisit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { searchString: "", toggleError: 0 }
  },

  includeLocation: function(location) {
    // debugger
    var locationId = this.props.user.location_visits.map(function(location_visit) {
      return location_visit.location_id;
    })

    return locationId.indexOf(location.id)
    // this.props.user.location_visits.forEach(function(location_visit) {
    //   if (location.id === location_visit.location_id) {
    //     return true;
    //   }
    // })
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var userInput = this.state.searchString.trim().toLowerCase();

    if (userInput.length <= 3) {
      this.setState({toggleError: 1})
      return this.history.push("/user/" + this.props.userid)
    }

    var locations = this.props.locations,
        location;

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].name.toLowerCase().match("^" + userInput)) {
          location = locations[key]
          break;
        }
      }
    }

    // var that = this;
    // debugger
    // this.props.user.location_visits.forEach(function(location_visit) {
    //   if (location.id === location_visit.location_id) {
    //     return that.setState({toggleError: 1});
    //   }
    // })
    console.log(this.includeLocation(location))
    if (location === undefined) {
      this.setState({toggleError: 1})
    } else if (this.includeLocation(location) !== -1) {
      this.setState({toggleError: 1})
    } else {
      // debugger
      ApiUtil.locationVisit({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });
      console.log("sucessfully added visited location")
      this.setState({toggleError: 0, searchString: ""})

    }
  },

  render: function() {
    var errorMsg = this.state.toggleError ? <div className="error-msg">Invalid City</div> : <div></div>;

    return(
      <form className="location-visit-wish-form" onSubmit={this.handleSubmit}>
        {errorMsg}
        <input type="text" className="location-visit-wish-input" valueLink={this.linkState("searchString")}></input>
        <input type="submit" value="I've been here" className="location-visit-wish-submit"></input>
      </form>
    )
  }
});

module.exports = LocationVisit;
