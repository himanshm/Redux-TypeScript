import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

type ActionPayload = {
  id: string;
  title: string;
  price: number;
};

/* the PayloadAction type, which should be imported from Redux toolkit, is the type of action we should assign here and you should use this type whenever you are dealing with an action that carries a payload. So that does not just have a type, but also some extra data attached to it. */

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ActionPayload>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // when using Redux Toolkit, we actually don't have to update the quantity. by returning a new state or anything like that. Instead, we are allowed to directly mutate the state. Something you should not do when using React's useReducer hook, but something you can do when using Redux Toolkit.
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

/* Now dispatching actions that trigger reducers, is pretty straightforward when using Redux toolkit. You don't have to create custom action types. As we did it earlier with the useReducer function. Instead, Redux toolkit creates those action types and action objects for you. All you have to do to access them with the use of this cartSlice here, and then this actions property. And that will then give you an object which you can de-structure, Where you got one function for every reducer. And it has the same name as your reducer methods. But these functions here will actually not directly invoke these functions. Instead, they will create action objects which can then be sent to Redux. So that Redux then invokes these reducers for you. */

export const { addToCart, removeFromCart } = cartSlice.actions;
