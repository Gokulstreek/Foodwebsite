import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFoodItems = createAsyncThunk(
  'food/fetchFoodItems',
  async () => {
    const response = await fetch('http://localhost:5014/getfood');
    const data = await response.json();
    return data;
  }
);

const foodSlice = createSlice({
  name: 'food',
  initialState: { 
   foodList: [],
   loading: false,
   error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.loading = false;
        state.foodList = action.payload;
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default foodSlice.reducer;
