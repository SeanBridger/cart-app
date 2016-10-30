import { createStore } from 'redux';

import rootReducer from './reducers/index';

import products from './data/products';

const defaultState = {
  products,
  basket : {
    total: "0.00",
    subtotal: "0.00",
    discount: "0.00",
    items: []
  }
};

const store = createStore(rootReducer, defaultState);

export default store;
