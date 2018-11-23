package dragonmavenproject.dragonmavenproject;

public interface Observable {

	
    public void ajouterObservateur(Observateur o);
    public void supprimerObservateur(Observateur o);
    public void notifierObservateurs(Object ob);
}
