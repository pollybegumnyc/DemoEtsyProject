package etsy.PageActions;



import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import etsy.PageElements.EtsyHomePageLocators;

import etsy.utilities.SetupDrivers;



public class EtsyHomePageAction {

//HomePageLocators EtsyHomePageLocators = new HomePageLocators();
	EtsyHomePageLocators logintest;

	public EtsyHomePageAction() {
	this.logintest = new EtsyHomePageLocators();
	PageFactory.initElements(SetupDrivers.driver, logintest);

	}

public String EtsyHomepage() throws Exception{

	//System.out.println(ReadExcelSheetData.getMapData("Email"));
	SetupDrivers.driver.get("https://www.etsy.com/");
	String title = SetupDrivers.driver.getTitle();
	
	SetupDrivers.driver.manage().window().maximize();
	SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	return title;

}
public void signin()throws Exception{ 
	Thread.sleep(2000);
         logintest.Signinbutton.click();
}

	public void emailinfo() throws Exception{ 
		Thread.sleep(2000);{
		logintest.EmailAddress.sendKeys("cbegum930@gmail.com");
		}
	}
	public void Password() {
		logintest.Password.sendKeys("Talentech123");
		
	}
	public void submitForm() {
		logintest.Signin1.click();
}
}
