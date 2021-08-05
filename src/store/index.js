import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import productsReducer from './products.js';
import categoriesReducer from './products.js';
import cartReducer from './cart.js';

// give your state property a name here:
let reducers = combineReducers({
  store: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer,
})

// createStore runs the reducer(s) and returns an object that has all of the redux store properties
export default createStore(reducers, composeWithDevTools());
