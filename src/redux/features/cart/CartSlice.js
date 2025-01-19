import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cartList: [],
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCartError: (state, action) => {
      state.error = action.payload;
    },

    setCartList: (state, action) => {
      state.cartList = action.payload;
    },
    addCartItem: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
    },
    updateCartItem: (state, action) => {
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    clearCart: (state) => {
      state.cartList = [];
    },
  },
});

export const {
  setCartLoading,
  setCartError,
  setCartList,
  addCartItem,
  removeCartItem,
  updateCartItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
