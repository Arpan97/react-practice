import { createSlice } from "@reduxjs/toolkit";
import type { AdminAuth } from "./authTypes";
import { loginAuthAsync } from "./authThunk";
import { Snack } from "../../../utils/CommonFunction";

const initialState: AdminAuth = {
  username: "",
  role: "",
  accessToken: "",
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAuthAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuthAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.username;
        state.accessToken = action.payload.accessToken;
        state.role = action.payload.role;
        state.isLoggedIn = true;
      })
      .addCase(loginAuthAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Login failed";
        Snack("error", action.payload + "");
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
