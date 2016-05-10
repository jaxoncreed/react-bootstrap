export function openObject(id) {
  return {
    type: 'OPEN_OBJECT',
    id
  };
}

export function closeObject(id) {
  return {
    type: 'CLOSE_OBJECT',
    id
  };
}