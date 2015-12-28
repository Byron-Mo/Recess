var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    MapLocation = require('./MapLocation'),
    UserStore = require('../../stores/UserStore');

var LocationVisit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { searchStringVisit: "", searchStringWish: "", toggleErrorVisit: 0, user: ""}
  },

  // componentWillReceiveProps: function(newProps) {
  //   ApiUtil.fetchUser(newProps.user.id)
  // },
  //
  // updateState: function() {
  //   this.setState({user: UserStore.fetchUser()})
  //   // debugger
  // },
  //
  // componentDidMount: function() {
  //   this.listener = UserStore.addListener(this.updateState)
  // },
  //
  // componentWillUnmount: function() {
  //   this.listener.remove();
  // },

  includeLocation: function(location) {
    var locationId = this.props.user.location_visits.map(function(location_visit) {
      return location_visit.location_id;
    })

    return locationId.indexOf(location.id)
  },

  handleSubmitVisit: function(e) {
    e.preventDefault();

    var userInput = this.state.searchStringVisit.trim().toLowerCase();

    if (userInput.length <= 3) {
      this.setState({toggleErrorVisit: 1})
      // return this.history.push("/user/" + this.props.user.id)
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

    if (location === undefined) {
      this.setState({toggleErrorVisit: 1})
    } else if (this.includeLocation(location) !== -1) {
      this.setState({toggleErrorVisit: 1})
    } else {
      ApiUtil.locationVisit({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });

      this.setState({toggleErrorVisit: 0, searchStringVisit: ""})
    }
  },

  handleSubmitWish: function(e) {
    e.preventDefault();

    var userInput = this.state.searchStringWish.trim().toLowerCase();

    if (userInput.length <= 3) {
      this.setState({toggleErrorWish: 1})
    }

    var locations = this.props.locations,
        location;

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].name.toLowerCase().match("^" + userInput)) {
          location = locations[key];
          break;
        }
      }
    }

    if (location === undefined) {
      this.setState({toggleErrorWish: 1})
    } else if (this.includeLocation(location) !== -1) {
      this.setState({toggleErrorWish: 1})
    } else {
      ApiUtil.locationWish({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });

      this.setState({toggleErrorWish: 0, searchStringWish: ""})
    }
  },

  render: function() {
    var errorMsgVisit = this.state.toggleErrorVisit ? <div className="error-msg">Invalid City</div> : <div></div>;
    var errorMsgWish = this.state.toggleErrorWish ? <div className="error-msg">Invalid City</div> : <div></div>;

    if (this.props.user) {
      var mapLocation = <MapLocation locationVisits={this.props.user.location_visits} locations={this.props.locations} locationWishes={this.props.user.location_wishes}/>
    } else {
      var mapLocation = <div></div>
    }

    return(
      <div>
        {mapLocation}
        <br></br>
        <div className="location-visit-wish-div">
          <form className="location-visit-wish-form location-input-1" onSubmit={this.handleSubmitVisit}>
            {errorMsgVisit}
            <input type="text" className="location-visit-wish-input" valueLink={this.linkState("searchStringVisit")} placeholder="Enter a city"></input>
            <br></br>
            <input type="submit" value="I've been here" className="location-visit-wish-submit"></input>
          </form>
          <form className="location-visit-wish-form location-input-2" onSubmit={this.handleSubmitWish}>
            {errorMsgWish}
            <input type="text" className="location-visit-wish-input" valueLink={this.linkState("searchStringWish")} placeholder="Enter a city"></input>
            <br></br>
            <input type="submit" value="I want to go here" className="location-visit-wish-submit"></input>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = LocationVisit;
