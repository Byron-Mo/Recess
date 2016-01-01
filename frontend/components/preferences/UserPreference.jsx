var React = require('react'),
    ApiUtil = require('../../util/apiutil'),
    UserStore = require('../../stores/UserStore'),
    ErrorStore = require('../../stores/ErrorStore'),
    PreferenceConstants = require('../../constants/PreferenceConstants');

var UserPreference = React.createClass({
  getInitialState: function() {
    return { user: UserStore.fetchUser(), errors: "", activity: "", region: "", toggleError: 0 }
  },

  updateState: function() {
    this.setState({
      user: UserStore.fetchUser(),
      errors: ErrorStore.fetchErrors()
    });
    // debugger
    if (this.state.user && this.state.user.preference) {
      this.setState({
        toggleError: 0,
        activity: this.state.user.preference.activity,
        region: this.state.user.preference.region
      })
    } else if (this.state.errors.length > 0) {
      this.setState({toggleError: 1})
    };
  },

  componentDidMount: function() {
    var that = this;

    var map = new jvm.Map({
       container: $(this.refs.map),
       map: 'continents_mill',
       backgroundColor: 'whitesmoke',
       regionsSelectableOne: true,
       regionsSelectable: true,
       zoomButtons : false,
       zoomOnScroll: false,

       regionStyle: {
         initial: {
           fill: 'steelblue'
         },
         selected: {
           fill: '#F4A582'
         }
       },

       onRegionSelected: function(e, el){
         for (var key in PreferenceConstants) {
           if (PreferenceConstants.hasOwnProperty(key)) {
             if (key === el) {
               that.setState({region: PreferenceConstants[key]});
               break;
             }
           }
         }

        //  if (window.localStorage) {
        //    window.localStorage.setItem(
        //      'jvectormap-selected-regions',
        //      JSON.stringify(map.getSelectedRegions())
        //    );
        //  }
       },

     });

    // map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );

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
      });
      this.props.history.push("/user/" + this.state.user.id);
    } else {

      ApiUtil.createPreference({
        region: this.state.region,
        activity: this.state.activity
      });
      this.props.history.push("/user/" + this.state.user.id);
    }
  },

  handleActivity: function(e) {
    this.setState({ activity: e.target.value })
  },

  // handleRegion: function(e) {
  //   this.setState({ region: e.target.value })
  // },

  // isSelected: function(value) {
  //   if (this.state.region === value) {
  //     return "selected";
  //   } else {
  //     return "";
  //   }
  // },

  isChecked: function(value) {
    if (this.state.activity === value) {
      return "checked";
    }
  },

  render: function() {
    if (this.state.user) {
      var preferenceForm = (
        <form className="preference-form" onSubmit={this.handleSubmit}>
          <div className="preference-activity">
            <div className="radio">
              <input type="radio" id="Beachfront" name="activity" value="Beachfront" onChange={this.handleActivity} checked={this.isChecked("Beachfront")}></input>
              <label htmlFor="Beachfront"><span></span>Beachfront</label>
            </div>
            <div className="radio">
              <input type="radio" id="Adventure" name="activity" value="Adventure" onChange={this.handleActivity} checked={this.isChecked("Adventure")}></input>
              <label htmlFor="Adventure"><span></span>Adventure</label>
            </div>
            <div className="radio">
              <input type="radio" id="Culture/History" name="activity" value="Culture/History" onChange={this.handleActivity} checked={this.isChecked("Culture/History")}></input>
              <label htmlFor="Culture/History"><span></span>Culture/History</label>
            </div>
            <br></br>
            <input type="submit" value="Update your vacation preferences" className="preference-submit"></input>
          </div>
        </form>
      )
    };

    var errors = [];
    if (this.state.toggleError) {
      errors = (
        this.state.errors.map(function(error) {
          return <li>{error}</li>
        })
      );
    } else {
      errors = <div></div>
    }

    return(
      <div>
        <div className="pref-title">Your next vacation preference</div>
        <div className="pref-steps">Select a region and activity to begin!</div>
        <div ref="map" className="preference-map" >{}</div>
        <br></br>
        {preferenceForm}
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
});

module.exports = UserPreference;
