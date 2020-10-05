import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Auth from './auth';
import Job from './job';
import Loader from './loader';
import Dashboard from './dashboard';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    Auth,
    Job,
    Loader,
    Dashboard,
  });
