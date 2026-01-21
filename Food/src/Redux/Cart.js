export const selectCartItems = (state) => state.cart.items;

export const selectCartAmount = (state) => {
  let totalAmount = 0;
  const cartItems = state.cart.items;
  const foodList = state.food.foodList;

  for (const itemId in cartItems) {
    if(cartItems[itemId]>0){
      const foodInfo = foodList.find(food => food._id === itemId);
      if (foodInfo) {
        totalAmount += foodInfo.price * cartItems[itemId];
      }
    } 
  }
  return totalAmount;
} 
