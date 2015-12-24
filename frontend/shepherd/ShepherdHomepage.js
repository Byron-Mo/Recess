var Shepherd = require('tether-shepherd');

var ShepherdTour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
    // scrollTo: true
  }
});

ShepherdTour.addStep('home-page', {
  title: "Hello, Welcome to Recess!",
  text: [
    "This tour is designed to show you around the features of the app.",
    "Feel free to click the 'x' in the corner at any time to exit and explore on your own."
  ],
  showCancelLink: true,
  buttons: [
    {
      text: 'Next',
      action: ShepherdTour.next
    }
  ]
});

ShepherdTour.addStep('user-preference', {
  title: 'Where do you want to go next?',
  text: [
    "Update your vacation preferences and we'll",
    "compile a list of recommendations for you."
  ],
  showCancelLink: true,
  attachTo: '.pref-1 bottom',
  // advanceOn: '.user-li-2 click',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: ShepherdTour.back
    },
    {
      text: 'Next',
      action: ShepherdTour.next
    }
  ]
});

ShepherdTour.addStep('user-reviews', {
  title: 'Your thoughts',
  text: 'Check out and edit your vacation reviews!',
  showCancelLink: true,
  attachTo: '.review-1 bottom',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: ShepherdTour.back
    },
    {
      text: 'Next',
      action: ShepherdTour.next
    }
  ]
});

ShepherdTour.addStep('map', {
  title: 'This fancy map',
  text: [
    "Add places you've been or would like to go here.",
    "You can also delete your markers if you change your mind."
  ],
  showCancelLink: true,
  attachTo: '.preference-map bottom',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: ShepherdTour.back
    },
    {
      text: 'Next',
      action: ShepherdTour.next
    }
  ]
});

ShepherdTour.addStep('location-search', {
  title: 'A search bar!',
  text: [
    "Look up a city and check out some awesome reviews!"
  ],
  showCancelLink: true,
  attachTo: '.search-location-btn right',
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: ShepherdTour.back
    },
    {
      text: 'Next',
      action: ShepherdTour.next
    }
  ]
});

ShepherdTour.addStep('recommendations', {
  title: 'Your next vacation',
  text: [
    "Here are your vacation recommendations based off of your preferences"
  ],
  showCancelLink: true,
  attachTo: '.recommendations-title top',
  scrollTo: true,
  buttons: [
    {
      text: 'Back',
      classes: 'shepherd-button-secondary',
      action: ShepherdTour.back
    },
    {
      text: 'Done',
      action: ShepherdTour.complete
    }
  ]
});

module.exports = ShepherdTour;
