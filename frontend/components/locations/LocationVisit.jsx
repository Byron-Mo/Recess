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

  includeLocation: function(location) {
    var locationId = this.props.user.location_visits.map(function(location_visit) {
      return location_visit.location_id;
    })

    return locationId.indexOf(location.id)
  },

  handleSubmitVisit: function(e) {
    e.preventDefault();
    this.setState({toggleLocationVisit: 0})

    var userInput = this.state.searchStringVisit.trim().toLowerCase();

    if (userInput.length <= 3) {
      this.setState({toggleErrorVisit: 1})
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

      this.setState({toggleErrorVisit: 0, searchStringVisit: "", toggleLocationVisit: 1})
    }
  },

  handleSubmitWish: function(e) {
    e.preventDefault();
    this.setState({toggleLocationWish: 0})

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

      this.setState({toggleErrorWish: 0, searchStringWish: "", toggleLocationWish: 1})
    }
  },

  sortUniq: function(countries) {
    var sortedCountries = [];
    var countries = countries.sort();
    for (var i = 0; i < countries.length; i++) {
      if (countries[i] !== countries[i - 1]) {
        sortedCountries.push(countries[i])
      }
    }
    return sortedCountries;
  },

  findCountries: function() {
    var locations = this.props.locations;
    var countries = [];

    if (locations) {
      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          var locationName = locations[key].name.split(', ');
          countries.push(locationName[locationName.length - 1]);
        }
      }
      return this.sortUniq(countries);
    }
  },

  findCities: function(country) {
    var locations = this.props.locations;
    var cities = []

    if (locations) {
      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          var locationName = locations[key].name;
          if (locationName.indexOf(country) !== -1) {
            var locationName = locationName.split(', ')[0];
            cities.push(locationName);
          }
        }
      }
    }
    return cities;
  },

  printCountry: function(country) {
    var optionStr = document.getElementById(country);
    var countries = this.findCountries();
    if (optionStr) {
      optionStr.length = 0;
      optionStr.options[0] = new Option('Select Country', '');
      optionStr.selectedIndex = 0;
      for (var i = 0; i < countries.length; i++) {
        optionStr.options[optionStr.length] = new Option(countries[i], countries[i])
      }
    }
  },

  printCity: function(e) {
    var optionStr = document.getElementById('city');
    var cities = this.findCities(e.target.value),
        allCities;

    if (optionStr) {
      optionStr.length = 0;
      optionStr.options[0] = new Option('Select City', '');
      optionStr.selectedIndex = 0;
      for (var i = 0; i < cities.length; i++) {
        optionStr.options[optionStr.length] = new Option(cities[i], cities[i])
      }
    }
  },


  handleSubmit: function(e) {
    e.preventDefault();

    var city = e.target.city.value.trim().toLowerCase();
    var locations = this.props.locations,
        location;

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].name.toLowerCase().match("^" + city)) {
          location = locations[key];
          break;
        }
      }
    }

    // debugger

    if (this.submitValue === 'visit') {
      ApiUtil.locationVisit({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });
    } else if (this.submitValue === 'wish') {
      ApiUtil.locationWish({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });
    } else {
      console.log("in here")
    }
  },

  handleClick: function(e) {
    this.submitValue = e.target.name
  },

  addCities: function() {
    var locations = this.props.locations,
        allCities = [],
        selectedOption = [];

    if (locations) {
      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          var locationName = locations[key].name.split(', ')[0]
          allCities.push(locationName)
        }
      }
    }

    if (allCities) {
      allCities.sort().forEach(function(city) {
        selectedOption.push(<option value={city} key={city}>{city}</option>)
      })
    }
    return selectedOption
  },

  render: function() {
    var errorMsgVisit = this.state.toggleErrorVisit ? <div className="error-msg">Invalid City</div> : <div></div>;
    var errorMsgWish = this.state.toggleErrorWish ? <div className="error-msg">Invalid City</div> : <div></div>;

    var locationVisitResp = this.state.toggleLocationVisit ? <div className="error-msg">Location Added!</div> : <div></div>;
    var locationWishResp = this.state.toggleLocationWish ? <div className="error-msg">Location Added!</div> : <div></div>

    if (this.props.user) {
      var mapLocation = <MapLocation locationVisits={this.props.user.location_visits} locations={this.props.locations} locationWishes={this.props.user.location_wishes}/>
    } else {
      var mapLocation = <div></div>
    }

    return(
      <div>
        <script language="javascript">{this.printCountry("country")};</script>
        {mapLocation}
        <br></br>
        Narrow down by Country <select onChange={this.printCity} id="country" name="country" className=""></select><br></br>
        Select City
        <form onSubmit={this.handleSubmit}>
          <select name="city" id="city" className="dropdown">
            <option>City</option>
            {this.addCities()}
          </select><br></br>
          <input type="submit" value="I've been here" name="visit" onClick={this.handleClick} className="location-visit-wish-submit"></input>
          <input type="submit" value="I want to go here" name="wish" onClick={this.handleClick} className="location-visit-wish-submit"></input>
        </form>
        <br></br>
        <br></br>
        <div className="location-visit-wish-div">
          <form className="location-visit-wish-form location-input-1" onSubmit={this.handleSubmitVisit}>
            {errorMsgVisit}
            {locationVisitResp}
            <input type="text" className="location-visit-wish-input" valueLink={this.linkState("searchStringVisit")} placeholder="Enter a city"></input>
            <br></br>
            <input type="submit" value="I've been here" className="location-visit-wish-submit"></input>
          </form>
          <form className="location-visit-wish-form location-input-2" onSubmit={this.handleSubmitWish}>
            {errorMsgWish}
            {locationWishResp}
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
