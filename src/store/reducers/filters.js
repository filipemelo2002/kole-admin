export default function filters(state = [], action) {
  if (action.type === 'FILTER_ADD') {
    return [...state, action.filter];
  }
  if (action.type === 'FILTER_REMOVE') {
    const filteredFilters = state.filter(
      (item) => item.id !== action.filter.id,
    );
    return filteredFilters;
  }
  if (action.type === 'FILTER_FETCH') {
    return action.filters;
  }
  return state;
}
