import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";

const store = configureStore({
  reducer: {
    datas : dataSlice,
  },
});

export default store;
