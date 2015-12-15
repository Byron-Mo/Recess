var UserActions = require('../actions/UserActions'),
    SessionActions = require('../actions/SessionActions');

ApiUtil = {
  createUser: function(user_params) {
    $.post('api/users', {user_params: user_params}, function(user) {
      UserActions.createUser(user);
    })
  },

  createSession: function(user_params) {
    $.post('api/session', {user_params: user_params}, function(user) {
      SessionActions.createSession(user);
    })
  },

  logoutSession: function() {
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success: SessionActions.logoutSession()
    })
  }
};

module.exports = ApiUtil;
