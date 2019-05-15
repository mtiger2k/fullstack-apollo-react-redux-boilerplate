import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const logger = createLogger();
  const saga = createSagaMiddleware();

  const middleware = [saga, routerMiddleware(history)]

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
  }

  const composedEnhancers = composeEnhancer(
    applyMiddleware(...middleware),
  )

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancers
  );

  saga.run(rootSaga);

  return store
}