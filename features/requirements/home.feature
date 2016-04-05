Feature: Visiting the home page
  As a user
  I should be able to visit the homepage
  to reap the benefits of angularjs!

  Scenario: See the homepage
    Given I go on "/"
    Then the title should equal "Your Angular Webpack Starter Kit"
    And there should be a favicon
