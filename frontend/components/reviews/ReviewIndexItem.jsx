var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewIndexItem = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { toggle: false, rating: "", body: "" }
  },

  handleEdit: function() {
    this.setState({ toggle: !this.state.toggle })
  },

  handleDelete: function(id) {
    console.log("in handledelete")
    console.log(this.props.review.id)
    // this.listener = UserStore.addListener(this.updateState);
    ApiUtil.destroyReview(this.props.review.id);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    // debugger
    var id = this.props.review.id;

    if (this.state.rating !== "" && this.state.body !== "") {
      ApiUtil.updateReview(id, {
        body: this.state.body,
        rating: this.state.rating
      })
    } else if (this.state.rating !== "") {
      ApiUtil.updateReview(id, {
        rating: this.state.rating
      })
    } else if (this.state.body !== "") {
      ApiUtil.updateReview(id, {
        body: this.state.body,
      })
    }

    this.setState({toggle: !this.state.toggle})
  },

  updateRating: function(e) {
    this.setState({rating: parseInt(e.target.value)})
  },

  render: function() {
    var editForm;

    if (this.state.toggle) {
      editForm = (
        <form className="review-edit-form" onSubmit={this.handleSubmit}>
          <div className="star-rating">
            <input type="radio" name="rating" value="1" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="2" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="3" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="4" onChange={this.updateRating}></input><i></i>
            <input type="radio" name="rating" value="5" onChange={this.updateRating}></input><i></i>
          </div>
          <br></br>
          <textarea className="review-text" valueLink={this.linkState("body")}></textarea>
          <br></br>
          <input type="submit" value="Create Review" className="review-btn"></input>
        </form>
      )
    } else {
      editForm = <div></div>;
    }


    return(
      <div>
        <input type="button" value="Edit" className="edit-btn" onClick={this.handleEdit}></input>
        <input type="button" value="Delete" className="delete-btn" onClick={this.handleDelete}></input>
        {editForm}
      </div>
    )
  }
});

module.exports = ReviewIndexItem;
