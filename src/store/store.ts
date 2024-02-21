import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  // This configuration object is where we can define our reducers ( a map of reducers) and middleware
  reducer: {
    cart: cartSlice.reducer,
  },
});

/* This type should in the end describe how dispatching will work, or which kind of data will be involved with dispatching in your application.*/
/* TypeScript has a utility type which we can use to get hold of the return value of a function, so that when we have a function type, as it's the case here, we can extract a part of that function type and store that in a new type. And here it's the return value of the function type which we want to store in a new type..*/

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
