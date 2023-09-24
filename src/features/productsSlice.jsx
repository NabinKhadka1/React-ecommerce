import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductItems = createAsyncThunk(
  "products/getProductItems",
  async () => {
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      return resp.data.products;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: "",
  },
  extraReducers: (builders) => {
    builders.addCase(getProductItems.pending, (state) => {
      state.loading = true;
    });
    builders.addCase(getProductItems.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builders.addCase(getProductItems.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});
export default productSlice.reducer;
