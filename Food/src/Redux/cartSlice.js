import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},  
  },
  reducers: {
    addToCart:  (state, action) => {
     const item = action.payload;
     if(!state.items[item]){
      state.items[item] = 1;
     }
     else{
      state.items[item] += 1;
     }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      if(state.items[item]>1){ 
        state.items[item] -= 1;
      }
      else{
        delete state.items[item];
      }
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    }
  },
});
export const { addToCart, removeFromCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
 