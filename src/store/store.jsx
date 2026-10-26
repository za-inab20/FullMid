
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slice/bookSlice";

const myStore = configureStore({
  reducer: {
    mybook: bookReducer,
  },
});

export default myStore;
