function parseSortBy(value) {
  if (typeof value !== 'string') {
    return '_id';
  }
  const keys = ['id', 'name', 'gender', 'onDuty', 'createdAt'];

  if (keys.includes(value) !== true) {
    return '_id';
  }
  return value;
}

function parseSortOrder(value) {
  if (typeof value !== 'string') {
    return 'ASC';
  }

  if (['ASC', 'DESC'].includes(value) !== true) {
    return 'ASC';
  }
  return value;
}

export function parseSortParams(query) {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
}
