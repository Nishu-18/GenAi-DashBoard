import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./features/querySlice";

export const store = configureStore({
  reducer: {
    queries: queryReducer,
  },
});
