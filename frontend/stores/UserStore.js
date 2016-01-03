var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants'),
    _users = [],
    _errors = [],
    UserStore = new Store(AppDispatcher);

UserStore.fetchUser = function() {
  return _users[0];
},

UserStore.createUser = function(user) {
  _users = [user];
  UserStore.__emitChange();
};

UserStore.logoutUser = function(user) {
  _users = [];
  UserStore.__emitChange();
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_USER:
      UserStore.createUser(payload.user)
      break;
    case UserConstants.LOGOUT_USER:
      UserStore.logoutUser(payload.user)
      break;
  }
};

module.exports = UserStore;
