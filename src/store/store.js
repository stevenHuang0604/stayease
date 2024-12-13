import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlice.js";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
