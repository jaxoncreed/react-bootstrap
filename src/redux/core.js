import {cloneDeep} from 'lodash';

export const INITIAL_STATE = {
	objects: {},
	openObjects: {},
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
	newState.openObjects[id] = cloneDeep(newState.objects[id]);
	return newState;
}

export function closeObject(state, id) {
	var newState = cloneDeep(state);
	delete newState.openObjects[id];
	return newState;
}