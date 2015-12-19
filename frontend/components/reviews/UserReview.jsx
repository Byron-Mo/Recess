var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewStore = require('../../stores/ReviewStore'),
    ReviewIndexItem = require('./ReviewIndexItem');

var UserReview = React.createClass({
  getInitialState: function() {
    return {user: UserStore.fetchUser()}
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.updateState);
    this.reviewListener = ReviewStore.addListener(this.updateState)
    ApiUtil.fetchUser(this.props.params.userid);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  // componentWillReceiveProps: function(newProps) {
  //   console.log("in receive props")
  //   console.log(newProps)
  //   ApiUtil.fetchUser(newProps.params.userid)
  // },

  updateState: function() {
    console.log("emitted change")
    this.setState({user: UserStore.fetchUser()})
    console.log(this.state.user)
  },

  render: function() {
    // debugger
    if (this.state.user) {
      // var reviews = this.state.user.reviews;
      // if (this.state.user.reviews) {
      // }
      // console.log(this.state.user)
        var reviews = this.state.user.reviews
        var that = this;
        var displayReviews = (
          reviews.map(function(review) {
            return (
              <li className="user-reviews-li" key={review.id}>
                <div className="user-review-location">{review.location.name}</div>
                <div className="user-review-rating">{review.rating}</div>
                <div className="user-review-body">{review.body}</div>
                <ReviewIndexItem review={review} />
              </li>
            )
          })
        )
    }

    return(
      <div>
        Reviews
        <br></br>
        <ul className="user-reviews-ul">
          {displayReviews}
        </ul>
      </div>
    )
  }
});

module.exports = UserReview;