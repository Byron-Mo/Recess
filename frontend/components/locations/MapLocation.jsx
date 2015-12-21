var React = require('react');

var MapLocation = React.createClass({
  componentDidMount: function() {
    var locationVisits = this.props.locationVisits;
    var markers = locationVisits.map(function(locationVisit) {
      return {
        latLng: [locationVisit.location.lat, locationVisit.location.lng],
        name: locationVisit.location.name
      }
    })

    // debugger
    var map = new jvm.Map({
       container: $(this.refs.map),
       map: 'world_mill',
       regionsSelectableOne: true,
       regionsSelectable: true,
       markersSelectable: true,
       markers: markers,

       markerStyle: {
         initial: {
           fill: '#4DAC26'
         },
         selected: {
           fill: '#CA0020'
         }
       },

       regionStyle: {
         initial: {
           fill: '#B8E186'
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
    return(
      <div ref="map" className="preference-map"></div>
    )
  }
});

module.exports = MapLocation;
