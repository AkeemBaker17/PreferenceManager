//Used to access code from Libraries e.g. Cucumber or Other Files in the Project
import { World } from "cucumber";
import { Actions } from "./actions";

//Defining what Objects and Variables we want to share between Steps of a Scenario
declare module "cucumber"
{
    interface World
    {
        //Where we stored our Test Data - Username and Password from the global.d.ts
        loginDetails: myLibrary.LoginDetails;

        actions: Actions;

        //usernameWorld: string;
        //passwordWorld: string;
    }
}