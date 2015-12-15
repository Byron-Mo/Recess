var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/SessionConstants'),
    _sessions = [],
    SessionStore = new Store(AppDispatcher);

SessionStore.createSession = function(session) {
  _sessions.push(session);
  SessionStore.__emitChange();
};

SessionStore.logoutSession = function(session) {
  if (_sessions.indexOf(session) !== -1) {
    _sessions = [];
  };
  SessionStore.__emitChange();
};

SessionStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SessionConstants.CREATE_SESSION:
      UserStore.createSession(payload.session)
      break;
    case SessionConstants.LOGOUT_SESSION:
      UserStore.logoutSession(payload.session)
      break;
  }
};
