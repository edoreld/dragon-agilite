Feature: US01 - Wield swords
As a player
I want to wield swords to beat enemies
so that I can earn prestige

	Scenario Outline: we can create a sword 
		Given I create a sword with name "<actual_name>"
		When when I ask the name of the sword
		Then the name of the sword should be "<expected_name>"
		
		Examples:
		  | actual_name | expected_name | 
		  | Excalibur | Excalibur |		
	
  Scenario: we can give a sword to a dragon
		Given that I create a sword named Excalibur and a dragon called Lolo 
		When I add Excalibur to Lolo
		Then when I ask for the first sword of his list of swords, it should say "Excalibur"
	
  Scenario: we can print how many swords the dragon has
    Given that I have a dragon with two swords
    When I want to print the number of swords I have
    Then I should get "J'ai 2 epees"