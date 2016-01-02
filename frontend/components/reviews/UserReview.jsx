var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewStore = require('../../stores/ReviewStore'),
    ReviewIndexItem = require('./ReviewIndexItem'),
    Link = require('react-router').Link;

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

  updateState: function() {
    this.setState({user: UserStore.fetchUser()})
  },

  render: function() {
    if (this.state.user) {
        var reviews = this.state.user.reviews
        var that = this;

        var convertRating = function(rating, filledStar, blankStar) {
            var reviewRating = [];
            for (var i = 0; i < rating; i++) {
              reviewRating.push(filledStar);
            }

            while (reviewRating.length < 5) {
              reviewRating.push(blankStar);
            }

            return reviewRating;
        };

        var displayReviews = (
          reviews.map(function(review) {
            var url = "/location/" + review.location_id;
            var divStyle = {backgroundImage: 'url(' + review.location.image + ')'};

            var handleClickImg = function() {
              that.props.history.push("/location/" + review.location_id)
            };

            var reviewRating = convertRating(
              review.rating,
              <img src="http://res.cloudinary.com/dptviwjop/image/upload/v1450813524/1450441048_icon-23-star_fios9t.svg" height="8%" width="8%"></img>,
              <img src="http://res.cloudinary.com/dptviwjop/image/upload/v1450813518/1450440728_icon-23-star_pacgki.svg" height="8%" width="8%"></img>
            )

            return (
              <li className="user-reviews-li" key={review.id}>
                <div className="review-img" style={divStyle} onClick={handleClickImg}></div>
                <br></br>
                <Link to={url} className="user-review-location">{review.location.name}</Link>
                <div className="user-review-rating">{reviewRating}</div>
                <div className="user-review-body">{review.body}</div>
                <ReviewIndexItem review={review} />
              </li>
            )
          })
        )
    }

    return(
      <div>
        <div className="user-review-title">Reviews</div>
        <br></br>
        <ul className="user-reviews-ul">
          {displayReviews}
        </ul>
      </div>
    )
  }
});

module.exports = UserReview;
