package etsy.stepdef;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.ClothingAndShoesAction;


public class ClothingAndShoesSteps {
	
	ClothingAndShoesAction clothActionobj = new ClothingAndShoesAction();
	
	@When("^User mouse over on  clothing and shoes tab across the top of the homepage$")
	public void user_mouse_over_on_clothing_and_shoes_tab_across_the_top_of_the_homepage() throws Throwable {
		clothActionobj.clickclothing();   
	}

	@Then("^displayed all clothing and shoes$")
	public void displayed_all_clothing_and_shoes() throws Throwable {
	  System.out.println("Test Complete");
	}
}
