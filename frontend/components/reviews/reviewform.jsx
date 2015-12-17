var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../util/apiutil'),
    ReviewStore = require('../../stores/ReviewStore'),
    ErrorStore = require('../../stores/ErrorStore');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { location: "", body: "", rating: "", errors: "", review: "", toggleError: 0 }
  },

  updateState: function() {
    this.setState({ errors: ErrorStore.fetchErrors(), review: ReviewStore.fetchReview() })

    if (this.state.review === undefined) {
      this.setState({toggleError: 1});
      this.props.history.push("/review/new")
      // alert(this.state.errors);
    } else {
      console.log('it worked')
    }
  },

  componentDidMount: function() {
    this.updateReview = ReviewStore.addListener(this.updateState);
    this.updateErrors = ErrorStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.updateReview.remove();
    this.updateErrors.remove();
  },

  updateRating: function(e) {
    this.setState({ rating: parseInt(e.target.value) })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createReview({
      location: this.state.location,
      body: this.state.body,
      rating: this.state.rating
    });

    this.setState({ location: "", body: "", rating: "" });
  },

  render: function() {
    var errorMsg;

    if (this.state.toggleError) {
      errorMsg = (
        <ul>
          {this.state.errors.map(function(msg) {
            return <li>{msg}</li>
          })}
        </ul>
      )
    } else {
      errorMsg = <div></div>
    };

    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        <h1>Create Review</h1>
        <br></br>
        {errorMsg}
        <br></br>
        <label>Location</label>
        <br></br>
        <input type="text" valueLink={this.linkState("location")}></input>
        <br></br><br></br>
        <label>Rating</label>
        <br></br>
        <input type="radio" name="rating" value="1" onChange={this.updateRating}></input>
        <input type="radio" name="rating" value="2" onChange={this.updateRating}></input>
        <input type="radio" name="rating" value="3" onChange={this.updateRating}></input>
        <input type="radio" name="rating" value="4" onChange={this.updateRating}></input>
        <input type="radio" name="rating" value="5" onChange={this.updateRating}></input>
        <br></br><br></br>
        <label>Review</label>
        <br></br>
        <textarea valueLink={this.linkState("body")}></textarea>
        <br></br><br></br>
        <input type="submit" value="Create Review"></input>
      </form>
    )
  }
});

module.exports = ReviewForm;
