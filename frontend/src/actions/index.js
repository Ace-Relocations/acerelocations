import { RESET_APP } from '../constants/actionTypes';

export * from './auth';
export * from './job';
export * from './loader';
export * from './dashboard';
export * from './invoice';
export * from './expenses';

export const resetApp = () => ({
  type: RESET_APP,
});
