#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: US01 - Wield swords
As a player
I want to wield swords to beat enemies
so that I cna get prestige

	Scenario Outline: we can create a sword 
		When I want to create a <sword>
		Then I can create a <sword>
	
	Scenario Outline: we can give a sword to a dragon
		Given that I have a <dragon> 
		When I want to add an <sword> to the <dragon>
		Then I can add a <sword> to the <dragon>
	
  Scenario Outline: we can print how many swords the dragon has
    Given that I have a <dragon> with one or more swords
    When I want to print the number of swords I have
    Then I can print the number of swords I have