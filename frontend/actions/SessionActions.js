var Dispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/SessionConstants');

var SessionActions = {
  createSession: function(session) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CREATE_SESSION,
      session: session
    })
  },

  logoutSession: function(session) {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT_SESSION,
      session: session
    })
  }
};

module.exports = SessionActions;
