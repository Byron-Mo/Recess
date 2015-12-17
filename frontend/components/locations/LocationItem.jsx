var React = require('react'),
    LocationStore = require('../../stores/LocationStore'),
    ApiUtil = require('../../util/apiutil'),
    ReviewForm = require('../reviews/reviewform');

var LocationItem = React.createClass({
  getInitialState: function() {
    return {location: LocationStore.fetchLocation()}
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
    // debugger
    var location = this.state.location;

    var divStyle = {
      color: 'white',
      backgroundImage: 'url(' + location.image + ')'
    };

    return(
      <div>
        <div className="test" style={divStyle}>
          {location.name}
          <br></br>
          <br></br>
        </div>
        <div>
          <ReviewForm />
        </div>
      </div>
    )
  }
});

module.exports = LocationItem;
