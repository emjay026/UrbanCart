import { supabase } from "../../../lib/supabase";
import {
  setCartList,
  setCartError,
  setCartLoading,
  addCartItem,
  modifyCartItem,
  removeCartItem,
  clearCart,
} from "../../../redux/features/cart/CartSlice";

const readCartList = () => async (dispatch) => {
  try {
    console.log("fetching cart");
    dispatch(setCartLoading(true));
    const { data, error } = await supabase.from("cart").select("*");
    if (error) throw error;
    dispatch(setCartList(data));
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

const createCartItem = (cartItem) => async (dispatch) => {
  try {
    console.log("inserting item to cart");
    dispatch(setCartLoading(true));
    dispatch(addCartItem(cartItem));
    const { error } = await supabase.from("cart").insert(cartItem);
    if (error) throw error;
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

const updateCartItem = (cartItem) => async (dispatch) => {
  try {
    console.log("updating item in cart");
    dispatch(setCartLoading(true));
    dispatch(modifyCartItem(cartItem));
    const { error } = await supabase.from("cart").upsert(cartItem);
    if (error) throw error;
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

const deleteCartItem = (itemId) => async (dispatch) => {
  try {
    console.log("deleting item from cart");
    dispatch(setCartLoading(true));
    dispatch(removeCartItem(itemId));
    const { error } = await supabase.from("cart").delete().eq("id", itemId);
    if (error) throw error;
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

const deleteAllCartItems = () => async (dispatch) => {
  try {
    console.log("deleting item from cart");
    dispatch(setCartLoading(true));
    dispatch(clearCart());
    const { error } = await supabase
      .from("cart")
      .delete()
      .not("id", "eq", "00000000-0000-0000-0000-000000000000");
    if (error) throw error;
  } catch (error) {
    dispatch(setCartError(error.message));
  } finally {
    dispatch(setCartLoading(false));
  }
};

export {
  readCartList,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  deleteAllCartItems,
};
