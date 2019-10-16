import { $, by, element } from "protractor";

export class LandingPage
{
    //$ = element(by.cssSelector())
    //. = class
    //# = id
    
    //Identifying the Username displayed on the Landing Page
    public txtUsernameLandingPage = $("#Label1");
    public btnLogout = $("#Button6");

    //Identifying the Page Header displayed when you click on the navigation buttons
    public txtPageHeader = $("#lblHeader");
    
    //Navigation buttons
    public btnByGroup = $("#Button1");

    //Checking the Username displayed on the Landing Page against the Username entered in the Login page
    public verifyUserLoggedIn = (loginDetails: myLibrary.LoginDetails) =>
    {
        //#Label1 = The Username displayed on the Landing Page
        return element(by.cssContainingText("#Label1",loginDetails.username));
    }

    public verifyPageName = (pageNames: myLibrary.pageNames) =>
    {
        //#lblHeader = The Page Name displayed
        return element(by.cssContainingText("#lblHeader",pageNames.pageName))
    }
}