package dragonmavenproject.dragonmavenproject;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WieldSwordTest
{
	Epee	excalibur;
	Dragon	lolo;
	String	actualSword;

	Epee	epee;
	String	mySwordName;

	Dragon	dragonWithSwords;
	Epee	epee1;
	Epee	epee2;
	String	swordBoast;

	@Given("^I create a sword with name \"([^\"]*)\"$")
	public void i_create_a_sword_with_name(String swordName) throws Throwable {
		epee = new Epee(swordName);
	}

	@When("^when I ask the name of the sword$")
	public void when_I_ask_the_name_of_the_sword() throws Throwable {
		mySwordName = epee.getNom();

	}

	@Then("^the name of the sword should be \"([^\"]*)\"$")
	public void the_name_of_the_sword_should_be(String expected) throws Throwable {
		assertEquals(mySwordName, expected);
	}

	@Given("^that I create a sword named Excalibur and a dragon called Lolo$")
	public void that_I_create_a_sword_named_Excalibur_and_a_dragon_called_Lolo() throws Throwable {
		excalibur = new Epee("Excalibur");
		lolo = new Dragon();
	}

	@When("^I add Excalibur to Lolo$")
	public void i_add_Excalibur_to_Lolo() throws Throwable {
		lolo.addEpee(excalibur);
		actualSword = lolo.getEpees().get(0).getNom();
	}

	@Then("^when I ask for the first sword of his list of swords, it should say \"([^\"]*)\"$")
	public void when_I_ask_for_the_first_sword_of_his_list_of_swords_it_should_say(String expectedSword) throws Throwable {
		assertEquals(expectedSword, actualSword);

	}

	@Given("^that I have a dragon with two swords$")
	public void that_I_have_a_dragon_with_two_swords() throws Throwable {
		dragonWithSwords = new Dragon();
		epee1 = new Epee("Excalibur1");
		epee2 = new Epee("Excalibur2");
		dragonWithSwords.addEpee(epee1);
		dragonWithSwords.addEpee(epee2);
	}

	@When("^I want to print the number of swords I have$")
	public void i_want_to_print_the_number_of_swords_I_have() throws Throwable {
		swordBoast = dragonWithSwords.parlerDeMesEpees();
	}

	@Then("^I should get \"([^\"]*)\"$")
	public void i_should_get(String actual) throws Throwable {
		assertEquals(swordBoast, actual);
	}
}
