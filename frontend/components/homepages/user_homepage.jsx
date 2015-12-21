var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    Link = require('react-router').Link,
    LocationInput = require('../locations/locationinput'),
    LocationStore = require('../../stores/LocationStore'),
    UserStore = require('../../stores/UserStore'),
    LocationVisit = require('../locations/LocationVisit');

var UserHomepage = React.createClass({
  getInitialState: function() {
    return { locations: "", user: UserStore.fetchUser() }
  },

  updateState: function() {
    this.setState({ locations: LocationStore.all(), user: UserStore.fetchUser() })
  },

  componentDidMount: function() {
    this.listener = LocationStore.addListener(this.updateState)
    this.listenerUser = UserStore.addListener(this.updateState)
    ApiUtil.fetchLocations();
  },

  componentWillUnmount: function() {
    this.listener.remove();
    this.listenerUser.remove();
  },

  handleClick: function() {
    var url = "/user/" + this.props.params.userid + "/reviews";
    this.props.history.push(url);
  },

  render: function() {
    var prefUrl = "/user/" + this.props.params.userid + "/preferences";
    var reviewUrl = "/user/" + this.props.params.userid + "/reviews";
    var locations = this.state.locations;

    var user = this.state.user;
    // debugger

    var recommendations = [];
    if (user) {
      for (var key in locations) {
        if (locations.hasOwnProperty(key)) {
          if (
            locations[key].region === user.preference.region &&
            locations[key].activity === user.preference.activity
          ) {
            recommendations.push(locations[key])
          }
        }
      };
    }

    recommendations = recommendations.slice(0, 6);

    recommendations.forEach(function(location) {
      var reviews = location.reviews;
      var ratings = [];
      if (reviews) {
        for (var i = 0; i < reviews.length; i++) {
          ratings.push(reviews[i].rating)
        }
        if (ratings.length === 0) {
          var avgReview = 0;
        } else {
          var avgReview = Math.round(ratings.reduce(function(x, y) {return x + y}) / ratings.length)
        }
        location["avgReview"] = avgReview;
      }
    })

    recommendations.sort(function(a, b) {
      return b.avgReview - a.avgReview
    })

    var that = this;
    var recommendationsShow = recommendations.map(function(recommendation) {
      var divStyle = {backgroundImage: 'url(' + recommendation.image + ')'};

      var handleClickRec = function() {
        that.props.history.push("/location/" + recommendation.id)
      };

      return (
        <div className="recommendation-box" onClick={handleClickRec} key={recommendation.id}>
          <div className="recommendation-img" style={divStyle}></div>
          <div className="recommendation-text">
            <div className="recommendation-name">{recommendation.name}</div>
            <div className="recommendation-rating">{recommendation.avgReview}/5</div>
          </div>
        </div>
      )
    })

    return(
      <div>
        <br></br>
        user home page
        <LocationVisit user={user} locations={this.state.locations}/>
        <br></br>
        <LocationInput userid={this.props.params.userid} locations={this.state.locations}/>
        <br></br>
        <div clasName="user-selection">
          <Link to={prefUrl} className="user-review-link">Update your preferences</Link>
          <br></br>
          <Link to={reviewUrl} className="user-review-link">Your reviews</Link>
        </div>
        <div className="recommendations-background">
          <div className="recommendations">
            <div className="recommendations-title">Your Recommendations</div>
            {recommendationsShow}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = UserHomepage;
