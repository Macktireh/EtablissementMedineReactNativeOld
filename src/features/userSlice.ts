import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthTokenType, UserReducer, UserType } from "#types/authTyping";

const initialState: UserReducer = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, { payload }: PayloadAction<AuthTokenType>) => {
      state.isAuthenticated = true;
      AsyncStorage.setItem("accessToken", payload.access);
      AsyncStorage.setItem("refreshToken", payload.refresh);
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      AsyncStorage.removeItem("accessToken");
      AsyncStorage.removeItem("refreshToken");
    },
    getUserInfoAction: (state, { payload }: PayloadAction<UserType>) => {
      state.user = payload;
    },
  },
});

export const { loginAction, logoutAction, getUserInfoAction } = userSlice.actions;
