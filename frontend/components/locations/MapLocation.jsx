var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    Link = require('react-router').Link,
    ApiUtil = require('../../util/apiutil');

var MapLocation = React.createClass({
  getInitialState: function() {
    return { toggleLocationVisit: false, toggleLocationWish: false, locationVisit: "", locationWish: "" }
  },

  componentWillReceiveProps: function(newProps) {
    this.markersVisit = newProps.locationVisits.map(function(locationVisit) {
      return {
        latLng: [locationVisit.location.lat, locationVisit.location.lng],
        name: locationVisit.location.name,
        style: {fill: 'darkorange', r:10}
      }
    })

    this.markersWish = newProps.locationWishes.map(function(locationWish) {
      return {
        latLng: [locationWish.location.lat, locationWish.location.lng],
        name: locationWish.location.name,
        style: {fill: 'yellow', r:10}
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
          style: {fill: 'darkorange', r:10}
        }
      })
    }

    if (locationVisits) {
      this.markersWish = locationWishes.map(function(locationWish) {
        return {
          latLng: [locationWish.location.lat, locationWish.location.lng],
          name: locationWish.location.name,
          style: {fill: 'yellow', r:10}
        }
      })
    }

    this.markers = this.markersVisit.concat(this.markersWish)
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

      series: {
        markers: [{
          scale: {
            Visited: 'darkorange',
            Wishlist: 'yellow'
          },
          legend: {
            horizontal: true
          }
        }]
      },

       markerStyle: {
         hover: {
          "fill-opacity": 1,
          // fill: 'blue'
         },
         selected: {
           fill: 'goldenrod',
           r: 12
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
                   if (this.state.locationVisit === location) {
                     this.setState({toggleLocationVisit: !this.state.toggleLocationVisit})
                   } else {
                     this.setState({toggleLocationVisit: true})
                   }
                   this.setState({
                     toggleLocationWish: false,
                     locationVisit: location
                   });
                 };
               };
               for (var i = 0; i < locationWishes.length; i++) {
                 if (locationWishes[i].location_id === location.id) {
                   if (this.state.locationWish === location) {
                     this.setState({toggleLocationWish: !this.state.toggleLocationWish})
                   } else {
                     this.setState({toggleLocationWish: true})
                   }
                   this.setState({
                     toggleLocationVisit: false,
                     locationWish: location
                   });
                 };
               };
             }
           }
         }
       }.bind(this)
    });
  },

  deleteVisitMarker: function() {
    var id;
    var that = this;
    this.props.locationVisits.forEach(function(locationVisit) {
      if (locationVisit.location_id === that.state.locationVisit.id) {
        id = locationVisit.id;
      }
    })
    this.setState({toggleLocationVisit: false})
    ApiUtil.destroyLocationVisit(id)
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
        <div className="location-popup">
          <div className="location-visit-title">You've visited:</div>
          <Link to={url} className="location-visit-link">{this.state.locationVisit.name}</Link>
          <br></br>
          <input type="submit" onClick={this.deleteVisitMarker} className="location-visit-delete" value="Delete marker"></input>
        </div>
      )
    } else {
      locationVisitPopup = <div></div>
    }

    if (this.state.toggleLocationWish) {
      var url = "/location/" + this.state.locationWish.id;

      locationWishPopup = (
        <div className="location-popup">
          <div className="location-visit-title">On your wishlist:</div>
          <Link to={url} className="location-visit-link">{this.state.locationWish.name}</Link>
          <br></br>
          <input type="submit" onClick={this.deleteWishMarker} className="location-visit-delete" value="Delete marker"></input>
        </div>
      )
    } else {
      locationWishPopup = <div></div>
    }

    return(
      <div>
        <div ref="map" className="preference-map"></div>
        <div className="location-visit-div">
          {locationVisitPopup}
          {locationWishPopup}
        </div>
      </div>

    )
  }
});

module.exports = MapLocation;
