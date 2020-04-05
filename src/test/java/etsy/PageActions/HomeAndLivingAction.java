package etsy.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import etsy.PageElements.HomeAndLivingLocators;
import etsy.utilities.SetupDrivers;

public class HomeAndLivingAction {
	HomeAndLivingLocators homeliving;

	public HomeAndLivingAction () {
	this.homeliving = new HomeAndLivingLocators();
	PageFactory.initElements(SetupDrivers.driver, homeliving );

	}

public String Etsyhomelivingpage() throws Exception{

	//System.out.println(ReadExcelSheetData.getMapData("Email"));
	SetupDrivers.driver.get("https://www.etsy.com/");
	String title = SetupDrivers.driver.getTitle();
	
	SetupDrivers.driver.manage().window().maximize();
	SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	return title;

}
public void clickhomeandliving()throws Exception{ 
	Thread.sleep(2000);
       homeliving.homelocator.click();
}
}

	



