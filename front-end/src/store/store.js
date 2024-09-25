import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice, // Updated 'name' to 'cart' to match the slice
  },
});

export default store;
