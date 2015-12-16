var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants');

var UserActions = {
  createUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    })
  },

  receiveUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    })
  },

  error: function(response) {
    Dispatcher.dispatch({
      actionType: UserConstants.ERROR,
      response: response
    })
  }
};

module.exports = UserActions;
