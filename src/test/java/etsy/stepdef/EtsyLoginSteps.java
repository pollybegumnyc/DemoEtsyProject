package etsy.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import etsy.PageActions.EtsyHomePageAction;

public class EtsyLoginSteps { 
	
	EtsyHomePageAction loginaction = new EtsyHomePageAction();

	@Given("^User browse to etsy web application$")
	public void user_browse_to_etsy_web_application() throws Throwable {
		loginaction.EtsyHomepage();
	}

	@When("^User clicks on ‘sign in’ button on the upper right side$")
	public void user_clicks_on_sign_in_button_on_the_upper_right_side() throws Throwable  {
	   loginaction.signin(); 
	}

	@When("^User enters correct email address on the email tab$")
	public void user_enters_correct_email_address_on_the_email_tab()throws Throwable {
		loginaction.emailinfo();
	}

	@When("^User enters correct password on password tab$")
	public void user_enters_correct_password_on_password_tab() {
		loginaction.Password();
	}

	@Then("^user clicks on ‘Sign In’$")
	public void user_clicks_on_Sign_In()  {
		loginaction.submitForm();
	}

	@Then("^user sees account homepage$")
	public void user_sees_account_homepage() {
		System.out.println("Test Complete");
	}

}
