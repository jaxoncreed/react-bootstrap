import * as handlers from './core';

export default function reducer(state = handlers.INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_OBJECTS':
    return handlers.addObjects(state, action.objects);
  case 'ADD_OBJECT':
    return handlers.addObject(state, action.object);
  case 'UPDATE_OBJECT':
    return handlers.updateObject(state, action.object);
  case 'DELETE_OBJECT':
  	return handlers.deleteObject(state, action.id);
  case 'OPEN_OBJECT':
    return handlers.openObject(state, action.id);
  case 'CLOSE_OBJECT':
    return handlers.closeObject(state, action.id);
  case 'UPDATE_EDIT':
    return handlers.updateEdit(state, action.index, action.newInfo);
  case 'SAVE_EDIT':
    return handlers.saveEdit(state, action.index, action.toSave);
  case 'DISCARD_EDIT':
    return handlers.discardEdit(state, action.index);
  }
  return state;
}