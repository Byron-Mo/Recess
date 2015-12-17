var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    LocationStore = require('../../stores/LocationStore');

var LocationInput = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { searchString: "", location: "", errors: "" }
  },

  getLocationId: function(locationName) {
    var locations = this.props.locations;
    var location = locationName.trim().toLowerCase();
    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (location === locations[key].name.trim().toLowerCase()) {
          return locations[key].id;
          break;
        };
      };
    };
  },

  updateState: function() {
    var id = this.getLocationId(this.state.searchString);
    this.setState({location: LocationStore.find(id)})
    debugger
  },

  componentDidMount: function() {
    this.listener = LocationStore.addListener(this.updateState)
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var id = this.getLocationId(this.state.searchString);
    if (id === undefined) {
      alert("Invalid Location")
      this.setState({searchString: ""})
    } else {
      console.log("in here")
      ApiUtil.fetchLocation(id);
      // this.setState({location: LocationStore.find(id)});
    }
  },

  handleChange: function(e) {
    // this.setState({searchString: e.target.value})
  },

  // autoComplete: function() {
  //   var locations = this.props.locations;
  //   var locationNames = [];
  //   for (var key in locations) {
  //     if (locations.hasOwnProperty(key)) {
  //       locationNames.push(locations[key].name)
  //     };
  //   };
  //   var that = this;
  //   $("#tags").autocomplete({
  //     source: locationNames,
  //     change: function(event, ui) {
  //       if (ui.item) {
  //         console.log("in here")
  //         that.setState({searchString: ui.item.value})
  //       } else {
  //         alert("nope")
  //       }
  //     }
  //   })
  // },

  render: function() {


    return(
      <form onSubmit={this.handleSubmit}>
        {/*<script>{this.autoComplete}</script>*/}
        <input id="tags" type="text" valueLink={this.linkState("searchString")}></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }
});

module.exports = LocationInput;
