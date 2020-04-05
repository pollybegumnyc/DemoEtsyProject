
package etsy.stepdef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.JewelryandAccessoriesAction;


public class EtsyJewlryandAccessories {
	
 //JewelryandAccessoriesLocators JewLocatorsobj = new JewelryandAccessoriesLocators ();
	
	JewelryandAccessoriesAction JewActionobj = new JewelryandAccessoriesAction();
	
	@When("^User lands on etsy homepage$")
	public void user_lands_on_etsy_homepage() throws Exception {
		JewActionobj.EtsyHomepage(); 
	}

	@When("^User sees jewelry & accessories button on the upper left hand side$")
	public void user_sees_jewelry_accessories_button_on_the_upper_left_hand_side() throws Exception  {
		JewActionobj.EtsyHomepage();
	}

	@Then("^User clicks on  jewelry & accessories button$")
	public <JewandAccActionobj> void user_clicks_on_jewelry_accessories_button() throws Exception  {
		JewActionobj.EtsyHomePageClick();
	}

	@Then("^Jewelry & accessories page appears\\.$")
	public void jewelry_accessories_page_appears() {
    System.out.println("Test Complete");
	}


}
