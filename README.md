# Preference Manager
Preference Manager Automation

# Notes
- Whenever Visual Studio Code is opened for the first time, run 'webdriver-manager start' then open a New Terminal before running any Tests
- Use 'npm run test' to run Tests

# Features File
- This is where the Tests are written and Test Data is kept

# Page Objects
- This is where the pages and page objects are defined

# Step Definitions
- This is where the actual Test are written using the Given, Then and When functions from Gherkin. When adding new Test Steps , the Step Definitions and Feature files both need updating

# Protractor.config.ts
- This file is used to link together the Step Definitions and Feature files

# The 'World' file (loginDetails.ts)
- This is where the Global Functions and Variables used throughout the Project are kept
- Variables are included in the World in order to share data between Step Functions

# Actions
- This holds the 'Actions' class which we use to create Functions to use in the Step Definitions (We create Functions this way as Preference Manager isn't Angular)