import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    remvoeFromBag: (state, action) => {
      return state.filter((itemID) => itemID !== action.payload);
    },
  },
});
export const BagSliceAction = BagSlice.actions;
export default BagSlice;
