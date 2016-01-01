var React = require('react'),
    LocationStore = require('../../stores/LocationStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewForm = require('../reviews/reviewform'),
    ReviewStore = require('../../stores/ReviewStore'),
    Tail = require('../Tail');

var LocationItem = React.createClass({
  getInitialState: function() {
    return {location: ""}
  },

  componentDidMount: function() {
    this.updateLocation = LocationStore.addListener(this.updateState);
    ApiUtil.fetchLocation(parseInt(this.props.params.locationid));
  },

  componentWillUnmount: function() {
    this.updateLocation.remove();
  },

  updateState: function() {
    this.setState({location: LocationStore.find(parseInt(this.props.params.locationid))})
  },

  render: function() {
    var reviews = this.state.location.reviews;
    var ratings = [];
    var reviewShow = [];

    if (reviews) {
      for (var i = 0; i < reviews.length; i++) {
        ratings.push(reviews[i].rating)
      }
      if (ratings.length === 0) {
        var avgReview = '-';
      } else {
        var avgReview = Math.round(ratings.reduce(function(x, y) {return x + y}) / ratings.length)
      }
    };

    if (reviews) {
      reviewShow = reviews.map(function(review) {
        return (
          <li key={review.id} className="location-review">
            <div className="rating">{review.rating}</div>
            <div className="review-body">{review.body}</div>
            <div className="review-user">-{review.user.username}</div>
          </li>
        )
      })
    }

      var img = this.state.location.image;
      var divStyle = {
        color: 'white',
        backgroundImage: 'url(' + img + ')'
      };

    if (img) {
      var backgroundImage = (
        <div className="location-background" style={divStyle}>
          <div className="location-details">
            <div className="location-name">{this.state.location.name}</div>
            <div className="location-activity">{this.state.location.activity}</div>
            <br></br>
            <div className="location-rating">{avgReview}/5</div>
            <div className="location-region">{this.state.location.region}</div>
          </div>

        </div>
      )
    }

    return(
      <div>
        {backgroundImage}
        <div className="location-body-container">
          <div className="location-body">
            {this.state.location.body}
          </div>
        </div>
        <div>
          <ReviewForm locationid={this.state.location.id}/>
        </div>
        <ul className="location-reviews">
          {reviewShow}
        </ul>
        <Tail />
      </div>
    )
  }
});

module.exports = LocationItem;
