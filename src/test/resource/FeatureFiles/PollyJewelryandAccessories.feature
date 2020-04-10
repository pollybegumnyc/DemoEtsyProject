@Etsy @regression @polly
Feature: As a user I want to see jewelry and accessories.

Scenario: Click on jewelry and accessories

Given User browse to etsy web application
When User lands on etsy homepage
And   User sees jewelry & accessories button on the upper left hand side
Then User clicks on  jewelry & accessories button
And Jewelry & accessories page appears.
