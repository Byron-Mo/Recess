var React = require('react'),
    UserStore = require('../../stores/UserStore'),
    // History = require('react-router').History,
    ApiUtil = require('../../util/apiutil');

var UserHomepage = React.createClass({
  // getInitialState: function() {
  //   return { user: this.getStatefromStore() }
  // },
  //
  // updateState: function() {
  //   this.setState({ user: this.getStateFromStore() })
  // },
  //
  // componentWillReceiveProps: function(newProps) {
  //   ApiUtil.fetchUser(newProps.params.id)
  // },
  //
  // componentDidMount: function() {
  //   UserStore.addListener(this.updateState);
  //   ApiUtil.fetchUser(this.props.params.id)
  // },
  //
  // getStatefromStore: function() {
  //   return UserStore.find(parseInt(this.props.params.id))
  // },

  render: function() {
    // debugger
    return(
      <div>
        user home page
      </div>
    )
  }
});

module.exports = UserHomepage;
