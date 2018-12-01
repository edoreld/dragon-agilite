package dragonmavenproject.dragonmavenproject;

import java.util.ArrayList;
import java.util.List;
import java.util.Observable;
import java.util.Observer;

/**
 * Write a description of class Dragon here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */

public class Dragon implements Observateur
{
	// instance variables - replace the example below with your own
	private int				nbOcur;
	private String			couleur;
	private double			or;
	private AnimalCompagnie	pet;
	private float			souffleDragon;
	private List<Epee>		epees		= new ArrayList<Epee>();
	private List<Produit>	lesArmes	= new ArrayList<>();
	private Magasin			magasin		= null;
	MagasinCurrencyExchangeAdapter Magas_Exchange;
	public double getOr() {
		return or;
	}

	public String getCouleur() {
		return couleur;
	}

	public void setOr(double or) {
		this.or = or;
	}

	public void setCouleur(String couleur) {
		this.couleur = couleur;
	}

	public ArrayList<Epee> getEpees() {
		ArrayList<Epee> mesEpees = (ArrayList<Epee>) epees;
		return mesEpees;

	}

	public void setEpees(List<Epee> epees) {
		this.epees = epees;
	}

	public boolean hasEpee(Epee epee) {
		return epees.contains(epee);
	}

	public void addEpee(Epee epee) {
		epees.add(epee);
		if (epee.getOwner() == null) {
			epee.setOwner(this);
		} else if (epee.getOwner() != this) {
			epee.setOwner(this);
		}
	}

	/**
	 * Constructor for objects of class Dragon
	 */
	public Dragon(String couleur, double or, Magasin magasin) {
		//
		setCouleur(couleur);
		setOr(or);
		this.magasin = magasin;

	}

	/**
	 * Constructor for objects of class Dragon
	 */
	public Dragon(String couleur, double or) {
		//
		setCouleur(couleur);
		setOr(or);

	}

	public void setSouffleDragon(float souffleDragon) {
		this.souffleDragon = souffleDragon;
	}

	public float getSouffleDragon() {
		return souffleDragon;
	}

	public Dragon() {
		couleur = "red";
		or = 0;
		souffleDragon = 305.05f;
	}

	/*
	 * Reduit la temperature du souffle de dragon de 10 dégrés
	 */
	public void gelerDragon(int v) {
		setSouffleDragon(getSouffleDragon() - v);
	}

	/**
	 * An example of a method - replace this comment with your own
	 *
	 * @param y
	 *            a sample parameter for a method
	 * @return the sum of x and y
	 */
	public float temperatureSouffleDragon() {

		return 305.05f;
	}

	public String parlerDeMesEpees() {

		return "J'ai " + epees.size() + " epees";
	}

	public String parlerDeMonAnimal() {

		return "I don't have any pets";
	}

	public boolean hasPet(AnimalCompagnie animalCompagnie) {
		if (pet == animalCompagnie) {
			return true;
		}
		return false;
	}

	public AnimalCompagnie getPet() {
		return pet;
	}

	public void setPet(AnimalCompagnie pet) {
		this.pet = pet;
	}

	@Override
	public void update(Magasin obs, Object prod) {
		Produit arme = (Produit)prod;
		 if (obs.equals(magasin))
			 
	      {
			 nbOcur= magasin.nbOccuranceProduit(arme);
			 Magas_Exchange = new MagasinCurrencyExchangeAdapter(magasin);
			 Magas_Exchange.buyProduit(arme, nbOcur, this);
			 lesArmes.add(arme);
				
	      }
	}	
	
    public boolean isArme(Produit prod)
    {
		for(Produit arme : this.lesArmes){
			if(arme.equals(prod))
			  return true;
			 }
			 return false;
		 }




}