var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    MapLocation = require('./MapLocation'),
    UserStore = require('../../stores/UserStore');

var LocationVisit = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { searchStringVisit: "", searchStringWish: "", user: "", toggleError: 0}
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
      optionStr.options[0] = new Option('Narrow by country', '');
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
      optionStr.options[0] = new Option('Choose your city!', '');
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

    if (city === "" || location === undefined) {
      this.setState({toggleError: 1})
    } else if (this.submitValue === 'visit') {
      this.setState({toggleSubmit: 1, toggleError: 0})
      ApiUtil.locationVisit({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });
    } else if (this.submitValue === 'wish') {
      this.setState({toggleSubmit: 1, toggleErorr: 0})
      ApiUtil.locationWish({
        location_id: parseInt(location.id),
        user_id: parseInt(this.props.user.id)
      });
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
    var errorMsg = this.state.toggleError ? <div className="error-msg">Please select a city</div> : <div></div>;
    var locationSubmit = this.state.toggleSubmit ? <div className="error-msg">Location Added!</div> : <div></div>;

    if (this.props.user) {
      var mapLocation = <MapLocation locationVisits={this.props.user.location_visits} locations={this.props.locations} locationWishes={this.props.user.location_wishes}/>
    } else {
      var mapLocation = <div></div>
    }

    return(
      <div className="location-map-select">
        <script language="javascript">{this.printCountry("country")};</script>
        {mapLocation}
        <br></br>
        <div className="dropdown-menu">
          <p className="tag-description">Update places you've been or would like to go!</p>
          {errorMsg}
          {locationSubmit}
          <form onSubmit={this.handleSubmit}>
          <select onChange={this.printCity} id="country" name="country" className="soflow"></select>
            <select name="city" id="city" className="soflow">
              <option>Choose your city!</option>
              {this.addCities()}
            </select><br></br>
              <input type="submit" value="I've been here" name="visit" onClick={this.handleClick} className="location-visit-wish-submit button-input-1"></input>
              <input type="submit" value="I want to go here" name="wish" onClick={this.handleClick} className="location-visit-wish-submit button-input-2"></input>
          </form>
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
});

module.exports = LocationVisit;
