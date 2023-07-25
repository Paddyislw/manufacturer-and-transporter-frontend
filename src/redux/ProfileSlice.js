import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    accountType: "",
  },
  reducers: {
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
  },
});

export const {setAccountType} = profileSlice.actions
export const selectAccountType = (state)=>state.profile.accountType
