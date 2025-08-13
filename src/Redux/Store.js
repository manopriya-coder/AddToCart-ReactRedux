import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice/Cart'

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
