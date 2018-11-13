package Model;

public class Produit {
	
	private String nom ;
	private int prix;
	private String cat;
	
	
	public Produit(String nom,int prix,String categorie){
		this.nom=nom;
		this.prix=prix;
		this.cat= categorie;
		
	}
	public String getCat(){
		return this.cat;
	}
	
	
	public String getNom(){
		
		return this.nom;
	}

	public int getPrix(){
		
		return this.prix;
	}
	public void setNom(String nom){
		this.nom=nom;
	}
	public void setPrix(int prix){
		this.prix=prix;
	}
	public void setCat(String categorie){
		this.cat=categorie;
	}

}
