import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orderList = action.payload;
    },
    setOrdersLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOrdersError: (state, action) => {
      state.error = action.payload;
    },
    addOrder: (state, action) => {
      state.orderList.push(action.payload);
    },
    removeOrder: (state, action) => {
      orderList = state.orderList.filter(
        (order) => order.id !== action.payload
      );
    },
    modifyOrder: (state, action) => {
      state.orderList = state.orderList.map((order) => {
        if (order.id === action.payload.id) {
          return action.payload;
        }
        return order;
      });
    },
    clearOrders: (state) => {
      state.orderList = [];
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
