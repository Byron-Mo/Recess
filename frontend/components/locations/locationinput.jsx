var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    LocationStore = require('../../stores/LocationStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    History = require('react-router').History;

var LocationInput = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { locations: LocationStore.all(), searchString: "", toggleError: 0, errors: "" }
  },

  componentDidMount: function() {
    this.updateLocation = LocationStore.addListener(this.updateState);
    ApiUtil.fetchLocations();
  },

  componentWillUnmount: function() {
    this.updateLocation.remove();
  },

  updateState: function() {
    this.setState({locations: LocationStore.all()})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(location)

    var userInput = this.state.searchString.trim().toLowerCase();

    if (userInput.length <= 3) {
      this.setState({toggleError: 1})
      return this.history.push("/user/" + this.props.userid)
    }

    var locations = this.state.locations,
        location;

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].name.toLowerCase().match("^" + userInput)) {
          location = locations[key]
          console.log(location)
          break;
        }
      }
    }

    if (location === undefined) {
      this.setState({toggleError: 1})
      this.history.push("/user/" + this.props.userid)
    } else {
      this.history.pushState(null, '/location/' + location.id)
    }
  },

  render: function() {
    var errorMsg = this.state.toggleError ? <div className="error-msg">Invalid Location</div> : <div></div>;

    return(
      <form onSubmit={this.handleSubmit}>
        {errorMsg}
        {/*<script>{this.autoComplete}</script>*/}
        <input id="tags" type="text" valueLink={this.linkState("searchString")}></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }
});

module.exports = LocationInput;
