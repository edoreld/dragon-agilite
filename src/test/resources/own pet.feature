Feature: US02 - Own a pet
  As a player
  I want to own a pet
  to feel less lonely
  
  Scenario Outline: we want to create a pet with a name
  When I want to add a pet with name "<actual_name>"
  Then I can create a name and retrieve its "<expected_name>"
  
    Examples:
      | actual_name | expected_name |
      | toto | toto |
      | myPet | myPet |

  Scenario: The user wants to add a pet to his dragon
    Given that I have a pet called Toto and a dragon 
		When when I add Toto to the dragon
		Then when I ask for the dragon pet, it should say "Toto"