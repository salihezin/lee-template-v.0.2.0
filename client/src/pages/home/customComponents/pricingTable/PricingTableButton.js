import { Button } from "primereact/button";

const PricingTableButton = ({ href, buttonLabel }) => {
  return (
    <div className="pricing-table__item-control">
      <Button onClick={href} label={buttonLabel} />
    </div>
  );
}

export default PricingTableButton;
