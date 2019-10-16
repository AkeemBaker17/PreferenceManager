Feature: Login

Scenario Outline: Login to Preference Manager using the correct Username and Password

Given The Login page is displayed
And The User enters a correct Username '<Username>' and Password '<Password>'
And The User clicks the Login button
Then The Landing Page is displayed and the Username '<Username>' is shown

Examples:
| Username | Password    |
| ABAKER   | Samsung123! |

Feature: Verify Page Names

Scenario Outline: Verify that the correct Page Names are displayed when navigating around Preference Manager

Given The User is Logged in
Given The Landing Page is displayed
Given The User clicks the Navigation Buttons
Then The correct Page is displayed and The Header '<Header>' is shown

Examples:
| Header     |
| By Group   |