var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    ReviewConstants = require('../constants/ReviewConstants'),
    _reviews = {},
    _errors = [],
    ReviewStore = new Store(AppDispatcher);

ReviewStore.all = function() {
  var dupReviews = {};
  for (key in _reviews) {
    if (_reviews.hasOwnProperty(key)) {
      dupReviews[key] = _reviews[key]
    };
  };
  return dupReviews;
};

ReviewStore.find = function(id) {
  return _reviews[id];
};

// when we fetch
ReviewStore.resetReviews = function(reviews) {
  _reviews = {};
  reviews.forEach(function(review) {
    _reviews[review.id] = review;
  });
  ReviewStore.__emitChange();
};

// when we create or update
ReviewStore.resetReview = function(review) {
  // _reviews = {};
  _reviews[review.id] = review;
  ReviewStore.__emitChange();
};

ReviewStore.fetchReview = function() {
  for (var key in _reviews) {
    if (_reviews.hasOwnProperty(key)) {
      return _reviews[key];
      break;
    }
  }
};

// destroy
ReviewStore.destroyReview = function(id) {
  delete(_reviews[id]);
  ReviewStore.__emitChange();
};

// errors
ReviewStore.error = function(response) {
  _errors = [];
  response.responseJSON.forEach(function(msg) {
    _errors.push(msg)
  })
  ReviewStore.__emitChange();
};

ReviewStore.fetchErrors = function() {
  return _errors.slice();
};

ReviewStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ReviewConstants.RESET_REVIEW:
      ReviewStore.resetReview(payload.review)
      break;
    case ReviewConstants.DESTROY_REVIEW:
      ReviewStore.destroyReview(payload.id)
      break;
    case ReviewConstants.ERROR:
      ReviewStore.error(payload.response)
      break;
    case ReviewConstants.RECEIVE_REVIEWS:
      ReviewStore.resetReviews(payload.reviews)
      break;
  }
}

module.exports = ReviewStore;
