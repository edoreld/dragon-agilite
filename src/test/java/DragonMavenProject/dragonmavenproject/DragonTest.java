package DragonMavenProject.dragonmavenproject;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import DragonMavenProject.dragonmavenproject.AnimalCompagnie;
import DragonMavenProject.dragonmavenproject.Dragon;
import DragonMavenProject.dragonmavenproject.Epee;

/**
 * The test class DragonTest.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class DragonTest
{
	private Dragon	dragon;
	private Dragon	defaultDragon;
	private Epee	excalibur;
	private Epee	twinkle;
	private Epee	caliburnus;

	/**
	 * Default constructor for test class DragonTest
	 */
	public DragonTest() {
	}

	/**
	 * Sets up the test fixture.
	 *
	 * Called before every test case method.
	 */
	@Before
	public void setUp() {
		initializerVariables();
	}

	private void initializerVariables() {
		dragon = new Dragon("rouge", 666);
		excalibur = new Epee("Excalibur");
		caliburnus = new Epee("Caliburnus");
		twinkle = new Epee("Twinkle");
		defaultDragon = new Dragon();
	}

	/**
	 * Tears down the test fixture.
	 *
	 * Called after every test case method.
	 */
	@After
	public void tearDown() {
	}

	@Test
	public void testGetter() {
		assertEquals(defaultDragon.getCouleur(), "red");
		assertEquals(defaultDragon.getOr(), 0);
	}

	@Test
	public void testSetter() {
		defaultDragon.setCouleur("gris");
		defaultDragon.setOr(23);
		assertEquals(defaultDragon.getOr(), 23);
		assertEquals(defaultDragon.getCouleur(), "gris");
	}

	@Test
	public void testConstructeur() {
		Dragon testDragon = new Dragon("bleu", 1000);
		assertEquals(testDragon.getOr(), 1000);
		assertEquals(testDragon.getCouleur(), "bleu");

	}

	@Test
	public void associationDragonEpeeTest() {
		Dragon smaug = new Dragon("Smaug", 836);
		Epee epeeMagique = new Epee("excalibur");

		smaug.addEpee(epeeMagique);

		assertEquals(smaug, epeeMagique.getOwner());
	}

	@Test
	public void associationEpeeDragonTest() {
		Dragon smaug = new Dragon("Smaug", 836);
		Epee epeeMagique = new Epee("Excalibur");
		Epee uneAutreEpeeMagique = new Epee("Zulfiqar");

		uneAutreEpeeMagique.setOwner(smaug);
		epeeMagique.setOwner(smaug);

		assertEquals(true, smaug.hasEpee(epeeMagique));
		assertEquals(true, smaug.hasEpee(uneAutreEpeeMagique));
	}

	@Test
	public void temperatureSouffleDragonTest() {
		assertEquals(305.05, dragon.temperatureSouffleDragon(), 0.1);
	}

	@Test
	public void testEpees() {
		dragon.addEpee(excalibur);
		dragon.addEpee(caliburnus);
		dragon.addEpee(twinkle);

		assertEquals("J'ai 3 epees", dragon.parlerDeMesEpees());
	}

	@Test
	public void petTest() {
		AnimalCompagnie fido = new AnimalCompagnie();
		defaultDragon.setPet(fido);

		assertEquals(fido, defaultDragon.getPet());
		assertEquals(true, defaultDragon.hasPet(fido));

		assertEquals(false, dragon.hasPet(fido));
	}

	@Test
	public void gelerDragonTest() {
		defaultDragon.gelerDragon(10);
		assertEquals(305.05 - 10, defaultDragon.getSouffleDragon(), 0.1);
	}

	@Test
	public void orTest() {
		defaultDragon.setOr(9001);
		assertEquals(9001, defaultDragon.getOr());
	}

	@Test
	public void epeesTest() {
		List<Epee> mesEpees = new ArrayList<Epee>();
		mesEpees.add(new Epee("epee1"));
		mesEpees.add(new Epee("epee2"));
		mesEpees.add(new Epee("epee3"));

		assertEquals(true, defaultDragon.getEpees().isEmpty());
		defaultDragon.setEpees(mesEpees);
		assertEquals(mesEpees, defaultDragon.getEpees());

	}
}
