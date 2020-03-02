package etsy.PageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NavigatetoCartLocators {

	@FindBy(xpath="//li[@class='cart']")
	public WebElement Navigatetocart;
}
