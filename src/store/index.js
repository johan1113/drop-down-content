import { createStore, combineReducers } from 'redux';
import dropDownContentReducer from './reducers/drop-down-content';
import modalReducer from './reducers/modal';

const reducer = combineReducers({
    dropDownContentReducer,
    modalReducer
});

export default createStore(reducer);