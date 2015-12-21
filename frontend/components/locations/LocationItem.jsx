var React = require('react'),
    LocationStore = require('../../stores/LocationStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewForm = require('../reviews/reviewform'),
    ReviewStore = require('../../stores/ReviewStore');

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
    // if (this.state.location) {
    // }

    var reviews = this.state.location.reviews;
    console.log(this.state.location)
    var ratings = [];
    var reviewShow = [];

    if (reviews) {
      for (var i = 0; i < reviews.length; i++) {
        ratings.push(reviews[i].rating)
      }
      if (ratings.length === 0) {
        var avgReview = 0;
      } else {
        var avgReview = Math.round(ratings.reduce(function(x, y) {return x + y}) / ratings.length)
      }
      console.log(avgReview)
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

    // if (this.state.location) {
    //
    // }
      var img = this.state.location.image;
      var divStyle = {
        color: 'white',
        backgroundImage: 'url(' + img + ')'
      };

    if (img) {
      // debugger
      var backgroundImage = (
        <div className="location-background" style={divStyle}>
          <div className="location-details">
            <div className="location-name">{this.state.location.name}</div>
            <div className="location-activity">{this.state.location.activity}</div>
            <br></br>
            <div className="location-rating">{avgReview}</div>
          </div>
          <div className="location-region">{this.state.location.region}</div>
        </div>
      )
    }

    // if (this.state.location) {
    //   var locationBody = (
    //     <div className="location-body">
    //       {this.state.location.body}
    //     </div>
    //   )
    // } else {
    //   var locationBody = <div></div>
    // }
    //
    // if (this.state.location) {
    //   var reviewForm = (
    //     <div>
    //       <ReviewForm locationid={this.state.location.id}/>
    //     </div>
    //   )
    // } else {
    //   var reviewForm = <div></div>
    // }


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
      </div>
    )
  }
});

module.exports = LocationItem;
