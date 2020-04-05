package etsy.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.EtsyHomePageAction;
import etsy.PageActions.HomeAndLivingAction;
import etsy.PageActions.NavigatetoCartAction;

public class HomeAndLivingSteps {
	
	HomeAndLivingAction homeActionobj = new HomeAndLivingAction();

	@When("^User mouse over on  home and living tab across the top of the homepage$")
	public void user_mouse_over_on_home_and_living_tab_across_the_top_of_the_homepage() throws Throwable {
		homeActionobj.clickhomeandliving();
	}

	@Then("^displayed all home and living$")
	public void displayed_all_home_and_living() throws Throwable {
		System.out.println("Test Complete");
	}

}
