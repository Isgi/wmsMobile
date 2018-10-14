import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigators from '../../navigators/RootNavigators';
import reducerAuth from './reducerAuth';
import reducerChecksheet from './reducerChecksheet';
import reducerDr from './reducerDr';

const reducerRouter = createNavigationReducer(RootNavigators);

const reducers = combineReducers({
  form: reducerForm,
  router: reducerRouter,
  auth: reducerAuth,
  checksheet: reducerChecksheet,
  dr: reducerDr
});

export default reducers;
