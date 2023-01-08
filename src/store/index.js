import { createStore, combineReducers } from 'redux';


import AuthReducer from './auth/reducer';

const rootReducer = combineReducers({
    AuthReducer
});

const store = createStore(rootReducer)

export default store;