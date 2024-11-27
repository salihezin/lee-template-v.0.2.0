const PricingTablePrice = ({ price }) => {
  return (
    <div className="pricing-table__item-price">
      <span className="pricing-table__item-price-currency">{price.currency}</span>
      <span className="pricing-table__item-price-value">{price.price}</span>
      <div className="pricing-table__item-price-aside">
        <span className="top">{price.cent}</span>
      </div>
    </div>
  );
}

export default PricingTablePrice;
