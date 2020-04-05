@EtsyProject @regression
Feature: As a user I want to access cart 

Scenario: Navigate to cart 

Given User browse to etsy web application
When User lands on etsy homepage
And User sees cart button on the upper right hand side
Then User clicks on cart button
And User navigate to shopping cart page 