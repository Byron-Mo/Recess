var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    LocationConstants = require('../constants/LocationConstants'),
    _locations = {},
    _errors = [],
    LocationStore = new Store(AppDispatcher);

LocationStore.all = function() {
  var dupLocations = {};
  for (var key in _locations) {
    if (_locations.hasOwnProperty(key)) {
      dupLocations[key] = _locations[key];
    }
  };
  return dupLocations;
};

LocationStore.fetchLocation = function() {
  for (var key in _locations) {
    if (_locations.hasOwnProperty(key)) {
      return _locations[key];
      break;
    }
  }
};

LocationStore.resetLocations = function(locations) {
  _locations = {};
  locations.forEach(function(location) {
    _locations[location.id] = location;
  });
  LocationStore.__emitChange();
};

LocationStore.resetLocation = function(location) {
  _locations[location.id] = location;
  LocationStore.__emitChange();
};

// LocationStore.find = function(locationName) {
//   for (var key in _locations) {
//     if (_locations.hasOwnProperty(key)) {
//       if (locationName === _locations[key].name) {
//         return _locations[key];
//         break;
//       }
//     }
//   }
// };

LocationStore.find = function(locationId) {
  return _locations[locationId];
};

// LocationStore.fetchErrors = function() {
//   return _errors.slice();
// };
//
// LocationStore.error = function(response) {
//   _errors = [];
//   response.responseJSON.forEach(function(msg) {
//     _errors.push(msg)
//   })
//   LocationStore.__emitChange();
// };

LocationStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case LocationConstants.RECEIVE_LOCATIONS:
      LocationStore.resetLocations(payload.locations)
      break;
    case LocationConstants.RESET_LOCATION:
      LocationStore.resetLocation(payload.location)
      break;
  }
};

module.exports = LocationStore;
