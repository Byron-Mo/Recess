// var Store = require('flux/utils').Store,
//     AppDispatcher = require('../dispatcher/dispatcher'),
//     SessionConstants = require('../constants/SessionConstants'),
//     _sessions = [],
//     SessionStore = new Store(AppDispatcher);
//
// SessionStore.fetchUser = function() {
//   return _sessions[0];
// },
//
// SessionStore.createSession = function(session) {
//   _sessions.push(session);
//   SessionStore.__emitChange();
// };
//
// SessionStore.logoutSession = function(session) {
//   _sessions = [];
//   // SessionStore.__emitChange();
// };
//
// SessionStore.__onDispatch = function(payload) {
//   switch (payload.actionType) {
//     case SessionConstants.CREATE_SESSION:
//       SessionStore.createSession(payload.session)
//       break;
//     case SessionConstants.LOGOUT_SESSION:
//       SessionStore.logoutSession(payload.session)
//       break;
//     case SessionConstants.ERROR:
//       // SessionStore.error(payload.response)
//       SessionStore.__emitChange();
//       break;
//   }
// };
//
// module.exports = SessionStore
