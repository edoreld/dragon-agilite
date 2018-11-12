package DragonMavenProject.dragonmavenproject;

import java.util.Random;

public class Caisse
{

	Magasin			m;
	private String	nom;
	private int		fondCaisse	= 0;
	private int		panne;
	Random			random		= new Random();

	public Caisse(String nom, int fondCaisse, Magasin ma) {
		this.nom = nom;
		this.fondCaisse = fondCaisse;
		m = ma;
		panne = random.nextInt(100 + 1 - 0) + 0;
	}

	public int getTotal() {
		return fondCaisse;
	}

	public String getName() {
		return nom;
	}

	public void setTotal(int nb) {
		fondCaisse = nb;
	}

	public void setNom(String name) {
		nom = name;
	}

	public int getPanne() {

		return panne;
	}

	public void setPanne(int panne) {
		this.panne = panne;
	}

	public int transaction() {
		int x = sommeTot();
		ouvertureMag();
		return x;
	}

	public int sommeTot() {
		return m.getJeton() + fondCaisse;
	}

	// test ouverture Magasin
	public void ouvertureMag() {
		if (sommeTot() >= 1000) {
			m.setOuvert(false);
		} else {
			m.setOuvert(true);
		}
	}

	public boolean estVide() {
		if (sommeTot() <= 0) {
			return true;
		}
		return false;

	}

	public boolean estOuverte() {
		return transaction() != 100;
		// if (transaction()==100) return false;
		// return true ;
	}

	@Override
	public String toString() {
		return " Caisse :" + nom + " Fond de la Caisse : " + fondCaisse;
	}

	public Magasin getMagasin() {
		return m;
	}

	public void setMagasin(Magasin m) {
		this.m = m;
	}

	public boolean caissePanne() {
		if (panne >= 80) {
			return true;
		} else {
			return false;
		}

	}

	// methode qui permet de reparer une caisse en Panne
	public void reparPanne() {

		if (panne >= 80) {
			panne = random.nextInt(50 + 1 - 0) + 0;
		}
	}

}
