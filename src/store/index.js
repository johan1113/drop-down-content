import { createStore, combineReducers, compose } from 'redux';
import dropDownContentReducer from './reducers/dropdownContent';
import modalReducer from './reducers/modal';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
)

const reducer = combineReducers({
    dropDownContentReducer,
    modalReducer
});

export default createStore(reducer, enhancer);