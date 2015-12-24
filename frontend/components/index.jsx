var React = require('react'),
    Link = require('react-router').Link;

var Index = React.createClass({
  render: function() {
    return(
      <div>
        <div className="index-background">
          <div className="index-title">
            The bell just rang. It's time for Recess.
          </div>
        </div>
        <div className="index-intro">
          <div className="index-intro-div">
            <ul className="intro-ul">
              <li className="intro-li">
                <div className="intro-title">Select Your Preferences</div>
                <div className="intro-body">We'll compile a list of our most popular vacation destinations</div>
              </li>
              <li className="intro-li">
                <div className="intro-title">Pick From Our Recommendations</div>
                <div className="intro-body">Leave a review after you've gone and let us know what you think!</div>
              </li>
              <li className="intro-li">
                <div className="intro-title">Enjoy Life</div>
                <div className="intro-body">Mark your map with the locations you've visited</div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = Index;
