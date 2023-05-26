import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserAuthState {
  loginStatus: boolean;
  userObj: {
    email?: string;
    userName?: string;
  };
}

const userAuth = createSlice({
  name: "userSession",
  initialState: {
    loginStatus: false,
    userObj: {},
  } as UserAuthState,
  reducers: {
    signIn: (state, action: PayloadAction<{ email: string; userName: string }>) => {
      if (action.payload.email && action.payload.userName) {
        state.userObj = { ...state.userObj, ...action.payload };
        state.loginStatus = true;
      } else {
        state.userObj = {};
        state.loginStatus = false;
      }
    },
  },
});

export const { signIn } = userAuth.actions;
export default userAuth.reducer;
