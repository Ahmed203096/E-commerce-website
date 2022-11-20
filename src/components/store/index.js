import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";
import { tokenReducer } from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    productList: productReducer,
    filter: filterReducer,
    cart: cartReducer,
    token: tokenReducer,
  },
});
