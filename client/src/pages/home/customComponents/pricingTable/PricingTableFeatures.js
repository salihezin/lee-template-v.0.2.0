const PricingTableFeatures = ({ features }) => {
  return (
    <>
      <ul className="pricing-table__item-features">
        {features.boldTextList.map((feature, index) => (
          <li key={index}>
            <span className="text-marked">
              {feature}
            </span>
          </li>
        ))}
        {features.regularTextList.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </>
  );
}

export default PricingTableFeatures;
