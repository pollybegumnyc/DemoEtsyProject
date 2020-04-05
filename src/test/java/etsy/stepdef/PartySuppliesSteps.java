package etsy.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.HomeAndLivingAction;
import etsy.PageActions.PartySuppliesAction;

public class PartySuppliesSteps {
	
	PartySuppliesAction PartySuppliesActionObj = new PartySuppliesAction();
	
	@When("^user click on  party supplies$")
	public void user_click_on_party_supplies_submenu() throws Throwable {
		PartySuppliesActionObj.clickpartysupplies();
	}

	@Then("^Displayed all party supplies$")
	public void displayed_all_party_supplies() throws Throwable {
		System.out.println("Test Complete");
	}


}
