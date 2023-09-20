import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import catalogueReducer from './catalogueReducer';
import themeReducer from './themeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  catalogueStage: catalogueReducer,
  themeStage: themeReducer,
  userStage:userReducer,
});
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));