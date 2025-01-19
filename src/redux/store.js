import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import itemsReducer from "./features/items/ItemSlice";
import cartReducer from "./features/cart/CartSlice";
import wishListReducer from "./features/wishlist/WishListSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
  },
});
