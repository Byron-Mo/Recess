var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/UserConstants');

var UserActions = {
  createUser: function(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
      user: user
    })
  }
}
