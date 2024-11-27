const PricingTableTitle = ({ title, label }) => {
  return (
    <div className="pricing-table__item-header">
      {label && <div className="pricing-table__item-label">{label}</div>}
      <p className="pricing-table__item-title">{title}</p>
    </div>
  );
}

export default PricingTableTitle;
