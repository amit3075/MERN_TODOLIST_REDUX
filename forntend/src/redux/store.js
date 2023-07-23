
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import todosReducer from './reducers/todosReducer'; // Import the default reducer instead of named export
import { tabReducer } from './reducers/tabReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  activeTab: tabReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
