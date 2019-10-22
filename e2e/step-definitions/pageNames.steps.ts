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

  Given('The User clicks the Navigation Buttons', function () {
    return this.actions.click(landingPage.btnByGroup);
  });

  Then('The correct Page is displayed and the Header {string} is shown', function (pageName) {
    this.pageNames = {pageName: pageName}
    return expect(this.actions.isPresent((landingPage.verifyPageName(this.pageNames)))).to.eventually.be.true;
  });
