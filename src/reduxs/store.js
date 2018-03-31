import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

// 定义中间件数组，默认包括thunk middleware
const middlewares = [thunk.withExtraArgument()];

middlewares.push(logger);


// 将中间件柯里化
const middleware = applyMiddleware(...middlewares);

export default (preloadedState = {}) => {
  const rootReducer = combineReducers({
    ...reducers,
  });
  return createStore(rootReducer, preloadedState, middleware);
};
