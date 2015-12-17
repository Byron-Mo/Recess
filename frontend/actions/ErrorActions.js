var Dispatcher = require('../dispatcher/dispatcher');

var ErrorActions = {
  error: function(response) {
    Dispatcher.dispatch({
      actionType: "ERROR",
      response: response
    })
  }
};

module.exports = ErrorActions;
