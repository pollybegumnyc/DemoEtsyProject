package etsy.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;


import etsy.PageElements.NavigatetoCartLocators;
import etsy.utilities.SetupDrivers;

public class NavigatetoCartAction {

	//HomePageLocators NavLocators = new NavLocators();
	NavigatetoCartLocators NavAction;

	public  NavigatetoCartAction() {
	this.NavAction = new NavigatetoCartLocators();
	PageFactory.initElements(SetupDrivers.driver, NavAction);

	}

public String EtsyHomepage() throws Exception{  

	//System.out.println(ReadExcelSheetData.getMapData("Email"));
	SetupDrivers.driver.get("https://www.etsy.com/");
	String title = SetupDrivers.driver.getTitle();
	
	SetupDrivers.driver.manage().window().maximize();
	SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	return title;

}
public void NavigatetoCart() throws Exception{ 
	Thread.sleep(2000);{
        NavAction.Navigatetocart.click();
}
}
}

