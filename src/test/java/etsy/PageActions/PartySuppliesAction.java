package etsy.PageActions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.support.PageFactory;

import etsy.PageElements.PartySuppliesLocators;
import etsy.utilities.SetupDrivers;

public class PartySuppliesAction {
	
	PartySuppliesLocators party;

	public PartySuppliesAction() {
		this.party = new PartySuppliesLocators();
		PageFactory.initElements(SetupDrivers.driver, party);

	}

	public String EtsyPartypage() throws Exception {

		// System.out.println(ReadExcelSheetData.getMapData("Email"));
		SetupDrivers.driver.get("https://www.etsy.com/");
		String title = SetupDrivers.driver.getTitle();

		SetupDrivers.driver.manage().window().maximize();
		SetupDrivers.driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		return title;

	}

	public void clickpartysupplies() throws Exception {
		Thread.sleep(2000);
		party.partysupplies.click();
	}



}
