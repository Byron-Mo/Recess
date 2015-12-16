var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants'),
    _users = [],
    _errors = [],
    UserStore = new Store(AppDispatcher);

UserStore.fetchUser = function() {
  return _users[0];
},

UserStore.find = function(id) {
  return _users[id];
};

UserStore.createUser = function(user) {
  _users.push(user);
  UserStore.__emitChange();
};

UserStore.fetchErrors = function() {
  return _errors.slice();
};

UserStore.error = function(response) {
  response.responseJSON.forEach(function(msg) {
    _errors.push(msg)
  })
  UserStore.__emitChange();
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.CREATE_USER:
      UserStore.createUser(payload.user);
      break;
    case UserConstants.ERROR:
      UserStore.error(payload.response)
      break;
  }
};

module.exports = UserStore;
