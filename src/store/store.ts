import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

configureStore({
  // This configuration object is where we can define our reducers ( a map of reducers) and middleware

  reducer: {
    cart: cartSlice.reducer,
  },
});
