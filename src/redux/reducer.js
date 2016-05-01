import {addObjects, addObject, updateObject, deleteObject, openObject, closeObject, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_OBJECTS':
    return addObjects(state, action.objects);
  case 'ADD_OBJECT':
    return addObject(state, action.object);
  case 'UPDATE_OBJECT':
    return updateObject(state, action.object);
  case 'DELETE_OBJECT':
  	return deleteObject(state, action.id);
  case 'OPEN_OBJECT':
    return openObject(state, action.id);
  case 'CLOSE_OBJECT':
    return closeObject(state, action.id);
  }
  return state;
}