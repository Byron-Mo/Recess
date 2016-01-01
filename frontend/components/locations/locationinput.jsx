var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    LocationStore = require('../../stores/LocationStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    History = require('react-router').History;

var LocationInput = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { searchString: "", toggleError: 0, errors: "" }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var userInput = this.state.searchString.trim().toLowerCase();

    if (userInput.length < 3) {
      this.setState({toggleError: 1})
      return this.history.push("/user/" + this.props.userid)
    }

    var locations = this.props.locations,
        searchedLocations  = [];

      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          if (locations[key].name.toLowerCase().match(userInput)) {
            searchedLocations.push(locations[key]);
          }
        }
      }

      if (searchedLocations.length === 0) {
        this.setState({toggleError: 1})
      } else if (searchedLocations.length > 1) {
        this.history.pushState(null, '/searchedlocations/', [userInput])
      } else {
        var locationId = searchedLocations[0].id
        ApiUtil.fetchLocation(locationId);
        this.history.pushState(null, '/location/' + locationId)
      }
  },

  render: function() {
    var errorMsg = this.state.toggleError ? <div className="error-msg">Invalid City/Country</div> : <div></div>;

    return(
      <div className="location-input-div">
        <form onSubmit={this.handleSubmit} className="location-input-form">
          {errorMsg}
          <input id="tags" type="text" valueLink={this.linkState("searchString")} className="user-input"></input>
          <br></br>
          <input type="submit" value="Search destination" className="search-location-btn"></input>
        </form>
      </div>
    )
  }
});

module.exports = LocationInput;
