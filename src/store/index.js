import { createStore, combineReducers } from 'redux';
import dropDownContentReducer from './reducers/dropdownContent';
import modalReducer from './reducers/modal';

const reducer = combineReducers({
    dropDownContentReducer,
    modalReducer
});

export default createStore(reducer);