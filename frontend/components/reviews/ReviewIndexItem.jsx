var React = require('react'),
    ApiUtil = require('../../util/apiutil');

var ReviewIndexItem = React.createClass({
  handleEdit: function() {
    console.log("in handleedit")
  },

  handleDelete: function(id) {
    console.log("in handledelete")
    console.log(this.props.review.id)
    // this.listener = UserStore.addListener(this.updateState);
    ApiUtil.destroyReview(this.props.review.id);
  },

  render: function() {
    return(
      <div>
        <input type="button" value="Edit" className="edit-btn" onClick={this.handleEdit}></input>
        <input type="button" value="Delete" className="delete-btn" onClick={this.handleDelete}></input>
      </div>
    )
  }
});

module.exports = ReviewIndexItem;
