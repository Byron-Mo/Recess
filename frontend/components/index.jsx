var React = require('react'),
    Link = require('react-router').Link;

var Index = React.createClass({
  render: function() {
    return(
      <div>
        <ul className="cb-slideshow">
          <li><span>Image 01</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
          <li><span>Image 02</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
          <li><span>Image 03</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
          <li><span>Image 04</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
          <li><span>Image 05</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
          <li><span>Image 06</span><div>
            <h3>The bell just rang. It's time for Recess!</h3>
            <h4>Inspired by Goodreads, Recess provides recommendations for your next vacation</h4>
          </div></li>
        </ul>
        <div className="index-intro">
          <div className="index-intro-div">
            <ul className="intro-ul">
              <li className="intro-li">
                <div className="intro-title-div">
                  <div className="intro-title">Select Your Preferences</div>
                </div>
                <div className="intro-body">We'll compile a list of our most popular vacation destinations</div>
              </li>
              <li className="intro-li">
                <div className="intro-title-div">
                  <div className="intro-title">Pick From Our Recommendations</div>
                </div>
                <div className="intro-body">Leave a review after you've gone and let us know what you think!</div>
              </li>
              <li className="intro-li">
                <div className="intro-title-div">
                  <div className="intro-title">Enjoy Life</div>
                </div>
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
