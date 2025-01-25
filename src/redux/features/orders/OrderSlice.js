import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setOrdersLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOrdersError: (state, action) => {
      state.error = action.payload;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    modifyOrder: (state, action) => {
      state.orders = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          return action.payload;
        }
        return order;
      });
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const {
  setOrders,
  setOrdersLoading,
  setOrdersError,
  addOrder,
  removeOrder,
  modifyOrder,
  clearOrders,
} = orderSlice.actions;
export default orderSlice.reducer;
