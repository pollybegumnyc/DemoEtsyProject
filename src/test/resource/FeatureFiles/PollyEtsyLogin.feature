@Etsy @regression @polly
Feature: As a user I want to login to etsy.com using my login credentials

Scenario: Login with correct username and password

Given  User browse to etsy web application
When User clicks on ‘sign in’ button on the upper right side
And User enters correct email address on the email tab
And User enters correct password on password tab
Then user clicks on ‘Sign In’
And user sees account homepage