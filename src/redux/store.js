import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./ProfileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});
