var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    _errors = [],
    ErrorStore = new Store(AppDispatcher);

ErrorStore.error = function(response) {
  _errors = [];
  response.responseJSON.forEach(function(msg) {
    _errors.push(msg)
  })
  ErrorStore.__emitChange();
};

ErrorStore.fetchErrors = function() {
  return _errors.slice();
};
