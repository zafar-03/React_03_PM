import { createStore } from 'redux';
import createReducer from './reducer';

const store = createStore(createReducer);

export default store;