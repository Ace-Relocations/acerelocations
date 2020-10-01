import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  email: '',
  password: '',
  authUser: localStorage.getItem('userToken'),
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        logout: false,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};
