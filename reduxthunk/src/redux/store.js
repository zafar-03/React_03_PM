import { createStore,applyMiddleware } from 'redux'
import createReducer from './reducer'
import { thunk } from 'redux-thunk'


const store = createStore(createReducer,applyMiddleware(thunk));

export default store;