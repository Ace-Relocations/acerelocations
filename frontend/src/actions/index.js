import { RESET_APP } from '../constants/actionTypes';

export * from './auth';
export * from './job';
export * from './loader';
export * from './dashboard';

export const resetApp = () => ({
  type: RESET_APP,
});
