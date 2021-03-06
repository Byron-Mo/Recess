var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants');

var UserActions = {
  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    })
  },

  logoutUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER,
      user: user
    })
  }
};

module.exports = UserActions;
