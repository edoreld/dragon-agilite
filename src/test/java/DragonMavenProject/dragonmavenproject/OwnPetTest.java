package DragonMavenProject.dragonmavenproject;

import static org.junit.Assert.assertEquals;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OwnPetTest
{
	Dragon			dragon;
	AnimalCompagnie	pet;

	Epee			excalibur;
	Dragon			lolo;

	private String	actual;
	private String	actualSword;

	AnimalCompagnie	pet2;
	
	Dragon			dragonBill;
	String petCompanion;

	@Given("^that I have a pet called Toto and a dragon$")
	public void that_I_have_a_pet_and_a_dragon() throws Throwable {
		pet = new AnimalCompagnie("Toto");
		dragon = new Dragon();
	}

	@When("^when I add Toto to the dragon$")
	public void when_I_add_the_pet_to_the_dragon() throws Throwable {
		dragon.setPet(pet);
		actual = dragon.getPet().getName();
	}

	@Then("^when I ask for the dragon pet, it should say \"([^\"]*)\"$")
	public void when_I_ask_for_the_dragon_s_pet_it_should_say(String expected) throws Throwable {
		assertEquals(expected, actual);
	}

	@When("^I want to add a pet with name \"([^\"]*)\"$")
	public void i_want_to_add_a_pet_with_name(String expected) throws Throwable {
		pet = new AnimalCompagnie(expected);
	}

	@Then("^I can create a name and retrieve its \"([^\"]*)\"$")
	public void i_can_create_a_name_and_retrieve_its(String expected) throws Throwable {
		assertEquals(expected, pet.getName());

	}
	
	@Given("^that I have a dragon without a pet$")
	public void that_I_have_a_dragon_without_a_pet() throws Throwable {
		dragonBill = new Dragon();
	}
	
	@When("^I want to know if he has one$")
	public void i_want_to_know_if_he_has_one() throws Throwable {
		petCompanion = dragonBill.parlerDeMonAnimal();
	}
	
	@Then("^I have to get \"([^\"]*)\"$")
	public void i_have_to_get(String petCompanion1) throws Throwable {
		assertEquals(petCompanion1,petCompanion);
	}
	
}
