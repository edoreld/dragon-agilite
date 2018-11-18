
@tag
Feature: En tant que utilisateur, je veux que mon dragon puisse acheter des armes dans le magasin avec mon or

  @tag1
  Scenario Outline: achter un nouveau produit 
    Given Creation du dragon qui prend Or 100 et avec une "<couleur>"
    When  Un nouveau produit sera disponible dans le magasin de type "<categorie>"
    Then  Le dragon recevera une alerte pour acheter le nouveau produit 
   Examples: 
      |couleur|categorie| 
      | rouge | Arme  | 