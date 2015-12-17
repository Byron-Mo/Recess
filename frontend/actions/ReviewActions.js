var Dispatcher = require('../dispatcher/dispatcher'),
    ReviewConstants = require('../constants/ReviewConstants');

var ReviewActions = {
  receiveAllReviews: function(reviews) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.RECEIVE_REVIEWS,
      reviews: reviews
    });
  },

  receiveReview: function(review) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.RESET_REVIEW,
      review: review
    });
  },

  destroyReview: function(id) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.DESTROY_REVIEW,
      id: id
    });
  },

  error: function(response) {
    Dispatcher.dispatch({
      actionType: ReviewConstants.ERROR,
      response: response
    });
  }
};

module.exports = ReviewActions;
