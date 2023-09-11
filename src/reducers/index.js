import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import catalogueReducer from './catalogueReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  catalogStage: catalogueReducer,
  themeStage: themeReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));