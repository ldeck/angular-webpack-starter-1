var env = require('../../environment.js');

// A small suite to make sure the cucumber framework works.
exports.config = {

  seleniumPort: env.seleniumPort,

  seleniumServerJar: env.seleniumServerJar,

  chromeDriver: env.chromeDriver,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Spec patterns are relative to this directory.
  specs: [
    '../requirements/**/*.feature'
  ],

  multiCapabilities: [
    {
      browserName: (process.env.TEST_BROWSER_NAME || 'chrome'),
      version: (process.env.TEST_BROWSER_VERSION || 'ANY'),
      cucumberOpts: {
        tags: '@dev',
        format: 'pretty'
      }
    }
  ],

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: '../**/*.js',
    tags: '@failing',
    format: 'progress',
    profile: false,
    'no-source': true
  }
};
