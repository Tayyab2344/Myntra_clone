import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export const ItemSliceActions = ItemSlice.actions;
export default ItemSlice;
