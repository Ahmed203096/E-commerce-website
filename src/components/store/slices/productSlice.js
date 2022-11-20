import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProducts: [],
};
export const getAllProducts = createAsyncThunk(
  "productList/getAllProducts",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const responce = await axios.get("http://localhost:5000/products");
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state, action) => {},
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {},
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
