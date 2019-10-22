import { After, Before, Status } from "cucumber";
import { browser } from "protractor";
import {Actions} from "./actions";

//Runs before every Scenario
//The Delay of 100s ensures that the Website is open before each Scenario is ran
Before({ timeout: 100 * 1000 }, async function()
{
    this.actions = new Actions();

    //Needed as Pref Manager isn't written in Angular
    browser.waitForAngularEnabled(false);
    
    //Opens the Website to the Base URL in the 'protractor.config.ts file'
    await browser.get("");
})

//Runs after every Scenario
After({ timeout: 100 * 1000 }, async function(scenario)
{
    //Check if the Scenario has failed and if so, take a screenshot and attach it to the Report
    if(scenario.result.status === Status.FAILED)
    {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    }
});


