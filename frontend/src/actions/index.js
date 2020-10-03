import { RESET_APP } from '../constants/actionTypes';

export * from './auth';
export * from './job';

export const resetApp = () => ({
  type: RESET_APP,
});
