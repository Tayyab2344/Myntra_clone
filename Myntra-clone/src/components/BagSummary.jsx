import { useSelector } from "react-redux";
const BagSummary = () => {
  const BagItemIds = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.Items);
  const finalItems = Items.filter((item) => {
    const itemsIndex = BagItemIds.indexOf(item.id);
    return itemsIndex >= 0;
  });
  let totalItem = BagItemIds.length;
  let totalMRP = 0;
  let totalDicount = 0;
  let CONVINECE_FEE = 99;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDicount += bagItem.original_price - bagItem.current_price;
  });

  let finalAmount = totalMRP - totalDicount + CONVINECE_FEE;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem})</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">({totalMRP})</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            ({totalDicount})
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">({finalAmount})</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
