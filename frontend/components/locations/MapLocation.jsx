var React = require('react'),
    UserStore = require('../../stores/UserStore');

var MapLocation = React.createClass({
  componentWillReceiveProps: function(newProps) {
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
      //  regionsSelectableOne: true,
      //  regionsSelectable: true,
       markersSelectable: true,
       markers: this.markers,
       zoomButtons : false,
       zoomOnScroll: false,

       regionStyle: {
          hover: {
              "fill-opacity": 1
          }
      },
      onRegionLabelShow: function (e, el, code) {
          e.preventDefault();
      },

       markerStyle: {
         initial: {
           fill: 'gold',
           r: 10
         },
         selected: {
           fill: '#CA0020'
         }
       },

       regionStyle: {
         initial: {
           fill: 'steelblue'
         },
         selected: {
           fill: '#F4A582'
         }
       },

      //  onRegionSelected: function(e, el){
      //    if (window.localStorage) {
      //      window.localStorage.setItem(
      //        'jvectormap-selected-regions',
      //        JSON.stringify(map.getSelectedRegions())
      //      );
      //    }
      //  },

     });

    // map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
  },

  render: function() {
    // debugger
    return(
      <div ref="map" className="preference-map"></div>
    )
  }
});

module.exports = MapLocation;
