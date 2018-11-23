package dragonmavenproject.dragonmavenproject;

public class MagasinCurrencyExchangeAdapter implements MagasinInterface
{
	Magasin			magasin;

	// We should retrieve this value from a reputed source
	static double	EXCHANGE_RATE_OR_JETON	= 7.254;

	public MagasinCurrencyExchangeAdapter(Magasin magasin) {
		this.magasin = magasin;
	}

	@Override
	public void buyProduit(Produit p, int QTe, Dragon dragon) {
		// Exchange rate from jetons to OR = 7.254
		double exchangeRate = MagasinCurrencyExchangeAdapter.EXCHANGE_RATE_OR_JETON;

		// Convert dragon's or to jetons
		double jetonsDragon = dragon.getOr() * exchangeRate;
		// If the dragon's jetons are equal or greater than the total price of
		// the item to buy
		if (jetonsDragon >= p.getPrix() * QTe) {
			// then buy the product
			magasin.buyProduit(p, QTe);
			// and remove the corresponding amount of gold from the dragon's
			// reserves
			dragon.setOr((jetonsDragon - p.getPrix() * QTe) / exchangeRate);
			System.out.println(dragon.getOr());
		} else {
			System.out.println("Not enough gold");
		}

	}

}
