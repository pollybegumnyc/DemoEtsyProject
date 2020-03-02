package etsy.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import etsy.PageElements.JewelryandAccessoriesLocators;
import etsy.utilities.SetupDrivers;

public class JewelryandAccessoriesAction {


	JewelryandAccessoriesLocators JewLocatorsobj;
   
	public JewelryandAccessoriesAction(){
		JewLocatorsobj = new JewelryandAccessoriesLocators();
		PageFactory.initElements(SetupDrivers.driver, JewLocatorsobj);
		
}
       public void EtsyHomepage() throws Exception{ 

			SetupDrivers.driver.get("https://www.etsy.com/");
			//string title = SetupDrivers.driver.getTitle();
			
			SetupDrivers.driver.manage().window().maximize();
			SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			//return title;
   }
		
		public void EtsyHomePageClick() throws Exception{
			Thread.sleep(2000);
			JewLocatorsobj.clickonjewelryandaccessories.click();
		}
	}
