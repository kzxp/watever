import { combineReducers } from 'redux'
import { LOCATION_CHANGE } from 'react-router-redux';
import data from './data'
import app from './app'

const routeReducer = (state = { locationBeforeTransitions: null }, action) => {
  switch (action.type) {
   
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { ...state, locationBeforeTransitions: action.payload }
    default:
      return state;
  }
}

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routeReducer,
    data,
    app,
    ...asyncReducers,
  });
}
