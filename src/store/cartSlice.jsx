import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;
      // Optionally update totalPrice if price is provided
      if (newItem.product.price) {
        state.totalPrice += newItem.product.price;
      }
    },
    removeItem: (state, action) => {
      const actionItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === actionItem.id,
      );
      if (!existingItem) {
        return;
      }
      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= existingItem.product.price;
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== actionItem.id);
      }
    },
    removeAllItem: (state, action) => {
      console.log("removeAllItem", action);
      const actionItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === actionItem.id,
      );
      if (!existingItem) {
        return;
      }
      state.totalQuantity -= existingItem.quantity;
      state.totalPrice -= existingItem.product.price * existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== actionItem.id);
    },
  },
});

export const { addItem, removeItem, removeAllItem } = cartSlice.actions;
export default cartSlice.reducer;
