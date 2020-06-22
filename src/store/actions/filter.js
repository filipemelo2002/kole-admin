export function addFilter(filter) {
  return {
    type: 'FILTER_ADD',
    filter,
  };
}

export function removeFilter(filter) {
  return {
    type: 'FILTER_REMOVE',
    filter,
  };
}
