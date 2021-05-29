import { UserActionTypes } from '../actions/types';

const initialState = {
  authenticated: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        authenticated: true,
      };
    case UserActionTypes.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
