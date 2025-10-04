import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginPayload, LoginResponse } from "./authTypes";
import { http } from "../../../service/http";
import type { AxiosError } from "axios";

export const loginAuthAsync = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: string }
>("adminAuth/loginAuth", async (auth: LoginPayload, { rejectWithValue }) => {
  try {
    const response = await http.post<LoginResponse>("/auth/login", auth);
    return response;
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
    console.log("error ", error);
    return rejectWithValue(error?.message || "Login failed. Please try again.");
  }
});
