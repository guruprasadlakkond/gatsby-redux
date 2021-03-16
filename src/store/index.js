import { combineReducers, createStore, applyMiddleware } from 'redux';
import task from './reducers/task';


const store = createStore(
  combineReducers({
    task
  })
);
export default store;
