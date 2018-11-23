Feature: Achat d'un produit par un dragon
  As a dragon
  I want to be able to purchase items in the magasin
  so that I can have better items
  
  Scenario: we want to create a dragon and buy something
  Given I create a dragon with some gold and there exists a magasin with some products
  When I want to purchase the product with my gold
  Then I will receive the item and I will get my change back in gold

  Scenario: The user wants to add a pet to his dragon
    Given that I have a pet called Toto and a dragon 
		When when I add Toto to the dragon
		Then when I ask for the dragon pet, it should say "Toto"
		
  Scenario: We wanted to know if a dragon owns a pet or not
  	Given that I have a dragon without a pet
		When I want to know if he has one
		Then I have to get "I don't have any pets"