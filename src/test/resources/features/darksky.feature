@web @regression @darksky

Feature: Dark Sky feature

  Background:
    Given I am on Darksky Home Page
    @darksky-1
  Scenario: Verify invalid signup error message
      When I am on Register Page
      And I click on Register button on darksky
    Then I verify error message - Please fill out this field

  @darksky-2
  Scenario: Verify Current Temperature should not be greater or less than the Temperature from Daily Timeline
    Given I am on Darksky Home Page
    Then I verify current temp is not greater or less then temps from daily timeline

  @darksky-3
  Scenario: Verify individual day temp timeline
    Given I am on Darksky Home Page
    When I expand todays timeline
    Then I verify lowest and highest temp is displayed correctly

  @darksky-4
  Scenario: Verify timline is displayed in correct format
    Given I am on Darksky Home Page
    Then I verify timeline is displayed with two hours incremented