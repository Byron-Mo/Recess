var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    ReviewStore = require('../../stores/ReviewStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    History = require('react-router').History;

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return { body: "", rating: "", errors: "", toggleError: 0, toggleSuccess: 0 }
  },

  updateState: function() {
    this.setState({ errors: ErrorStore.fetchErrors() })

    if (this.state.errors) {
      this.setState({toggleError: 1});
    }
  },

  componentDidMount: function() {
    this.updateErrors = ErrorStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.updateErrors.remove();
  },

  updateRating: function(e) {
    this.setState({ rating: parseInt(e.target.value) })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({toggleSuccess: 0, toggleError: 0})

    ApiUtil.createReview({
      location_id: this.props.locationid,
      body: this.state.body,
      rating: this.state.rating
    });

    this.setState({ body: "", rating: "", toggleSuccess: 1});
  },

  render: function() {
    var msgResponse;

    if (this.state.toggleError) {
      msgResponse = (
        <div className="review-errors">
          <ul>
            {this.state.errors.map(function(msg) {
              return <li key={msg}>{msg}</li>
            })}
          </ul>
          <br></br>
        </div>
      )
    } else if (this.state.toggleError === 0 && this.state.toggleSuccess === 1){
      msgResponse = <div className="review-errors"><ul><li>Review created!</li></ul></div>
    };

    return(
      <div className="review-form">
        <form className="form-contents" onSubmit={this.handleSubmit}>
          <div className="review-title">Been here? Leave a review!</div>
          <br></br>
          <div className="star-rating">
            <input type="radio" name="rating" value="1" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="2" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="3" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="4" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="5" onChange={this.updateRating}></input><i></i>
          </div>
          <br></br>
          <textarea className="review-text" valueLink={this.linkState("body")}></textarea>
          {msgResponse}
          <br></br>
          <input type="submit" value="Create Review" className="review-btn-review-form"></input>
        </form>
      </div>
    )
  }
});

module.exports = ReviewForm;
