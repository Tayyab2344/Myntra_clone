import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import FetchSlice from "./FetchStatusSlice";
import BagSlice from "./Bag";

const MyntraStore = configureStore({
  reducer: {
    Items: ItemSlice.reducer,
    fetchStatus: FetchSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default MyntraStore;
