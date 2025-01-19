import { supabase } from "../../../lib/supabase";
import {
  setWishList,
  setWishListError,
  setWishListLoading,
} from "../../../redux/features/wishlist/WishlistSlice";

const fetchWishList = () => async (dispatch) => {
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

const uploadWishList = (wishList) => async (dispatch) => {
  try {
    console.log("uploading wishlist");
    dispatch(setWishListLoading(true));
    if (!Array.isArray(wishList) || wishList.length === 0) {
      throw new Error("Invalid or empty data");
    }
    const { error } = await supabase.from("wishlist").insert(wishList);
    if (error) throw error;
  } catch (error) {
    dispatch(setWishListError(error.message));
  } finally {
    dispatch(setWishListLoading(false));
  }
};

export { fetchWishList, uploadWishList };
