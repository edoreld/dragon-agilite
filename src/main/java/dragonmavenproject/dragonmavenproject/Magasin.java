package dragonmavenproject.dragonmavenproject;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
//import java.util.Observable;




public class Magasin implements Observable {

	
    private Dragon owner;
	private Caisse c;
	private String    nomProd;
	private int       jeton=0, Or=0 ;
	private boolean   Ouvert=true ;
    private ArrayList<Caisse> lesCaisses ; 
    private List<Produit> lesProduits;
    private ArrayList tabObservateur;// Tableau d'observateurs.
     
    
   // constucotor
   public Magasin(int jeton){
		this.jeton=jeton;
		this.lesCaisses =new ArrayList<>();
		this.lesProduits = new ArrayList<>();
		tabObservateur=new ArrayList();
   }
	
	
	
   public int getJeton(){
	return this.jeton;	
   }


   public void setJeton(int jeton){
	this.jeton=jeton;	
   }

   public boolean getOuvert(){
   return this.Ouvert;
   }

   public void setOuvert(boolean ouvert){
	this.Ouvert=ouvert;
   }

 
   public String toString(){
	
	return "Nombre de jeton dans le magasin :"+this.jeton;
   }

   /**
    * premet de calculer le fond  des caisses du Magasin 
    * @return
    */
   public int fondMagasin(){
	int total =this.jeton;
	for(Caisse c1 : this.lesCaisses){
		
	total = c1.getTotal()+total;
	}
	return total;
   }


   /**
    *  methode qui verifier c'est une Caisse existe dans le magasin 
    */
   public boolean testRelation(Caisse c){
  
	for(Caisse c1 : this.lesCaisses){
	if (c.equals(c1)){
	    return true;
      }
	  }
	 return false;
     }

   public Caisse getCaisse(){
	return this.c;
   }


  /**
   * metode qui permet d'ajouter une caisse dans le magasin
   * @param c
   */
  public void addCaisse(Caisse c){
	if(lesCaisses.isEmpty()){
		this.lesCaisses.add(c);
		
	}
	else{
	if(nbOccuranceCaisse(c)==0){
	lesCaisses.add(c);
	}
		}
	
   }
  /**
   * metode qui permet d'ajouter un produit dans un magasin
   * si le produit est de type Arme en envoi directement un notif au Dragon 
   * pour acheter le produit 
   * @param prod
   */
  public void addProduit(Produit prod){
	if (lesProduits.isEmpty()){
		this.lesProduits.add(prod);
	    if(prod.getCat().equals("Arme")){
		  //  setChanged();
		  //  notifyObservers(prod);
	    	notifierObservateurs(prod);
	    }
   } else if(isExisteProd(prod)){
		this.lesProduits.add(prod);
     }
	 else{
	   this.lesProduits.add(prod);
	    if(prod.getCat().equals("Arme")){
		   // setChanged();
		    //notifyObservers(prod);
	    	notifierObservateurs(prod);
	    }
	 }
  }

   public int nbOccuranceProduit(Produit prod){
	int nb =0;
	for(Produit p1 : this.lesProduits){
		if(p1.equals(prod))
			nb++;
	}
	return nb ;
    }

    public boolean isExisteProd(Produit prod){
	for(Produit produit : this.lesProduits){
		if (produit.equals(prod)){
			return true;
		}
	 }
	 return false;
     }



   public int nbOccuranceCaisse(Caisse c){
	int nb =0;
	for(Caisse c1 : this.lesCaisses){
		if(c.equals(c1))
			nb++;
	}
	return nb ;
   }


   public ArrayList<Caisse> getList(){
	return this.lesCaisses;
    }

   public int transactionMagasin(){
	int result=0 ;
	for(Caisse c1 : this.lesCaisses){
		result= this.jeton + c1.getTotal();

	 }
	return result;
	
   }

   /**a chaque achat d'un nouveau produit ce dernier sera retirer automatiquement 
    * du magasin
    * 
    * @param p
    * @param QTe
    */
   public synchronized void buyProduit(Produit p, int QTe ){
	this.jeton=this.jeton+(p.getPrix() *QTe);
	lesProduits.remove(p);
	
    }
   

   @Override
   public void notifierObservateurs(Object ob)
   {
           for(int i=0;i<tabObservateur.size();i++)
           {
                   Observateur o = (Observateur) tabObservateur.get(i);
                   o.update(this,ob);// On utilise la méthode "tiré".
           }
   }



@Override
public void ajouterObservateur(Observateur o) {
     tabObservateur.add(o);
	
}



@Override
public void supprimerObservateur(Observateur o) {
	 tabObservateur.remove(o);  
	
}

}
