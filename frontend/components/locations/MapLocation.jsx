var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    Link = require('react-router').Link,
    ApiUtil = require('../../util/apiutil');

var MapLocation = React.createClass({
  getInitialState: function() {
    return { toggleLocationVisit: false, toggleLocationWish: false, locationVisit: "", locationWish: "" }
  },

  componentWillReceiveProps: function(newProps) {
    // this.setState({ locationVisits: newProps.locationVisits, locations: newProps.locations })
    this.markersVisit = newProps.locationVisits.map(function(locationVisit) {
      return {
        latLng: [locationVisit.location.lat, locationVisit.location.lng],
        name: locationVisit.location.name,
        style: {fill: 'gold', r:10}
      }
    })
    // console.log(this.markersVisit)

    this.markersWish = newProps.locationWishes.map(function(locationWish) {
      return {
        latLng: [locationWish.location.lat, locationWish.location.lng],
        name: locationWish.location.name,
        style: {fill: 'green', r:10}
      }
    })
    this.markers = this.markersVisit.concat(this.markersWish)
    this.map.removeAllMarkers();
    this.map.addMarkers(this.markers)
  },

  componentDidMount: function() {
    var locationVisits = this.props.locationVisits,
        locationWishes = this.props.locationWishes;

    if (locationVisits) {
      this.markersVisit = locationVisits.map(function(locationVisit) {
        return {
          latLng: [locationVisit.location.lat, locationVisit.location.lng],
          name: locationVisit.location.name,
          style: {fill: 'gold', r:10}
        }
      })
    }

    if (locationVisits) {
      this.markersWish = locationWishes.map(function(locationWish) {
        return {
          latLng: [locationWish.location.lat, locationWish.location.lng],
          name: locationWish.location.name,
          style: {fill: 'green', r:10}
        }
      })
    }

    this.markers = this.markersVisit.concat(this.markersWish)
    console.log(this.markers.map(function(h) { return {name: h.name, latLng: h.latLng} }))
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
        //  initial: {
        //    fill: 'gold',
        //    r: 10
        //  },
         hover: {
          "fill-opacity": 0.8,
          // fill: 'blue'
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
         var locations = this.props.locations,
             location,
             locationVisits = this.props.locationVisits,
             locationWishes = this.props.locationWishes;

         for (var key in locations) {
           if (locations.hasOwnProperty(key)) {
             if (locations[key].name === this.markers[index].name) {
               location = locations[key];
               for (var i = 0; i < locationVisits.length; i++) {
                 if (locationVisits[i].location_id === location.id) {
                   this.setState({ toggleLocationVisit: !this.state.toggleLocationVisit, locationVisit: location });
                 };
               };
               for (var i = 0; i < locationWishes.length; i++) {
                 if (locationWishes[i].location_id === location.id) {
                   this.setState({ toggleLocationWish: !this.state.toggleLocationWish, locationWish: location});
                 };
               };
             }
           }
         }
       }.bind(this)
    });

  },

  deleteVisitMarker: function() {
    // debugger
    var id;
    var that = this;
    this.props.locationVisits.forEach(function(locationVisit) {
      if (locationVisit.location_id === that.state.locationVisit.id) {
        id = locationVisit.id;
      }
    })
    // console.log("the marker index is " + this.markerIndex)
    // this.map.removeMarkers(this.markerIndex)
    this.setState({toggleLocationVisit: false})
    ApiUtil.destroyLocationVisit(id)
    console.log(id)
  },

  deleteWishMarker: function() {
    var id;
    var that = this;
    this.props.locationWishes.forEach(function(locationWish) {
      if (locationWish.location_id === that.state.locationWish.id) {
        id = locationWish.id
      }
    })

    this.setState({toggleLocationWish: false})
    ApiUtil.destroyLocationWish(id)
  },

  render: function() {
    var locationVisitPopup,
        locationWishPopup;

    if (this.state.toggleLocationVisit) {
      var url = "/location/" + this.state.locationVisit.id;

      locationVisitPopup = (
        <div>
          <Link to={url}>{this.state.locationVisit.name}</Link>
          <div onClick={this.deleteVisitMarker}>Delete marker</div>
        </div>
      )
    } else {
      locationVisitPopup = <div></div>
    }

    if (this.state.toggleLocationWish) {
      var url = "/location/" + this.state.locationWish.id;

      locationWishPopup = (
        <div>
          <Link to={url}>{this.state.locationWish.name}</Link>
          <div onClick={this.deleteWishMarker}>Delete marker</div>
        </div>
      )
    } else {
      locationWishPopup = <div></div>
    }

    return(
      <div>
        <div ref="map" className="preference-map"></div>
        {locationVisitPopup}
        {locationWishPopup}
      </div>

    )
  }
});

module.exports = MapLocation;
