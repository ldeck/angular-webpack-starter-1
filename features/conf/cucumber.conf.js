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

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  cucumberOpts: {
    require: '../**/*.js',
    tags: '@dev',
    format: undefined,
    profile: false,
    'no-source': true
  }
};
