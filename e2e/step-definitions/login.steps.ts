import { Given, Then, When, setDefaultTimeout } from "cucumber";

//Importing Page Objects
import { LoginPage } from "../page-objects/loginPage";
import { LandingPage } from "../page-objects/landingPage";

//Creating Page Objects
const loginPage: LoginPage = new LoginPage();
const landingPage: LandingPage = new LandingPage();

//Assertion - Telling Cucumber if the Test is a Pass or Fail
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60 * 1000);

Given('The Login page is displayed', function () {
  this.actions.clear(loginPage.txtUsername)
  this.actions.clear(loginPage.txtPassword);
  return console.log("The Username and Password fields are cleared");
});

Given('The User enters a correct Username {string} and Password {string}', function (usernameFromFeatureFile, passwordFromFeatureFile) {
  this.loginDetails = { username: usernameFromFeatureFile, password: passwordFromFeatureFile}

  this.actions.sendKeys(loginPage.txtUsername, this.loginDetails.username);
  this.actions.sendKeys(loginPage.txtPassword, this.loginDetails.password);
  return console.log("The Username and Password are entered into the Login screen");
});

Given('The User clicks the Login button', function () {
  this.actions.click(loginPage.btnLogin);
  return console.log("The Login button is clicked");
  
});

Then('The Landing Page is displayed and the Username {string} is shown', function (username) {
  expect(this.actions.isPresent((landingPage.verifyUserLoggedIn(this.loginDetails)))).to.eventually.be.true;
  this.actions.click(landingPage.btnLogout);
  return console.log("The Username displayed on the Landing Page matches the one entered into the Login screen");
});