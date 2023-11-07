import { configureStore } from "@reduxjs/toolkit";
import zipSlice from "./zip-slice";

const store = configureStore({
  reducer: { zipInfo: zipSlice.reducer },
});

export default store;