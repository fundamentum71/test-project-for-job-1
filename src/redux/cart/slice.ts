import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { getCartFromLS } from '../../utils/getCartFromLS';
import { CartListState, CartItem, CartItemADD } from './types';

const initialState: CartListState = {
	list: [],
};

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
			console.log(state.list);
		},
		clearItems(state, actions: PayloadAction<string>) {
			state.list = state.list.filter((item) => item.id !== actions.payload);
		},
	},
});

export const { addItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
