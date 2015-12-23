var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    Link = require('react-router').Link,
    ApiUtil = require('../../util/apiutil');

var MapLocation = React.createClass({
  getInitialState: function() {
    return { toggleLocation: 0, location: "", locationVisits: "", locations: "" }
  },

  componentWillReceiveProps: function(newProps) {
    // debugger
    this.setState({ locationVisits: newProps.locationVisits, locations: newProps.locations })
    this.markers = newProps.locationVisits.map(function(locationVisit) {
      return {
        latLng: [locationVisit.location.lat, locationVisit.location.lng],
        name: locationVisit.location.name
      }
    })
    this.map.addMarkers(this.markers)
  },

  componentDidMount: function() {
    var locationVisits = this.props.locationVisits;

    if (locationVisits) {
      this.markers = locationVisits.map(function(locationVisit) {
        return {
          latLng: [locationVisit.location.lat, locationVisit.location.lng],
          name: locationVisit.location.name
        }
      })
    }

    this.map = new jvm.Map({
       container: $(this.refs.map),
       map: 'continents_mill',
       backgroundColor: 'whitesmoke',
       markersSelectable: true,
       markersSelectableOne: true,
       markers: this.markers,
       zoomButtons : false,
       zoomOnScroll: false,

       regionStyle: {
          hover: {
              "fill-opacity": 1
          }
       },
      // onRegionLabelShow: function (e, el, code) {
      //     e.preventDefault();
      // },

       markerStyle: {
         initial: {
           fill: 'gold',
           r: 10
         },
         hover: {
          // "fill-opacity": 0.8,
          fill: '#333333'
         },
         selected: {
           fill: '#CA0020'
         }
       },

       regionStyle: {
         initial: {
           fill: 'steelblue'
         },
         hover: {
           "fill-opacity" : 1,
           cursor: 'default'
         }
       },

       onMarkerClick: function(e, index) {
         var locations = this.state.locations;
         this.markerIndex = index
         for (var key in locations) {
           if (locations.hasOwnProperty(key)) {
             if (locations[key].name === this.markers[index].name) {
               this.setState({ toggleLocation: 1, location: locations[key] })
             }
           }
         }
       }.bind(this)
    });

  },

  deleteMarker: function() {
    // debugger
    var id;
    var that = this;
    this.state.locationVisits.forEach(function(locationVisit) {
      if (locationVisit.location_id === that.state.location.id) {
        id = locationVisit.id;
      }
    })
    this.map.removeMarkers(this.markerIndex)
    this.setState({toggleLocation: 0})
    ApiUtil.destroyLocationVisit(id)
    console.log(id)
  },

  render: function() {
    var locationPopup;

    if (this.state.toggleLocation) {
      var url = "/location/" + this.state.location.id;

      locationPopup = (
        <div>
          <Link to={url}>{this.state.location.name}</Link>
          <div onClick={this.deleteMarker}>Delete marker</div>
        </div>
      )
    } else {
      locationPopup = <div></div>
    }

    return(
      <div>
        <div ref="map" className="preference-map"></div>
        {locationPopup}
      </div>

    )
  }
});

module.exports = MapLocation;
