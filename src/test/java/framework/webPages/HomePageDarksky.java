package framework.webPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import stepdefinition.SharedSD;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class HomePageDarksky extends BasePage {


    private By darkSkyApi = By.xpath("//div[@class='inner']//a[contains(text(),'Dark Sky API')]");
    private By signupDarkSky = By.xpath("//a[@class='button filled']");
    private By currentlocation = By.xpath("//a[@class='currentLocationButton']//img");
    private By locations = By.xpath("//form[@id='searchForm']//input");
    private By searchbutton = By.xpath("//a[@class='searchButton']//img");
    private static  By currentTemp = By.xpath("//span[contains(text(),'77°')]");
    private By todaysTimeline = By.xpath("//a[@class='day revealed']//span[@class='bar']");
    private By lowestTempup = By.xpath("//span[@class='minTemp'][contains(text(),'63˚')]");
    private By highestTempup = By.xpath("//a[@class='day revealed']//span[@class='maxTemp'][contains(text(),'86˚')]");
    private By lowestTempdown = By.xpath("//span[@class='temp'][contains(text(),'63˚')]");
    private By highestTempdown = By.xpath("//div[@class='dayDetails revealed']//span[@class='temp'][contains(text(),'86˚')]");





   public  void timelinetemprature (){

    String nowtemp = getTextFromElement(currentTemp);
    String nowTemprature = nowtemp.substring(0,2);
    int nowTemprat = Integer.parseInt(nowTemprature);
    boolean isVaild = true;

List<WebElement>timelineTemp = SharedSD.getDriver().findElements(By.xpath("//span[contains(@style,'opacity')]"));

       for(WebElement timelineTemps : timelineTemp){
            String temprature = timelineTemps.getText();
            int templine = Integer.parseInt(temprature.substring(0,2));
            int hightemp=0;
            int lowtemp=0;
            for(int i =0 ; i<=12;i++){
                if(templine>hightemp)hightemp=templine;
                if(templine>lowtemp)lowtemp=templine;}

       if( hightemp > nowTemprat) {
           System.out.println( " The current temp is not greater then temps from daily timeline"+ isVaild);
       }if (lowtemp < nowTemprat){
               System.out.println( " The current temp is not less then temps from daily timeline"+ isVaild);
        }
    }
}




    public void islowestandHighestDisblaycorrectly(){

        String lowtemp1 = getTextFromElement(lowestTempup);
        String lowtemp2= getTextFromElement(lowestTempdown);
        String hightemp1 = getTextFromElement(highestTempup);
        String hightemp2 = getTextFromElement(highestTempdown);

        String lowtem1 = lowtemp1.substring(0,2);
        String lowtem2 = lowtemp2.substring(0,2);
        String highttem1 = hightemp1.substring(0,2);
        String highttem2 = hightemp2.substring(0,2);

        int lowUp = Integer.parseInt(lowtem1);
        int lowDown = Integer.parseInt(lowtem2);
        int highUp = Integer.parseInt(highttem1);
        int highDown = Integer.parseInt(highttem2);

        boolean isDisplayedCorrectly = true;

          if(lowUp==lowDown)
              System.out.println( "The lowest temp is displayed correctly "+ isDisplayedCorrectly);
            if(highUp==highDown)
                System.out.println( "The highest temp is displayed correctly "+ isDisplayedCorrectly);

    }


    public void clickOnDarkSkyApi(){
        clickOn(darkSkyApi);
    }

    public void clickOnTimeLine(){
        clickOn(todaysTimeline);
    }

    public void clickonsignupDarksky(){
        clickOn(signupDarkSky);
    }

    public void enterCurrentLocation(String currentLocation) {
        setValue(currentlocation,currentLocation);
    }
    public void enterLocations(String anyLocation) {
        setValue(locations,anyLocation);
    }
    public void clickOnSearchDark(){
        clickOn(searchbutton);
    }

  public void timeLineIncrementedTwoHours() {

      Date currentDate = new Date();
      SimpleDateFormat timeFormat = new SimpleDateFormat("hh");
      String currenttime = timeFormat.format(currentDate);
      int timenow = Integer.parseInt(currenttime);

      boolean isDisplayedCorrectly = true;

      List<WebElement> timelinehour = SharedSD.getDriver().findElements(By.xpath("//span[contains(@class,'hour')]"));
      for(WebElement timelinehours : timelinehour){
          String hoursline = timelinehours.getText();
          int timeline = Integer.parseInt(hoursline);

          for(int i=0;i>=24;i++)

          if(timeline == timenow + 2){
              System.out.println("timeline is displayed with two hours incremented" + isDisplayedCorrectly);
          }else {
              System.out.println("timeline is not displayed with two hours incremented");

          }
      }

  }















}
