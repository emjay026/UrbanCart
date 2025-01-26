import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/AuthSlice";
import itemsReducer from "./features/items/ItemSlice";
import cartReducer from "./features/cart/CartSlice";
import wishListReducer from "./features/wishlist/WishListSlice";
import ordersReducer from "./features/orders/OrderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer,
    cart: cartReducer,
    wishlist: wishListReducer,
    orders: ordersReducer,
  },
});
