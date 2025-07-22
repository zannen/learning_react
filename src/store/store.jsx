import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Load persisted state
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) return undefined;
    return { cart: JSON.parse(serializedState) };
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

// Save state to localStorage on every change
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (e) {
    console.error(e);
  }
});

export default store;
