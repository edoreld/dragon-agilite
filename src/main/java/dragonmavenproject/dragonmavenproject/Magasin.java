package dragonmavenproject.dragonmavenproject;

import java.util.ArrayList;

public class Magasin
{

	Caisse						c;
	private String				nomProd;
	private int					jeton	= 0;
	private boolean				Ouvert	= true;
	private ArrayList<Caisse>	lesCaisses;

	// constructor
	public Magasin(int jeton) {
		this.jeton = jeton;
		lesCaisses = new ArrayList<>();
	}

	public int getJeton() {
		return jeton;
	}

	/*
	 * public void setJeton(int jeton) throws Exception{
	 *
	 * if (jeton<=0) {throw new IllegalArgumentException(); } if(jeton>0){
	 * //Exception("On pourra pas avoir un jeton <=0 !"); this.jeton=jeton; } }
	 */

	public void setJeton(int jeton) {
		this.jeton = jeton;

	}

	public boolean getOuvert() {
		return Ouvert;
	}

	public void setOuvert(boolean ouvert) {
		Ouvert = ouvert;
	}

	/*
	 * public boolean caisseOuverte(Caisse c){ return c.estOuverte(); }
	 */

	@Override
	public String toString() {

		return "Nombre de jeton dans le magasin :" + jeton;
	}

	// premet de calculer le fond des caisses du Magasin
	public int fondMagasin() {
		int total = jeton;
		for (Caisse c1 : lesCaisses) {
			total = c1.getTotal() + total;
		}
		return total;
	}

	// methode qui verifier c'est une Caisse existe dans le magasin
	public boolean testRelation(Caisse c) {
		boolean bool = false;
		for (Caisse c1 : lesCaisses) {
			if (c.equals(c1)) {
				bool = true;
			}
			bool = false;
		}
		return bool;
	}

	public Caisse getCaisse(Caisse c) {
		for (Caisse c1 : lesCaisses) {
			if (c.equals(c1)) {
				return c;
			}
		}
		return c;
	}

	// metode qui permet d'ajouter une caisse dans le magasin
	public void addCaisse(Caisse c) {
		if (lesCaisses.isEmpty()) {
			lesCaisses.add(c);
		} else {
			if (nbOccuranceCaisse(c) == 0) {
				lesCaisses.add(c);
			}
		}

	}

	public int nbOccuranceCaisse(Caisse c) {
		int nb = 0;
		for (Caisse c1 : lesCaisses) {
			if (c.equals(c1)) {
				nb++;
			}
		}
		return nb;
	}

	public ArrayList<Caisse> getList() {
		return lesCaisses;
	}

	public int transactionMagasin() {

		for (Caisse c1 : lesCaisses) {
			jeton = jeton + c1.getTotal();
			if (jeton >= 1000) {
				setOuvert(false);
			}
		}
		return jeton;
	}

}
