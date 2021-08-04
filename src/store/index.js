import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './products.js';

// give your state property a name here:
let reducers = combineReducers({
  store: productsReducer,
})

// createStore runs the reducer(s) and returns an object that has all of the redux store properties
export default createStore(reducers, composeWithDevTools());
