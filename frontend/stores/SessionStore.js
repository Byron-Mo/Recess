var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/SessionConstants'),
    _sessions = [],
    // _errors = [],
    SessionStore = new Store(AppDispatcher);

// SessionStore.fetchErrors = function() {
//   return _errors.slice();
// },
//
// SessionStore.error = function(response) {
//   _errors.push("Invalid Credentials");
//   SessionStore.__emitChange();
// },

SessionStore.fetchUser = function() {
  return _sessions[0];
},

SessionStore.createSession = function(session) {
  // console.log(session)
  _sessions.push(session);
  SessionStore.__emitChange();
};

SessionStore.logoutSession = function(session) {
  // if (_sessions.indexOf(session) !== -1) {
  //   _sessions = [];
  // };
  _sessions = [];
  // SessionStore.__emitChange();
};

SessionStore.resetState = function() {
  _sessions = [];
  // _errors = [];
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.CREATE_SESSION:
      SessionStore.createSession(payload.session)
      break;
    case SessionConstants.LOGOUT_SESSION:
      SessionStore.logoutSession(payload.session)
      break;
    case SessionConstants.ERROR:
      // SessionStore.error(payload.response)
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore
