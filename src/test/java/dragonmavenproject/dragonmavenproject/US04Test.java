package dragonmavenproject.dragonmavenproject;


import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Ar;

public class US04Test
{

	private    int		jeton;
	private    Magasin			magasin;
	private    Dragon          lolo;
	private    Produit         arme,aliment;

    

@Given("^Creation du dragon qui prend Or (\\d+) et avec une \"([^\"]*)\"$")
public void creation_du_dragon_qui_prend_Or_et_avec_une(int or, String couleur) throws Throwable {
    magasin =new Magasin(40);
    lolo =new Dragon(couleur,or,magasin);
}

@When("^Un nouveau produit sera disponible dans le magasin de type \"([^\"]*)\"$")
public void un_nouveau_produit_sera_disponible_dans_le_magasin_de_type(String categories) throws Throwable {
	arme = new Produit("Epee", 50, categories);
	aliment= new Produit("Sugar", 5, "alimentaire");
	magasin.addObserver(lolo);
    magasin.addProduit(arme);
    magasin.addProduit(aliment);
    

}

@Then("^Le dragon recevera une alerte pour acheter le nouveau produit$")
public void le_dragon_recevera_une_alerte_pour_acheter_le_nouveau_produit() throws Throwable {
   assertEquals(true,lolo.isArme(arme)); // isArme Test si l'arme existe dans le dragon 
   assertEquals(false,lolo.isArme(aliment)); // n'existe pas car le produit est de type aliment 

}

	
}