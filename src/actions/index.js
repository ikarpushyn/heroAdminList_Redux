// import {
// 	filtersFetching,
// 	filtersFetched,
// 	filtersFetchingError,
// } from '../components/heroesFilters/filterSlice';

// export const fetchFilters = (request) => (dispatch) => {
// 	dispatch(filtersFetching());
// 	request('http://localhost:3001/filters')
// 		.then((data) => dispatch(filtersFetched(data)))
// 		.catch(() => dispatch(filtersFetchingError()));
// };

// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// export const heroCreated = createAction('HERO_CREATED');

// export const heroDeleted = createAction('HERO_DELETED');

// export const filtersFetching = () => {
// 	return {
// 		type: 'FILTERS_FETCHING',
// 	};
// };

// export const filtersFetched = (filters) => {
// 	return {
// 		type: 'FILTERS_FETCHED',
// 		payload: filters,
// 	};
// };

// export const filtersFetchingError = () => {
// 	return {
// 		type: 'FILTERS_FETCHING_ERROR',
// 	};
// };

// export const activeFilterChanged = (filter) => {
// 	return {
// 		type: 'ACTIVE_FILTER_CHANGED',
// 		payload: filter,
// 	};
// };
