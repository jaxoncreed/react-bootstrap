import {cloneDeep, findIndex} from 'lodash';

export const INITIAL_STATE = {
	objects: {
		"111": {
			name: "Joe Map",
			id: "111",
			type: "MAP",
			data: {
				name: "Joe",
				age: 34,
				family: {
					name: "Family Collection",
					id: "112",
					type: "LIST"
				}
			}
		},
		"112": {
			name: "Family Collection",
			id: "112",
			type: "LIST",
			data: {
				"0": {
					name: "Joe Map",
					id: "111",
					type: "MAP"
				},
				"1": {
					name: "Sue Map",
					id: "113",
					type: "MAP"
				}
			}
		},
		"113": {
			name: "Sue Map",
			id: "113",
			type: "MAP",
			data: {
				name: "Sue",
				age: 21,
				family: {
					name: "Family Collection",
					id: "112",
					type: "LIST"
				}
			}
		}
	},
	openObjects: [],
	objectFocus: null
};

export function addObjects(state, objects) {
	var newState = cloneDeep(state);
	objects.forEach((object) => {
		newState.objects[object.id] = object;
	});
	return newState;
}

export function addObject(state, object) {
	var newState = cloneDeep(state);
	newState.objects[object.id] = object;
	return newState;
}

export function updateObject(state, object) {
	var newState = cloneDeep(state);
	newState.objects[object.id] = object;
	return newState;
}

export function deleteObject(state, id) {
	var newState = cloneDeep(state);
	delete newState.objects[id];
	return newState;
}

export function openObject(state, id) {
	var newState = cloneDeep(state);
	var openObjectIndex = findIndex(newState.openObjects, { id: id });
	if (openObjectIndex === -1) {
		newState.openObjects.push({ id: id });
		newState.objectFocus = newState.openObjects.length - 1;
	} else {
		newState.objectFocus = openObjectIndex;
	}
	return newState;
}

export function closeObject(state, index) {
	var newState = cloneDeep(state);
	newState.openObjects.splice(index, 1);
	if (newState.objectFocus === index) {
		newState.objectFocus = (index === newState.openObjects.length) ? index - 1 : index;
	} else if (newState.objectFocus > index) {
		newState.objectFocus = newState.objectFocus - 1;
	}
	return newState;
}

export function updateEdit(state, index, newInfo) {
	var newState = cloneDeep(state);
	newState.openObjects[index].editInfo = newInfo;
	return newState;
}

export function saveEdit(state, index, toSave) {
	var newState = cloneDeep(state);
	newState.objects[newState.openObjects[index].id] = toSave;
	delete newState.openObjects[index].editInfo;
	return newState;
}

export function discardEdit(state, index) {
	var newState = cloneDeep(state);
	delete newState.openObjects[index].editInfo;
	return newState;
}
