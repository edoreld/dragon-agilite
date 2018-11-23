package dragonmavenproject.dragonmavenproject;

import java.security.spec.MGF1ParameterSpec;

public class Main {
	
	 public Main()
	   {   Magasin magasin = new Magasin(30);
	       Produit prod =new Produit("EP", 30, "Arme");
	       Produit prod1 =new Produit("EP", 30, "Arme");
	       Dragon dragon = new Dragon("red",100,magasin);
	        magasin.addProduit(prod);
	        magasin.addProduit(prod);
	        magasin.ajouterObservateur(dragon);

	        magasin.addProduit(prod1);
	        
	        System.out.println(magasin.nbOccuranceProduit(prod));
	        System.out.println(magasin.nbOccuranceProduit(prod1));
	   }
	   public static void main(String [] args)
	   {
	      Main m = new Main();
	   }

}
