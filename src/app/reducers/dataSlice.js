import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "datas",
  initialState: {
    color: "#0eb761",
    colors: ["red", "green", "yellow", "pink"],
  },
  reducers: {
    changeColor : (state, action) => {
      state.color = action.payload
    }
  },
});

export const {changeColor} = dataSlice.actions

export default dataSlice.reducer;
