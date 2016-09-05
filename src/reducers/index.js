import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import taskReducer from './taskReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings
  taskReducer
  routing: routerReducer
});

export default rootReducer;
