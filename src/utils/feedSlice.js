import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    appendFeed: (state, action) => {
      state.push(...action.payload);
    },
    removeFeed: () => {
      return null;
    },
  },
});

export const { addFeed, appendFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
