import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export function toggleDarkMode() {
  return async function (dispatch) {
    document.documentElement.classList.toggle("dark");
    dispatch({ type: "mode/toggleDarkMode" });
  };
}

export default modeSlice.reducer;
