package dragonmavenproject.dragonmavenproject;

import java.security.spec.MGF1ParameterSpec;

public class Main {
	
	 public Main()
	   {   /*Magasin magasin = new Magasin(30);
	       Produit prod =new Produit("EP", 30, "Arme");
	       Produit prod1 =new Produit("EP", 30, "Arme");
	       Dragon dragon = new Dragon("red",100,magasin);
	        magasin.addProduit(prod);
	        magasin.addProduit(prod);
	        magasin.ajouterObservateur(dragon);

	        magasin.addProduit(prod1);
	        
	        System.out.println(magasin.nbOccuranceProduit(prod));
	        System.out.println(magasin.nbOccuranceProduit(prod1));
	        */
		 double exchange = MagasinCurrencyExchangeAdapter.EXCHANGE_RATE_OR_JETON;
		 Magasin magasin = new Magasin(30);
		 Dragon lolo = new Dragon("red", 2.0);
		 Produit arme =new Produit("EA75", 3, "Arme");
		 magasin.addProduit(arme);
		 MagasinCurrencyExchangeAdapter mag = new MagasinCurrencyExchangeAdapter(magasin);
		 System.out.println(lolo.getOr());
		 mag.buyProduit(arme,1,lolo);
		 
		 double result =(2 * exchange- arme.getPrix()*1) / exchange;
		 System.out.println(result);
		 System.out.println(lolo.getOr());
	   }
	   public static void main(String [] args)
	   {
	      Main m = new Main();
	   }

}
