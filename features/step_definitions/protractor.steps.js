module.exports = function() {

  this.Given(/^I run Cucumber with Protractor$/, function(next) {
    next();
  });

  this.Then(/^it should still do normal tests$/, function(next) {
    expect(true).to.equal(true);
    next();
  });

  this.Then(/^it should expose the correct global variables$/, function(next) {
    expect(protractor).to.exist;
    expect(browser).to.exist;
    expect(by).to.exist;
    expect(element).to.exist;
    expect($).to.exist;
    next();
  });

};
