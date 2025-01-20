import { supabase } from "../../../lib/supabase";
import {
  setItems,
  setItemsError,
  setItemsLoading,
} from "../../../redux/features/items/ItemSlice";

const readItems = () => async (dispatch) => {
  try {
    console.log("fetching items");
    dispatch(setItemsLoading(true));
    const { data, error } = await supabase.from("items").select("*");
    if (error) throw error;
    dispatch(setItems(data));
  } catch (error) {
    dispatch(setItemsError(error.message));
  } finally {
    dispatch(setItemsLoading(false));
  }
};

export { readItems };
