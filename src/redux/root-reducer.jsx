import filterReducer from './filter/filter-slice';
import contactReducer from './contacts/contact-slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;