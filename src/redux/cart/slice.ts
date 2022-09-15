import { createSlice } from '@reduxjs/toolkit';
//import { getCartFromLS } from '../../utils/getCartFromLS';

import { CartItem, CartSliceState } from './types';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addItem(state: CartSliceState, action) {
			console.log(state);
			console.log(action);

			state.cart.push({
				id: new Date().toISOString(),
				title: action.payload.title,
				desc: action.payload.desc,
				imageUrl: action.payload.imageUrl,
				price: action.payload.price,
			});
		},
		clearItems(state, actions) {},
	},
});

export const { addItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
