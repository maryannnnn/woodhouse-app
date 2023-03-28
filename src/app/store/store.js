import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { Reducers } from './reducers'

const rootReducer = combineReducers((
  Reducers
))

//export const store = createStore(rootReducer, applyMiddleware(thunk))
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;