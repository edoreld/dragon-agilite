package dragonmavenproject.dragonmavenproject;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

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
	private Magasin	magasin1;

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
		magasin1 = new Magasin(30);
		dragon = new Dragon("rouge", 666, magasin1);
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
		//
	}

	@Test
	public void testGetter() {
		assertEquals(defaultDragon.getCouleur(), "red");
		assertEquals(defaultDragon.getOr(), 0, 0.1);
	}

	@Test
	public void testSetter() {
		defaultDragon.setCouleur("gris");
		defaultDragon.setOr(23);
		assertEquals(defaultDragon.getOr(), 23, 0.1);
		assertEquals(defaultDragon.getCouleur(), "gris");
	}

	@Test
	public void testConstructeur() {
		magasin1 = new Magasin(30);
		Dragon testDragon = new Dragon("bleu", 1000, magasin1);
		assertEquals(testDragon.getOr(), 1000, 0.1);
		assertEquals(testDragon.getCouleur(), "bleu");

	}

	@Test
	public void associationDragonEpeeTest() {
		magasin1 = new Magasin(30);
		Dragon smaug = new Dragon("Smaug", 836, magasin1);
		Epee epeeMagique = new Epee("excalibur");

		smaug.addEpee(epeeMagique);

		assertEquals(smaug, epeeMagique.getOwner());
	}

	@Test
	public void associationEpeeDragonTest() {
		magasin1 = new Magasin(30);
		Dragon smaug = new Dragon("Smaug", 836, magasin1);
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
		AnimalCompagnie fido = new AnimalCompagnie("Toto");
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
		assertEquals(9001, defaultDragon.getOr(), 0.1);
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

	@Test
	public void patternTest(){
		 Magasin magasin = new Magasin(30);
	       Produit prod =new Produit("EP", 30, "Arme");
	       Produit prod1 =new Produit("EP", 30, "Arme");
	       Dragon dragon = new Dragon("red",100,magasin);
	        magasin.addProduit(prod);
	        magasin.addProduit(prod);
	        magasin.ajouterObservateur(dragon);

	        magasin.addProduit(prod1);
	        assertEquals(2,magasin.nbOccuranceProduit(prod));
	        assertEquals(0, magasin.nbOccuranceProduit(prod1));
		
	}

	/*----------------------------------------------------------------------------*/
	/*--------------------------  Test pour le magasin --------------------------*/
	/*---------------------------------------------------------------------------*/

	@Test
	public void testGetters() {
		int jeton = 30;
		Magasin m = new Magasin(30);
		assertEquals(jeton, m.getJeton());

	}

	@Test
	public void testConstructor() {
		int Jeton = 30;
		ArrayList<Caisse> Caisse = new ArrayList<>();
		Magasin m = new Magasin(30);
		assertEquals(Caisse.isEmpty(), m.getList().isEmpty()); // test si la
																// liste est
																// vide
		assertEquals(Jeton, m.getJeton()); // tester la valeur du jeton

	}

	@Test
	public void testConstructorCaisse() {
		String nom = "C1";
		int total = 50;

		Magasin m1 = new Magasin(20);
		Caisse c = new Caisse("C1", 50, m1);
		assertEquals(nom, c.getName());
		assertEquals(total, c.getTotal());

	}

	@Test
	public void testSetters() {

		Magasin m1 = new Magasin(20);
		Caisse c = new Caisse("C1", 50, m1);
		assertEquals(50, c.getTotal());
		c.setTotal(30);
		c.setNom("C2");
		assertEquals(30, c.getTotal());
		assertEquals("C2", c.getName());
	}

	@Test
	public void testOuverture() {
		Magasin m = new Magasin(20);
		Caisse c = new Caisse("C1", 80, m);
		assertEquals(100, c.transaction());
	}

	@Test
	public void testTransaction() {
		Magasin m1 = new Magasin(20);
		Caisse c = new Caisse("C1", 50, m1);
		c.transaction();
		assertEquals(true, m1.getOuvert());

	}

	@Test
	public void testEstOuverteCaisse() {
		Magasin m = new Magasin(20);
		Magasin zara = new Magasin(20);
		Caisse c = new Caisse("C1", 50, m);
		assertEquals(true, c.estOuverte());
		assertEquals(false, c.estVide());
		c.setTotal(80);
		c.transaction();
		assertEquals(false, c.estOuverte());
		c.setMagasin(zara);
		assertEquals(zara, c.getMagasin());

	}

	@Test
	public void TestesVide() throws Exception {
		Magasin m = new Magasin(0);
		Caisse caisse1 = new Caisse("C1", 0, m); // Caisse vide
		assertEquals(true, caisse1.estVide());
		m.setJeton(20);
		caisse1.transaction();
		assertEquals(false, caisse1.estVide());
	}

	@Test
	public void testFondMagasin() {
		Magasin zara = new Magasin(20);
		Magasin nike = new Magasin(30);
		Caisse c1 = new Caisse("c1", 30, zara); // caisse dans le magasin zara
		Caisse c2 = new Caisse("c1", 30, zara); // caisse dans le magasin zara
		Caisse c3 = new Caisse("c1", 30, zara); // caisse dans le magasin nike
		zara.addCaisse(c1); // add caisse dans le magasin
		zara.addCaisse(c2);

		assertEquals(80, zara.fondMagasin());

	}

	@Test
	public void testToStringMagasin() {

		Magasin m = new Magasin(20);
		String chaine = "Nombre de jeton dans le magasin :" + m.getJeton();
		assertEquals(chaine, m.toString());
	}

	@Test
	public void testToStringCaisse() {
		Magasin m = new Magasin(20);
		Caisse c = new Caisse("c1", 30, m);
		m.getCaisse();
		String chaine = " Caisse :" + c.getName() + " Fond de la Caisse : " + c.getTotal();
		assertEquals(chaine, c.toString());
	}

	@Test
	public void testAddCaisse() {
		Magasin m = new Magasin(20);
		Caisse c = new Caisse("cc", 20, m);
		Caisse c1 = new Caisse("c2", 20, m);
		Caisse c3 = new Caisse("c2", 20, m);
		c.getPanne();
		m.addCaisse(c);
		m.addCaisse(c1);
		m.addCaisse(c1);
		assertEquals(1, m.nbOccuranceCaisse(c1));

	}

	@Test
	public void testPanneCaisse() {
		Magasin m = new Magasin(34);
		Caisse c = new Caisse("c1", 30, m);
		c.setPanne(82); // on cree une panne en caisse
		assertEquals(true, c.caissePanne());// return true
		c.reparPanne(); // On repare la caisse
		assertEquals(false, c.caissePanne());

	}

}
