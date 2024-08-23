import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const BagItems = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.Items);
  const itemsFound = Items.filter((item) => {
    const itemsIndex = BagItems.indexOf(item.id);
    return itemsIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {itemsFound.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
