package etsy.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import etsy.PageElements.ClothingAndShoesLocators;
import etsy.utilities.SetupDrivers;

public class ClothingAndShoesAction {
	ClothingAndShoesLocators clothing;

	public ClothingAndShoesAction () {
	this.clothing = new ClothingAndShoesLocators();
	PageFactory.initElements(SetupDrivers.driver, clothing );

	}

public String Etsyclothingpage() throws Exception{

	//System.out.println(ReadExcelSheetData.getMapData("Email"));
	SetupDrivers.driver.get("https://www.etsy.com/");
	String title = SetupDrivers.driver.getTitle();
	
	SetupDrivers.driver.manage().window().maximize();
	SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	return title;

}
public void clickclothing()throws Exception{ 
	Thread.sleep(2000);
       clothing.clothinglocator.click();
}
}

	
