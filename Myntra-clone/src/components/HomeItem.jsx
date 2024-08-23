import { useDispatch, useSelector } from "react-redux";
import { BagSliceAction } from "../store/Bag";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(item.id, elementFound);
  const handleAddtoBag = () => {
    dispatch(BagSliceAction.addToBag(item.id));
  };
  const handleremovefromBag = () => {
    dispatch(BagSliceAction.remvoeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleremovefromBag}
        >
          Remove from bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddtoBag}
        >
          Add to bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
