import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';

import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem() {},
		clearItems() {},
	},
});

export const { addItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
