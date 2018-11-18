package dragonmavenproject.dragonmavenproject;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

/**
 * The test class DragonTest.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class EpeeTest
{
	Dragon	dragon;
	Epee	excalibur;
	Epee	caliburnus;
	Epee	twinkle;
	Dragon	defaultDragon;
	private Magasin magasin1;

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
		magasin1 = new  Magasin(30);
		dragon = new Dragon("rouge", 666,magasin1);
		excalibur = new Epee("Excalibur");
		caliburnus = new Epee("Caliburnus");
		twinkle = new Epee("Twinkle");
		defaultDragon = new Dragon();
	}

	@Test
	public void epeeTest() {
		assertEquals("Excalibur", excalibur.getNom());
		assertEquals("Excalibur", excalibur.toString());
		excalibur.setOwner(defaultDragon);
		assertEquals(defaultDragon, excalibur.getOwner());
		excalibur.setNom("Excalibar");
		assertEquals("Excalibar", excalibur.getNom());

	}

	/**
	 * Tears down the test fixture.
	 *
	 * Called after every test case method.
	 */
	@After
	public void tearDown() {

	}
}
