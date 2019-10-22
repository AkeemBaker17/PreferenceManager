Feature: Verify Page Names

Scenario Outline: Verify that the correct Page Names are displayed when navigating around Preference Manager

Background: A user logs in

Given The User clicks the Navigation Buttons
Then The correct Page is displayed and the Header '<Header>' is shown

Examples:
| Header    |
| By Groups |