// Common configuration files with defaults plus overrides from environment vars
var webServerDefaultPort = 8080;

var path = require('path');

module.exports = {

  chromeDriver: path.resolve('./node_modules/protractor/selenium/chromedriver_2.21'),

  seleniumPort: (process.env.SELENIUM_PORT || 4444),

  // The address of a running selenium server.
  seleniumAddress:
  (process.env.SELENIUM_URL || 'http://localhost:' + this.seleniumPort + '/wd/hub'),

  seleniumServerJar: path.resolve('./node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName':
        (process.env.TEST_BROWSER_NAME || 'chrome'),
    'version':
        (process.env.TEST_BROWSER_VERSION || 'ANY')
  },

  // Default http port to host the web server
  webServerDefaultPort: webServerDefaultPort,

  // Protractor interactive tests
  interactiveTestPort: 6969,

  // A base URL for your application under test.
  baseUrl:
    'http://' + (process.env.HTTP_HOST || 'localhost') +
          ':' + (process.env.HTTP_PORT || webServerDefaultPort)

};
