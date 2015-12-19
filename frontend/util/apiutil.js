var UserActions = require('../actions/UserActions'),
    SessionActions = require('../actions/SessionActions'),
    ReviewActions = require('../actions/ReviewActions'),
    LocationActions = require('../actions/LocationActions'),
    ErrorActions = require('../actions/ErrorActions');

ApiUtil = {
  createUser: function(user) {
    $.ajax({
      url: 'api/users',
      type: "POST",
      data: {user: user},
      success: function(response) {
        UserActions.receiveUser(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  createSession: function(user) {
    $.ajax({
      url: 'api/session',
      type: "POST",
      data: {user: user},
      success: function(response) {
        UserActions.receiveUser(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  fetchUser: function(id) {
    $.ajax({
      url: 'api/users/' + id,
      type: 'GET',
      success: function(response) {
        UserActions.receiveUser(response);
      }
    })
  },

  logoutSession: function() {
    $.ajax({
      url: 'session',
      type: 'DELETE',
      success: UserActions.logoutUser()
    })
  },

  createReview: function(review) {
    $.ajax({
      url: 'api/reviews',
      type: 'POST',
      data: {review: review},
      success: function(response) {
        LocationActions.receiveLocation(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  updateReview: function(id) {
    $.ajax({
      url: 'api/reviews/' + id,
      type: 'PATCH',
      data: {id: id},
      success: function(response) {
        ReviewActions.receiveReview(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  destroyReview: function(id) {
    $.ajax({
      url: 'api/reviews/' + id,
      type: 'DELETE',
      success: function(response) {
        // ReviewActions.destroyReview(id)
        UserActions.receiveUser(response)
      }
    })
  },

  fetchReviews: function(userid) {
    $.ajax({
      url: '/api/users/' + userid + '/reviews',
      type: 'GET',
      success: function(reviews) {
        ReviewActions.receiveAllReviews(reviews)
      }
    })
  },

  fetchReview: function(id) {
    $.ajax({
      url: '/api/reviews/' + id,
      type: 'GET',
      success: function(review) {
        ReviewActions.receiveReview(review)
      }
    })
  },

  fetchLocations: function() {
    $.ajax({
      url: 'api/locations',
      type: 'GET',
      success: function(locations) {
        LocationActions.receiveAllLocations(locations)
      }
    })
  },

  fetchLocation: function(id) {
    $.ajax({
      url: 'api/locations/' + id,
      type: 'GET',
      success: function(response) {
        LocationActions.receiveLocation(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  }
};

module.exports = ApiUtil;
