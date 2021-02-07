import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { IUserInterface } from './Types/Types';
import { userReducer } from './Reducers/User';

export type AppState = {
  User: IUserInterface;
};

const rootReducer = combineReducers({
  User: userReducer,
});

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}

export const store = configureStore();
