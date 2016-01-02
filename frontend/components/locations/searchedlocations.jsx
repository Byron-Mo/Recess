var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    LocationStore = require('../../stores/LocationStore');

var SearchedLocations = React.createClass({
  getInitialState: function() {
    return {locations: LocationStore.all()}
  },

  updateState: function() {
    this.setState({locations: LocationStore.all()})
  },

  componentDidMount: function() {
    this.listener = LocationStore.addListener(this.updateState);
    ApiUtil.fetchLocations();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    var locations = this.state.locations,
        searchedLocations = [],
        userInput = this.props.location.query[0],
        that = this;

    for (var key in locations) {
      if (locations.hasOwnProperty(key)) {
        if (locations[key].name.toLowerCase().match(userInput)) {
          searchedLocations.push(locations[key]);
        }
      }
    }

    searchedLocations.forEach(function(location) {
      var reviews = location.reviews;
      var ratings = [];

      if (reviews) {
        for (var i = 0; i < reviews.length; i++) {
          ratings.push(reviews[i].rating)
        }
        if (ratings.length === 0) {
          var avgReview = '-';
        } else {
          var avgReview = Math.round(ratings.reduce(function(x, y) {return x + y}) / ratings.length)
        }
        location["avgReview"] = avgReview
      }
    })

    var showLocations = searchedLocations.map(function(location) {
      var divStyle = {backgroundImage: 'url(' + location.image + ')'}

      var handleClickLocation = function() {
        that.props.history.push("/location/" + location.id)
      };

      return (
        <li className="recommendations-li" key={location.id}>
          <div className="recommendation-box hvr-grow" onClick={handleClickLocation} key={location.id}>
            <div className="recommendation-img" style={divStyle}></div>
            <div className="recommendation-text">
              <div className="recommendation-name">{location.name}</div>
              <div className="recommendation-rating">{location.avgReview}/5</div>
            </div>
          </div>
        </li>
      )
    })

    return (
      <div>
        <div className="user-review-title">You searched for: {userInput}</div>
        <ul className="recommendations-ul">
          {showLocations}
        </ul>
      </div>
    )
  }
});

module.exports = SearchedLocations;
