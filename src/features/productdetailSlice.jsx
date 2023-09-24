import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetail = createAsyncThunk(
  "productdetail/getProductDetail",
  async (id) => {
    try {
      const resp = await axios.get(`https://dummyjson.com/products/${id}`);
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productdetailSlice = createSlice({
  name: "productdetail",
  initialState: {
    loading: false,
    product: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.product = [];
      state.error = action.error.message;
    });
  },
});
export default productdetailSlice.reducer;
