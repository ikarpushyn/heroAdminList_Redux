import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const filterAdapter = createEntityAdapter();

// const initialState = {
// 	filters: [],
// 	filtersLoadingStatus: 'idle',
// 	activeFilter: 'all',
// };

const initialState = filterAdapter.getInitialState({
	filtersLoadingStatus: 'idle',
	activeFilter: 'all',
});
// console.log(initialState);

export const fetchFilters = createAsyncThunk(
	'heroes/fetchFilters',

	async () => {
		const { request } = useHttp();

		return await request('http://localhost:3001/filters');
	}
);

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		filterChanged: (state, action) => {
			state.activeFilter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, (state) => {
				state.filtersLoadingStatus = 'loading';
			})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.filtersLoadingStatus = 'idle';
				filterAdapter.setAll(state, action.payload);
				// state.filters = action.payload;
			})
			.addCase(fetchFilters.rejected, (state) => {
				state.filtersLoadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { actions, reducer } = filterSlice;

export default reducer;

export const { selectAll } = filterAdapter.getSelectors((state) => state.filters);

export const { filtersFetching, filtersFetched, filtersFetchingError, filterChanged } = actions;
