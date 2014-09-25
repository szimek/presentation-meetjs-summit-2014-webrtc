var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'WebRTC',
    subtitle: 'so much more than video conferencing',
    eventInfo: {
      title: 'Meet.js Summit 2014',
      date: 'September 28, 2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: false, // Controlled in app.js
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/logos/webrtc-logo.png',
    fonts: [
      'Copse:400',
      'Open Sans:600italic,400,300,600',
      'Roboto Condensed:400,300,700',
      'Roboto2:400,300,500',
      //'Source Code Pro',
      'Inconsolata:400,700',
      'Architects Daughter'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Szymon Nowak',
    //company: '',
    gplus: 'http://google.com/+SzymonNowak1',
    twitter: '@szimek',
    // www: 'http://cowbell-labs.com',
    github: 'http://github.com/szimek'
  }]
};
