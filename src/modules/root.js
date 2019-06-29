import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import country from './country';
import input from './input';

export default combineReducers({ country, input , form: formReducer});
