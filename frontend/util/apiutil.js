var UserActions = require('../actions/UserActions'),
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

  updateReview: function(id, review) {
    // debugger
    $.ajax({
      url: 'api/reviews/' + id,
      type: 'PATCH',
      data: {review: review},
      success: function(response) {
        // ReviewActions.receiveReview(response)
        // LocationActions.receiveLocation(response)
        UserActions.receiveUser(response)
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
  },

  createPreference: function(preference) {
    $.ajax({
      url: 'api/preferences/',
      type: 'POST',
      data: {preference: preference},
      success: function(response) {
        UserActions.receiveUser(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  updatePreference: function(id, preference) {
    $.ajax({
      url: 'api/preferences/' + id,
      type: 'PATCH',
      data: {preference: preference},
      success: function(response) {
        UserActions.receiveUser(response)
      },
      error: function(response) {
        ErrorActions.error(response)
      }
    })
  },

  locationVisit: function(data) {
    $.ajax({
      url: 'api/location_visits',
      type: 'POST',
      data: {location_visit: data},
      success: function(response) {
        UserActions.receiveUser(response)
      }
    })
  },

  destroyLocationVisit: function(id) {
    $.ajax({
      url: 'api/location_visits/' + id,
      type: 'DELETE',
      success: function(response) {
        UserActions.receiveUser(response)
      }
    })
  },

  locationWish: function(data) {
    $.ajax({
      url: 'api/location_wishes/',
      type: 'POST',
      data: {location_wish: data},
      success: function(response) {
        UserActions.receiveUser(response)
      }
    })
  },

  destroyLocationWish: function(id) {
    $.ajax({
      url: 'api/location_wishes/' + id,
      type: 'DELETE',
      success: function(response) {
        UserActions.receiveUser(response)
      }
    })
  }
};

module.exports = ApiUtil;
