import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    session: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.session = action.payload.session;
    },
    clearUser: (state) => {
      state.user = null;
      state.session = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
