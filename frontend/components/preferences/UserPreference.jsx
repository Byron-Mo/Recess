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
               console.log(el)
               that.setState({region: PreferenceConstants[key]});
               console.log(that.state.region)
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