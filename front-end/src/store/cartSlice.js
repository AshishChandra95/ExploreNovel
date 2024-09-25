import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // This is the cart array where you store items
  quantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, // Use the correct initialState
  reducers: {
    addItem: (state, action) => {
      // Use state.items instead of state.cart
      const find = state.items.findIndex(item => item.id === action.payload.id);

      if (find >= 0) {
        // If item is already in the cart, increase the quantity
        state.items[find].quantity += 1;
      } else {
        // If item is not in the cart, add it with an initial quantity of 1
        const tempvar = { ...action.payload, quantity: 1 };
        state.items.push(tempvar);
      }
    },
    removeItem: (state, action) => {
      // Remove item from cart
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
