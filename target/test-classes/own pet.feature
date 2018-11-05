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

Feature: US02 - Own a pet
As a player
I want to own a pet
to feel less lonely

Scenario Outline: I can add a pet to a dragon
		Given that I have a <pet> and a <dragon> 
		When I want to be able to add the <pet> to the <dragon>
		Then I can add a <pet> to the <dragon>
	
	Scenario Outline: we can give a sword to a dragon
		Given that I have a <dragon> 
		When I want to add an <sword> to it
		Then I can add an <sword> to it