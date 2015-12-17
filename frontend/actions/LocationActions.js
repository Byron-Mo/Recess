var Dispatcher = require('../dispatcher/dispatcher'),
    LocationConstants = require('../constants/LocationConstants');

var LocationActions = {
  receiveAllLocations: function(locations) {
    Dispatcher.dispatch({
      actionType: LocationConstants.RECEIVE_LOCATIONS,
      locations: locations
    })
  },

  receiveLocation: function(location) {
    Dispatcher.dispatch({
      actionType: LocationConstants.RESET_LOCATION,
      location: location
    })
  },

  error: function(response) {
    Dispatcher.dispatch({
      actionType: LocationConstants.ERROR,
      response: response
    })
  }
};

module.exports = LocationActions;
