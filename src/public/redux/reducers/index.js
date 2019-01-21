import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import {reducer as reducerForm} from 'redux-form';

import Route from '../../components/rootNav';
import test from './test';

const reducerRouter = createNavigationReducer(Route);

const reducers = combineReducers({
  router: reducerRouter,
  form: reducerForm,
  test: test
});

export default reducers;