import { supabase } from "../../../lib/supabase";
import {
  setOrders,
  setOrdersError,
  setOrdersLoading,
  addOrder,
  modifyOrder,
  removeOrder,
  clearOrders,
} from "../../../redux/features/orders/OrderSlice";

const readOrdersList = () => async (dispatch) => {
  try {
    console.log("fetching orders");
    dispatch(setOrdersLoading(true));
    const { data, error } = await supabase.from("orders").select("*");
    if (error) throw error;
    dispatch(setOrders(data));
  } catch (error) {
    dispatch(setOrdersError(error.message));
  } finally {
    dispatch(setOrdersLoading(false));
  }
};

const createOrder = (order) => async (dispatch) => {
  try {
    console.log("inserting order");
    dispatch(setOrdersLoading(true));
    dispatch(addOrder(order));
    const { error } = await supabase.from("orders").insert(order);
    if (error) throw error;
  } catch (error) {
    dispatch(setOrdersError(error.message));
  } finally {
    dispatch(setOrdersLoading(false));
  }
};

const updateOrder = (order) => async (dispatch) => {
  try {
    console.log("updating order");
    dispatch(setOrdersLoading(true));
    dispatch(modifyOrder(order));
    //const { error } = await supabase.from("orders").upsert(order);
    if (error) throw error;
  } catch (error) {
    dispatch(setOrdersError(error.message));
  } finally {
    dispatch(setOrdersLoading(false));
  }
};

const deleteOrder = (orderId) => async (dispatch) => {
  try {
    console.log("deleting order");
    dispatch(setOrdersLoading(true));
    dispatch(removeOrder(orderId));
    //const { error } = await supabase.from("orders").delete().eq("id", orderId);
    if (error) throw error;
  } catch (error) {
    dispatch(setOrdersError(error.message));
  } finally {
    dispatch(setOrdersLoading(false));
  }
};

export { readOrdersList, createOrder, updateOrder, deleteOrder };
