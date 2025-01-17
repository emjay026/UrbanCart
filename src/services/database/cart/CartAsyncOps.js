import { supabase } from "../../../lib/supabase";
import {
  setCart,
  setCartError,
  setCartLoading,
} from "../../../redux/features/cart/CartSlice";

const fetchCart = () => async (dispatch) => {
  try {
    console.log("fetching items");
    dispatch(setCartLoading(true));
    const { data, error } = await supabase.from("cart").select("*");
    if (error) throw error;
    dispatch(setCart(data));
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

const uploadCart = (cartItems) => async (dispatch) => {
  try {
    console.log("uploading cart");
    dispatch(setCartLoading(true));
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      throw new Error("Invalid or empty data");
    }
    const { error } = await supabase.from("cart").insert(cartItems);
    if (error) throw error;
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

export { fetchCart, uploadCart };
