package stepdefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import framework.webPages.HomePageDarksky;
import framework.webPages.RegisterPage;
import org.openqa.selenium.By;
import org.testng.Assert;

public class DarkskySD {

    private HomePageDarksky homePage = new HomePageDarksky();
    private RegisterPage registerPage = new RegisterPage();


    @When ("^I am on Register Page$")
    public void iAmOnRegisterPage(){
        homePage.clickOnDarkSkyApi();
        homePage.clickonsignupDarksky();
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Dark Sky API: Register","Invalid Page");
    }

    @Given ("^I am on Darksky Home Page$")
    public void iAmOnDarkskyHomePage(){
        Assert.assertEquals(SharedSD.getDriver().getTitle(),"Dark Sky - 260 Broadway, New York City, NY","Invalid Page");
    }



    @And("^I click on (Register|Login) button on darksky$")
    public void clickOnRegisterButton(String buttton){
        switch (buttton){
            case "Register":
                registerPage.clickOnRegisterButton();
                break;
            case "Login":
                registerPage.clickOnLoginButton();
                break;
        }
    }


    @Then("^I verify error message - Please fill out this field$")
    public void verifyErrorMessage(){
    String exepected = homePage.getTextFromElement(By.xpath("//h1[@class='stand-alone title']"));
    Assert.assertEquals(exepected,"Register");
    }


    @Then("^I verify current temp is not greater or less then temps from daily timeline$")
    public void verifyCurrentTemp(){
     homePage.timelinetemprature();

    }



    @When ("^I expand todays timeline$")
    public void iExpandTodayTimeLine(){
        homePage.clickOnTimeLine();
    }


    @Then("^I verify lowest and highest temp is displayed correctly$")
    public void verifyLowestandHighestTemp(){
        homePage.islowestandHighestDisblaycorrectly();


    }


    @Then("^I verify timeline is displayed with two hours incremented$")
    public void verifyTimelineincrementedTwoHours(){
        homePage.timeLineIncrementedTwoHours();


    }



        }


