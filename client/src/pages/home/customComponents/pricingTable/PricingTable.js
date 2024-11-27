import React from 'react';
import PricingTableTitle from './PricingTableTitle';
import PricingTablePrice from './PricingTablePrice';
import PricingTableFeatures from './PricingTableFeatures';
import PricingTableButton from './PricingTableButton';

const PricingTable = ({ pricingData }) => {
  return (
    <>
      <article
        className={"pricing-table__item pricing-table-classic__item " + pricingData.preferred ? " pricing-table-classic__item_prefered" : ""}>
        <PricingTableTitle title={pricingData.title} label={pricingData.label} />
        <PricingTablePrice price={pricingData.price} />
        <PricingTableFeatures features={pricingData.features} />
        <PricingTableButton href={pricingData.href} buttonLabel={pricingData.buttonLabel} />
      </article>
    </>
  );
}

export default PricingTable;
