var env = require('./environment.js');

exports.config = {
  baseUrl: 'http://localhost:8080/',

  /** use `npm run e2e` */
  specs: [
    './src/**/*.e2e.js'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  seleniumServerJar: env.seleniumServerJar,

  chromeDriver: env.chromeDriver

};
