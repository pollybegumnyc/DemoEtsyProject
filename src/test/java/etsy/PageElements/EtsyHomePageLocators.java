package etsy.PageElements;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EtsyHomePageLocators {

		
		//RegisterButtonLocator
		@FindBy(xpath="//button[@class='wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin']")
		public WebElement Signinbutton;
	
		@FindBy(xpath="//input[@id='join_neu_email_field']")
		public WebElement EmailAddress;

		@FindBy(xpath="//input[@id='join_neu_password_field']")
		public WebElement Password;
		
		@FindBy(xpath="//span[@id='catnav-primary-link-10855']")
		public WebElement Signin1;
}
