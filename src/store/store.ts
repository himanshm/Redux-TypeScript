import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  // This configuration object is where we can define our reducers ( a map of reducers) and middleware
  reducer: {
    cart: cartSlice.reducer,
  },
});

/* This type should in the end describe how dispatching will work, or which kind of data will be involved with dispatching in your application.

 */
type AppDispatch = typeof store.dispatch;
