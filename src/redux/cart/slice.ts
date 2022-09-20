import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
				important: false,
			});
		},
		clearItems(state, actions: PayloadAction<string>) {
			state.list = state.list.filter((item) => item.id !== actions.payload);
		},
		sumPrice(state) {
			let summaryPriceArray: number[] = [];
			state.list.forEach((items) => summaryPriceArray.push(parseFloat(items.price)));

			let summaryPrice = summaryPriceArray.reduce((sum, current) => sum + current, 0);
			state.sum = summaryPrice;
		},
		changeImportant(state, actions: PayloadAction<string>) {
			let changeItem = state.list.filter((items) => items.id === actions.payload);
			changeItem.map((item) => (item.important = !item.important));
		},
	},
});

export const { addItem, clearItems, sumPrice, changeImportant } = cartSlice.actions;

export default cartSlice.reducer;
