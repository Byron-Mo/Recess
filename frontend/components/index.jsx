var React = require('react'),
    Link = require('react-router').Link;

var Index = React.createClass({
  render: function() {
    return(
      <div>
        <div className="index-background">
          <div className="index-title">
            Where will your next vacation take you?
          </div>
        </div>
        <div className="index-intro">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>
    )
  }
});

module.exports = Index;
