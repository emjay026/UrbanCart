import { supabase } from "../../../lib/supabase";
import {
  setWishList,
  setWishListError,
  setWishListLoading,
  addWishListItem,
  modifyWishListItem,
  removeWishListItem,
} from "../../../redux/features/wishlist/WishListSlice";

const readWishListList = () => async (dispatch) => {
  try {
    console.log("fetching wishlist");
    dispatch(setWishListLoading(true));
    const { data, error } = await supabase.from("wishlist").select("*");
    if (error) throw error;
    dispatch(setWishList(data));
  } catch (error) {
    dispatch(setWishListError(error.message));
  } finally {
    dispatch(setWishListLoading(false));
  }
};

const createWishListItem = (wishItem) => async (dispatch) => {
  try {
    console.log("inserting item to WishList");
    dispatch(setWishListLoading(true));
    dispatch(addWishListItem(wishItem));
    const { error } = await supabase.from("wishlist").insert(wishItem);
    if (error) throw error;
  } catch (error) {
    dispatch(setWishListError(error.message));
  } finally {
    dispatch(setWishListLoading(false));
  }
};

const updateWishListItem = (wishItem) => async (dispatch) => {
  try {
    console.log("updating item in wishlist");
    dispatch(setWishListLoading(true));
    dispatch(modifyWishListItem(wishItem));
    const { error } = await supabase.from("wishlist").upsert(wishItem);
    if (error) throw error;
  } catch (error) {
    dispatch(setWishListError(error.message));
  } finally {
    dispatch(setWishListLoading(false));
  }
};

const deleteWishListItem = (itemId) => async (dispatch) => {
  try {
    console.log("deleting item from wishlist");
    dispatch(setWishListLoading(true));
    dispatch(removeWishListItem(itemId));
    const { error } = await supabase.from("wishlist").delete().eq("id", itemId);
    if (error) throw error;
  } catch (error) {
    dispatch(setWishListError(error.message));
  } finally {
    dispatch(setWishListLoading(false));
  }
};

export {
  readWishListList,
  updateWishListItem,
  createWishListItem,
  deleteWishListItem,
};
