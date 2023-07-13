import { configureStore } from "@reduxjs/toolkit";
//reducer
import productReducer from "./slices/products/productSlice";
import cartReducer from "./slices/carts/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer
  }
});

export default store;
