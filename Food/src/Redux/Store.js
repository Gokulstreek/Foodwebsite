import{configureStore}from"@reduxjs/toolkit";
import cartReducer from"./cartSlice";
import foodReducer from"./Food";
 export const store=configureStore({
  reducer:{
    cart:cartReducer,
    food:foodReducer,
  }
});

export default store;
