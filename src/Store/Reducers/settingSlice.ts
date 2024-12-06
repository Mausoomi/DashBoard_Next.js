import { createSlice } from "@reduxjs/toolkit";

interface settingState {
  isVisible: boolean;
}

const initialState: settingState = {
  isVisible: true, // Default state
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    toggleSetting: (state) => {
      state.isVisible = !state.isVisible;
    },
    showSetting: (state) => {
      state.isVisible = true;
    },
    hideSetting: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleSetting, showSetting, hideSetting } = settingSlice.actions;
export default settingSlice.reducer;
