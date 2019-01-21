import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

const middlewares = [];
// middleware react navigation
const reactNavigation = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
);
middlewares.push(reactNavigation);

const logger = createLogger();
middlewares.push(logger);

// middleware promise
middlewares.push(promiseMiddleware());

export default middlewares;