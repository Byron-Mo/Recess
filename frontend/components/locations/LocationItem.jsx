var React = require('react'),
    LocationStore = require('../../stores/LocationStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewForm = require('../reviews/reviewform');

var LocationItem = React.createClass({
  getInitialState: function() {
    return {location: ""}
  },

  componentDidMount: function() {
    this.listener = LocationStore.addListener(this.updateState);
    ApiUtil.fetchLocation(parseInt(this.props.params.locationid));
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateState: function() {
    this.setState({location: LocationStore.fetchLocation()})
  },

  render: function() {
    var reviews = this.state.location.reviews;
    console.log(this.state.location)
    var ratings = [];

    if (reviews) {
      for (var i = 0; i < reviews.length; i++) {
        ratings.push(reviews[i].rating)

        var reviewShow = (
          <div>
            <div className="review-user">{reviews[i].user.username}</div>
            <div className="rating">{reviews[i].rating}</div>
            <div className="review-body">{reviews[i].body}</div>
          </div>
        )
      }
      var avgReview = Math.round(ratings.reduce(function(x, y) {return x + y}) / ratings.length)
      console.log(avgReview)
    }

    var img = this.state.location.image;
    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + img + ')'
    };

    if (img) {
      // debugger
      var backgroundImage = (
        <div className="location-background" style={divStyle}>
          <div className="location-name">{this.state.location.name}</div>
          <div className="location-region">{this.state.location.region}</div>
          <div className="location-activity">{this.state.location.activity}</div>
          <div className="location-rating">{avgReview}</div>
        </div>
      )
    }


    return(
      <div>
        {backgroundImage}
        <div>
          {this.state.location.body}
        </div>
        <div>
          <ReviewForm locationid={this.state.location.id}/>
        </div>
        {reviewShow}
      </div>
    )
  }
});

module.exports = LocationItem;
