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
    addToCart(state, action: PayloadAction<ActionPayload>) {},
    removeFromCart() {},
  },
});
