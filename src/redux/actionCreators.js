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

export function updateEdit(index, newInfo) {
	return {
		type: 'UPDATE_EDIT',
		index,
		newInfo
	}
}

export function saveEdit(index, toSave) {
	return {
		type: 'SAVE_EDIT',
		index,
		toSave
	}
}

export function discardEdit(index) {
	return {
		type: 'DISCARD_EDIT',
		index
	}
}