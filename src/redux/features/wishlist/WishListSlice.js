import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
    setWishListLoading: (state, action) => {
      state.loading = action.payload;
    },
    setWishListError: (state, action) => {
      state.error = action.payload;
    },
    addWishListItem: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeWishListItem: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    modifyWishListItem: (state, action) => {
      state.wishList = state.wishList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
});

export const {
  setWishList,
  setWishListLoading,
  setWishListError,
  addWishListItem,
  removeWishListItem,
  modifyWishListItem,
} = wishListSlice.actions;

export default wishListSlice.reducer;
