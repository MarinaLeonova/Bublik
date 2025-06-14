
import { createSlice } from '@reduxjs/toolkit';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch {

  }
};

const persistedState = loadState();

const cartSlice = createSlice({
  name: 'cart',
  initialState: persistedState || {
    items: [],
    total: 0,
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
      state.totalItems += 1;
      saveState(state);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        const quantityDiff = action.payload.quantity - item.quantity;
        state.total += item.price * quantityDiff;
        state.totalItems += quantityDiff;
        item.quantity = action.payload.quantity;
        saveState(state);
      }
    },
    deleteItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.total -= item.price * item.quantity;
        state.totalItems -= item.quantity;
        state.items.splice(index, 1);
        saveState(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.totalItems = 0;
      saveState(state);
    }
  },
});

export const { addItem, updateQuantity, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;