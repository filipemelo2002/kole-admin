import { api } from '../../services/api';
import { getHeaderPayload, updateSessionToken } from '../../utils/handleSessionTokens';

export function addFilter(filter) {
  return async (dispatch) => {
    const response = await api.post('/filters', filter, getHeaderPayload());

    const { token, refresh_token } = response.headers;
    updateSessionToken(token, refresh_token);
    dispatch({
      type: 'FILTER_ADD',
      filter: response.data,
    });
  };
}

export function removeFilter(filter) {
  return async (dispatch) => {
    const response = await api.delete(`/filters/${filter.id}`, getHeaderPayload());

    const { token, refresh_token } = response.headers;
    updateSessionToken(token, refresh_token);

    dispatch({
      type: 'FILTER_REMOVE',
      filter,
    });
  };
}

export function fetchFilters() {
  return async (dispatch) => {
    const response = await api.get('/filters');
    dispatch({
      type: 'FILTER_FETCH',
      filters: response.data,
    });
  };
}
