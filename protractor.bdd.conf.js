var env = require('./environment.js');

exports.config = {

  //seleniumAddress: env.seleniumAddress,

  seleniumPort: 4444,

  seleniumServerJar: env.seleniumServerJar,

  chromeDriver: env.chromeDriver,

  specs: [
    'features/**/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    'format': ['pretty'],
    'tags': ['~@wip'],
    'require': 'features/**/*.js'
  },

  onPrepare: function() {
    // Use the external Chai As Promised to deal with resolving promises in
    // expectations.
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);

    global.expect = chai.expect;

    // Chai expect().to.exist syntax makes default jshint unhappy.
    // jshint expr:true
  }
};
