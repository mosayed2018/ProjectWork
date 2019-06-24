package framework.webPages;

import org.openqa.selenium.By;

public class RegisterPage extends BasePage {

    private By registerButton = By.xpath("//button[contains(text(),'Register')]");
    private By loginButton = By.xpath("//a[@class='button']");

    private By errorMessage = By.id("errorMessage");


    public void clickOnRegisterButton(){clickOn(registerButton);}

    public void clickOnLoginButton(){
        clickOn(loginButton);
    }

    public String getErrorMessage(){
        return getTextFromElement(errorMessage);
    }

}
