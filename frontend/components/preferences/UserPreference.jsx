var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    UserStore = require('../../stores/UserStore'),
    ErrorStore = require('../../stores/ErrorStore');

var UserPreference = React.createClass({
  getInitialState: function() {
    return { user: UserStore.fetchUser(), errors: "", activity: "", region: "", toggleError: "" }
  },

  updateState: function() {
    this.setState({
      user: UserStore.fetchUser(),
      errors: ErrorStore.fetchErrors()
    })

    if (this.state.user && this.state.user.preference) {
      this.setState({
        activity: this.state.user.preference.activity,
        region: this.state.user.preference.region
      })
    }

    if (this.state.errors) {
      console.log(this.state.errors)
      this.setState({toggleError: 1})
    }
  },

  componentDidMount: function() {
    var map = new jvm.Map({
       container: $(this.refs.map),
       map: 'continents_mill',
       regionsSelectableOne: true,
       regionsSelectable: true,

       regionStyle: {
         initial: {
           fill: '#B8E186'
         },
         selected: {
           fill: '#F4A582'
         }
       },

       onRegionSelected: function(){
         if (window.localStorage) {
           window.localStorage.setItem(
             'jvectormap-selected-regions',
             JSON.stringify(map.getSelectedRegions())
           );
         }
       },

     });

     map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );


    this.listener = UserStore.addListener(this.updateState);
    this.updateErrors = ErrorStore.addListener(this.updateState)
    ApiUtil.fetchUser(this.props.params.userid);
  },

  componentWillUnmount: function() {
    this.listener.remove();
    this.updateErrors.remove();
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.user.preference) {
      ApiUtil.updatePreference(this.state.user.preference.id, {
        region: this.state.region,
        activity: this.state.activity
      })
    } else {
      ApiUtil.createPreference({
        region: this.state.region,
        activity: this.state.activity
      })
    }
  },

  handleActivity: function(e) {
    this.setState({ activity: e.target.value })
  },

  handleRegion: function(e) {
    this.setState({ region: e.target.value })
  },

  isSelected: function(value) {
    if (this.state.region === value) {
      return "selected";
    } else {
      return "";
    }
  },

  isChecked: function(value) {
    if (this.state.activity === value) {
      return "checked";
    }
  },

  render: function() {
    if (this.state.user) {

      var preferenceForm = (
        <form className="preference-form" onSubmit={this.handleSubmit}>
          <select name="region" className="preference-region" onChange={this.handleRegion} value={this.state.region}>
            <option>Choose your region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
          <div className="preference-activity">
            <label htmlFor="Beachfront">Beachfront</label>
            <input type="radio" id="Beachfront" name="activity" value="Beachfront" onChange={this.handleActivity} checked={this.isChecked("Beachfront")}></input>
            <label htmlFor="Adventure">Adventure</label>
            <input type="radio" id="Adventure" name="activity" value="Adventure" onChange={this.handleActivity} checked={this.isChecked("Adventure")}></input>
            <label htmlFor="Culture/History">Culture/History</label>
            <input type="radio" id="Culture/History" name="activity" value="Culture/History" onChange={this.handleActivity} checked={this.isChecked("Culture/History")}></input>
          </div>
          <input type="submit" value="Update your vacation preferences"></input>
        </form>
      )
    };

    return(
      <div>
        <div ref="map" className="preference-map" >{}</div>
        <br></br>
        {preferenceForm}
      </div>
    )
  }
});

module.exports = UserPreference;
