Feature: Login

Scenario Outline: Login to Preference manager using the correct Username and Password

Given The Login page is displayed
And The User enters a correct Username '<Username>' and Password '<Password>'
And The User clicks the Login button
Then The Landing Page is displayed and the Username '<Username>' is shown

Examples:
| Username | Password    |
| ABAKER   | Samsung123! |