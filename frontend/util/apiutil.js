var UserActions = require('../actions/UserActions'),
    SessionActions = require('../actions/SessionActions');

ApiUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      type: "POST",
      data: {user: user},
      success: function(response) {
        UserActions.createUser(response)
      },
      error: function(response) {
        UserActions.error(response)
      }
    })
  },

  createSession: function(user) {
    // $.post('api/session', {user: user}, function(response) {
    //   SessionActions.createSession(response);
    // })

    $.ajax({
      url: 'api/session',
      type: "POST",
      data: {user: user},
      success: function(response) {
        SessionActions.createSession(response)
      },
      error: function(response) {
        SessionActions.error(response)
      }
    })
  },

  fetchUser: function(id) {
    $.get('api/user/' + id, {}, function(response) {
      UserActions.receiveUser(response);
    })
  },

  logoutSession: function() {
    $.ajax({
      url: 'session',
      type: 'DELETE',
      success: SessionActions.logoutSession()
    })
  }
};

module.exports = ApiUtil;
