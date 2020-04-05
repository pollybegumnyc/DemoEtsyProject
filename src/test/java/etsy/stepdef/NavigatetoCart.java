package etsy.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.EtsyHomePageAction;
import etsy.PageActions.NavigatetoCartAction;


public class NavigatetoCart {
	NavigatetoCartAction NavAction = new NavigatetoCartAction();
	
	@When("^User sees cart button on the upper right hand side$")   
	public void user_sees_cart_button_on_the_upper_right_hand_side() throws Exception{ 
		NavAction.EtsyHomepage();
	}
			
	@Then("^User clicks on cart button$")
	public void user_clicks_on_cart_button()throws Exception{ 
		NavAction.NavigatetoCart();
	}
	
	@Then("^User navigate to shopping cart page$")
	public void user_navigate_to_shopping_cart_page() {
		System.out.println("Test Complete");
	}


}
