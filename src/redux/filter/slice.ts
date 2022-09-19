import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
	sort: {
		name: 'популярности',
		sortProperty: SortPropertyEnum.DEFAULT,
	},
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
	},
});

export const { setSort } = filterSlice.actions;

export default filterSlice.reducer;
