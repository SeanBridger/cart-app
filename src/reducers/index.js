import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';

const rootReducer = combineReducers({ products, basket });

export default rootReducer;
