$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EtsyLogin.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to login to etsy.com using my login credentials",
  "description": "",
  "id": "as-a-user-i-want-to-login-to-etsy.com-using-my-login-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Etsy"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5660728000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "as-a-user-i-want-to-login-to-etsy.com-using-my-login-credentials;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on ‘sign in’ button on the upper right side",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters correct email address on the email tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters correct password on password tab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on ‘Sign In’",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user sees account homepage",
  "keyword": "And "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 5939898300,
  "status": "passed"
});
formatter.match({
  "location": "EtsyLoginSteps.user_clicks_on_sign_in_button_on_the_upper_right_side()"
});
formatter.result({
  "duration": 2101319900,
  "status": "passed"
});
formatter.match({
  "location": "EtsyLoginSteps.user_enters_correct_email_address_on_the_email_tab()"
});
formatter.result({
  "duration": 2084242700,
  "status": "passed"
});
formatter.match({
  "location": "EtsyLoginSteps.user_enters_correct_password_on_password_tab()"
});
formatter.result({
  "duration": 76534900,
  "status": "passed"
});
formatter.match({
  "location": "EtsyLoginSteps.user_clicks_on_Sign_In()"
});
formatter.result({
  "duration": 1116001500,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan id\u003d\"catnav-primary-link-10855\" class\u003d\"text-gray-darker\" role\u003d\"menuitem\" aria-haspopup\u003d\"true\" tabindex\u003d\"0\"\u003e...\u003c/span\u003e is not clickable at point (171, 84). Other element would receive the click: \u003cdiv class\u003d\"overlay-region\" data-toolkit-overlay\u003d\"\" id\u003d\"join-neu-overlay\" role\u003d\"dialog\" aria-labelledby\u003d\"join-neu-overlay-title\" aria-hidden\u003d\"false\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-3P56TJA\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\rlina\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64224}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 5b80bec24a0b3b6002235b221fdd5570\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat etsy.PageActions.EtsyHomePageAction.submitForm(EtsyHomePageAction.java:52)\r\n\tat etsy.stepdef.EtsyLoginSteps.user_clicks_on_Sign_In(EtsyLoginSteps.java:35)\r\n\tat ✽.Then user clicks on ‘Sign In’(EtsyLogin.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EtsyLoginSteps.user_sees_account_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 723053800,
  "status": "passed"
});
formatter.uri("JewelryandAccessories.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to see jewelry and accessories.",
  "description": "",
  "id": "as-a-user-i-want-to-see-jewelry-and-accessories.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Etsy"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5056314700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Click on jewelry and accessories",
  "description": "",
  "id": "as-a-user-i-want-to-see-jewelry-and-accessories.;click-on-jewelry-and-accessories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User lands on etsy homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees jewelry \u0026 accessories button on the upper left hand side",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on  jewelry \u0026 accessories button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Jewelry \u0026 accessories page appears.",
  "keyword": "And "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 6986865500,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_lands_on_etsy_homepage()"
});
formatter.result({
  "duration": 2037867400,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_sees_jewelry_accessories_button_on_the_upper_left_hand_side()"
});
formatter.result({
  "duration": 1923304200,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_clicks_on_jewelry_accessories_button()"
});
formatter.result({
  "duration": 4811116500,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.jewelry_accessories_page_appears()"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.after({
  "duration": 779549800,
  "status": "passed"
});
formatter.uri("LinaClothingAndShoes.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to see clothing and shoes",
  "description": "",
  "id": "as-a-user-i-want-to-see-clothing-and-shoes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Etsy"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5052313600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "See list of clothing and shoes items",
  "description": "",
  "id": "as-a-user-i-want-to-see-clothing-and-shoes;see-list-of-clothing-and-shoes-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User lands on etsy homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on  clothing and shoes tab across the top of the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "displayed all clothing and shoes",
  "keyword": "Then "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 7218972400,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_lands_on_etsy_homepage()"
});
formatter.result({
  "duration": 3808436500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingAndShoesSteps.user_mouse_over_on_clothing_and_shoes_tab_across_the_top_of_the_homepage()"
});
formatter.result({
  "duration": 4938291700,
  "status": "passed"
});
formatter.match({
  "location": "ClothingAndShoesSteps.displayed_all_clothing_and_shoes()"
});
formatter.result({
  "duration": 87300,
  "status": "passed"
});
formatter.after({
  "duration": 776775400,
  "status": "passed"
});
formatter.uri("LinaHomeAndLiving.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to see home and living",
  "description": "",
  "id": "as-a-user-i-want-to-see-home-and-living",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Etsy"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5031655300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "See list of home and living items",
  "description": "",
  "id": "as-a-user-i-want-to-see-home-and-living;see-list-of-home-and-living-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User lands on etsy homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on  home and living tab across the top of the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "displayed all home and living",
  "keyword": "Then "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 7321104500,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_lands_on_etsy_homepage()"
});
formatter.result({
  "duration": 1829938400,
  "status": "passed"
});
formatter.match({
  "location": "HomeAndLivingSteps.user_mouse_over_on_home_and_living_tab_across_the_top_of_the_homepage()"
});
formatter.result({
  "duration": 5796273900,
  "status": "passed"
});
formatter.match({
  "location": "HomeAndLivingSteps.displayed_all_home_and_living()"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
formatter.after({
  "duration": 764627600,
  "status": "passed"
});
formatter.uri("LinaPartySupplies.feature");
formatter.feature({
  "line": 2,
  "name": "As a user i want to click on wedding and party then select party supplies",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-wedding-and-party-then-select-party-supplies",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Etsy"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5032049100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Mouse hover on wedding and party and then select party supplies",
  "description": "",
  "id": "as-a-user-i-want-to-click-on-wedding-and-party-then-select-party-supplies;mouse-hover-on-wedding-and-party-and-then-select-party-supplies",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User lands on etsy homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on  party supplies",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Displayed all party supplies",
  "keyword": "Then "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 7959162000,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_lands_on_etsy_homepage()"
});
formatter.result({
  "duration": 1532429000,
  "status": "passed"
});
formatter.match({
  "location": "PartySuppliesSteps.user_click_on_party_supplies_submenu()"
});
formatter.result({
  "duration": 5443951900,
  "status": "passed"
});
formatter.match({
  "location": "PartySuppliesSteps.displayed_all_party_supplies()"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 812146000,
  "status": "passed"
});
formatter.uri("NavigatetoCart.feature");
formatter.feature({
  "line": 2,
  "name": "As a user I want to access cart",
  "description": "",
  "id": "as-a-user-i-want-to-access-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EtsyProject"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5089425600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Navigate to cart",
  "description": "",
  "id": "as-a-user-i-want-to-access-cart;navigate-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User browse to etsy web application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User lands on etsy homepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees cart button on the upper right hand side",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User navigate to shopping cart page",
  "keyword": "And "
});
formatter.match({
  "location": "EtsyLoginSteps.user_browse_to_etsy_web_application()"
});
formatter.result({
  "duration": 7506504300,
  "status": "passed"
});
formatter.match({
  "location": "EtsyJewlryandAccessories.user_lands_on_etsy_homepage()"
});
formatter.result({
  "duration": 2282569100,
  "status": "passed"
});
formatter.match({
  "location": "NavigatetoCart.user_sees_cart_button_on_the_upper_right_hand_side()"
});
formatter.result({
  "duration": 1537620700,
  "status": "passed"
});
formatter.match({
  "location": "NavigatetoCart.user_clicks_on_cart_button()"
});
formatter.result({
  "duration": 22021372300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//li[@class\u003d\u0027cart\u0027]\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-3P56TJA\u0027, ip: \u0027192.168.0.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\rlina\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64583}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 272835d444d4b264cf1e0950c9143ff1\n*** Element info: {Using\u003dxpath, value\u003d//li[@class\u003d\u0027cart\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat etsy.PageActions.NavigatetoCartAction.NavigatetoCart(NavigatetoCartAction.java:35)\r\n\tat etsy.stepdef.NavigatetoCart.user_clicks_on_cart_button(NavigatetoCart.java:20)\r\n\tat ✽.Then User clicks on cart button(NavigatetoCart.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NavigatetoCart.user_navigate_to_shopping_cart_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 715910200,
  "status": "passed"
});
});