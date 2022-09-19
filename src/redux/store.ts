import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/slice';
import filterReducer from './filter/slice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		filter: filterReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
