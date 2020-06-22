import api from '../../services/api';

export default async (state = [], action) => {
  if (action.type === 'FILTER_ADD') {
    const filters = await api.getFilters();
    return {
      ...state,
      filters,
    };
  }
  if (action.type === 'FILTER_REMOVE') {
    const filteredFilters = state.filter(
      (item) => item.id !== action.filter.id,
    );
    return filteredFilters;
  }
  const filters = await api.getFilters();
  return filters;
};
