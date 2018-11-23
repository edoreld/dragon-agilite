package dragonmavenproject.dragonmavenproject;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DragonAchatTest
{
	Produit							excalibur;
	Magasin							magasin;
	Dragon							dragon;
	MagasinCurrencyExchangeAdapter	mag;
	double							exchangeRate	= MagasinCurrencyExchangeAdapter.EXCHANGE_RATE_OR_JETON;

	@Given("^I create a dragon with some gold and there exists a magasin with some products$")
	public void i_create_a_dragon_with_some_gold_and_there_exists_a_magasin_with_some_products() throws Throwable {
		excalibur = new Produit("Excalibur", 3, "ARME");
		magasin = new Magasin(30);
		magasin.addProduit(excalibur);
		mag = new MagasinCurrencyExchangeAdapter(magasin);
		dragon = new Dragon("red", 2.0);
	}

	@When("^I want to purchase the product with my gold$")
	public void i_want_to_purchase_the_product_with_my_gold() throws Throwable {
		mag.buyProduit(excalibur, 1, dragon);
	}

	@Then("^I will receive the item and I will get my change back in gold$")
	public void i_will_receive_the_item_and_I_will_get_my_change_back_in_gold() throws Throwable {
		assertEquals((2 * exchangeRate - excalibur.getPrix()) / exchangeRate, dragon.getOr(), 0.1);
	}
}
