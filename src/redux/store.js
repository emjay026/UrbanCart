import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import itemsReducer from "./features/items/ItemSlice";
import cartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    cart: cartReducer,
  },
});
