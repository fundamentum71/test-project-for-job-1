import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cart from './cart/slice';

export const store = configureStore({
	reducer: {
		cart,
	},
});

////будет хранить тип стейтов
export type RootState = ReturnType<typeof store.getState>;

////тип для диспатча
//type AppDispatch = typeof store.dispatch;
//export const useAppDispatch = () => useDispatch<AppDispatch>();
