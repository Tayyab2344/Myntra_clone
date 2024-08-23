import { createSlice } from "@reduxjs/toolkit";

const FetchSlice = createSlice({
  name: 'fetch',  // Corrected slice name
  initialState: {
    fetchingDone: false,  // Corrected typo
    currFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchingDone = true;  // Corrected state mutation
    },
    markFetchingStarted: (state) => {
      state.currFetching = true;  // Corrected state mutation
    },
    markFetchingFinished: (state) => {
      state.currFetching = false;  // Corrected state mutation
    },
  },
});

export const fetchStatusAction = FetchSlice.actions;
export default FetchSlice;
