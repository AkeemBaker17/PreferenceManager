import { $, by, element } from "protractor";

export class LandingPage
{
    //$ = element(by.cssSelector())
    //. = class
    //# = id
    
    //Identifying the Username displayed on the Landing Page
    public txtUsernameLandingPage = $("#Label1");
    public btnLogout = $("#Button6");

    //Checking the Username displayed on the Landing Page against the Username entered in the Login page
    public verifyUserLoggedIn = (loginDetails: myLibrary.LoginDetails) =>
    {
        //#Label1 = The Username displayed on the Landing Page
        return element(by.cssContainingText("#Label1",loginDetails.username));
    }
}