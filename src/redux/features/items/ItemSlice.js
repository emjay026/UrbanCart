import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setItemsLoading: (state, action) => {
      state.loading = action.payload;
    },
    setItemsError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default itemSlice.reducer;
export const { setItems, setItemsLoading, setItemsError } = itemSlice.actions;
