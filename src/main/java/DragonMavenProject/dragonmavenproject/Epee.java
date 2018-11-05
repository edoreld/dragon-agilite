package DragonMavenProject.dragonmavenproject;

/**
 * Write a description of class Epee here.
 *
 * @author (your name)
 * @version (a version number or a date)
 */
public class Epee
{
	// instance variables - replace the example below with your own
	private Dragon	owner;
	private String	nom;

	/**
	 * Constructor for objects of class Epee
	 */

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Epee(String nom) {
		this.nom = nom;
	}

	public Dragon getOwner() {
		return owner;
	}

	public void setOwner(Dragon owner) {
		this.owner = owner;
		if (!owner.hasEpee(this)) {
			owner.addEpee(this);
		}
	}

	@Override
	public String toString() {
		return nom;
	}
}
