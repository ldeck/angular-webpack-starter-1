module.exports = function() {

  this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
    browser.get(url);
    next();
  });

  this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
    expect(browser.getTitle()).to.eventually.have.string(text).and.notify(next);
  });

  this.Then(/^there should be a favicon$/, function (next) {
    var faviconPath = '/img/favicon.ico';

    expect($('head link[rel=icon]').getAttribute('href')).to.eventually.have.string(faviconPath);
    browser.executeScript("return location.protocol + '//' + location.host;").then(function(url) {
      var request = require('request');
      request(url + faviconPath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          next();
        } else {
          next(new Error("Woops! No favicon!"));
        }
      });
    });
  });

};
