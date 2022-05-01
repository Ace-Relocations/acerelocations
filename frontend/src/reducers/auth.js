import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  email: '',
  password: '',
  authUser: localStorage.getItem('userToken'),
  error: false,
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authUser: action.payload,
        logout: false,
        username: '',
        password: '',
      };

    case actions.LOGIN_FAIL:
      return {
        ...state,
        error: true,
        errorMessage: 'Incorrect Login or Password'
      };

    case actions.LOGOUT_REQUEST_SUCCESS:
      return {
        authUser: null,
        logout: true,
        username: '',
        password: '',
      };

    default:
      return state;
  }
};
