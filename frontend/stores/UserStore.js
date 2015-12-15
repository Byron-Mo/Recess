var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants'),
    _users = {},
    UserStore = new Store(AppDispatcher);

// UserStore.all = function() {
//   var dupUsers = {}
//   for (key in _users) {
//     if (_users.hasOwnProperty(key)) {
//       dupUsers[key] = _users[key];
//     }
//   };
//
//   return dupUsers;
// };

UserStore.createUser = function(user) {
  _users[user.id] = user;
  UserStore.__emitChange();
}

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.CREATE_USER:
      UserStore.createUser(payload.user_params);
      break;
  }
}
