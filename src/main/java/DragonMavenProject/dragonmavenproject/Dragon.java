package DragonMavenProject.dragonmavenproject;

import java.util.ArrayList;
import java.util.List;

/**
 * Write a description of class Dragon here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Dragon
{
	// instance variables - replace the example below with your own
	private String			couleur;
	private int				or;
	private AnimalCompagnie	pet;
	private float			souffleDragon;
	private List<Epee>		epees	= new ArrayList<Epee>();

	public int getOr() {
		return or;
	}

	public String getCouleur() {
		return couleur;
	}

	public void setOr(int or) {
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
	public Dragon(String couleur, int or) {
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

}
