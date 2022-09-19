import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';

import { CartListState, CartItemADD } from './types';

const initialState: CartListState = getCartFromLS();

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<CartItemADD>) {
			state.list.push({
				id: new Date().toISOString(),
				title: action.payload.title,
				desc: action.payload.desc,
				imageUrl: action.payload.imageUrl,
				price: action.payload.price,
			});
		},
		clearItems(state, actions: PayloadAction<string>) {
			state.list = state.list.filter((item) => item.id !== actions.payload);
		},
		sumPrice(state) {
			let summaryPriceArray: number[] = [];
			state.list.forEach((items) => summaryPriceArray.push(parseFloat(items.price)));
			let summaryPrice = summaryPriceArray.reduce((sum, current) => sum + current);
			state.sum = summaryPrice;
		},
	},
});

export const { addItem, clearItems, sumPrice } = cartSlice.actions;

export default cartSlice.reducer;
