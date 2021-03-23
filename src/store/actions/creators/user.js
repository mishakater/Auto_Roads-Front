import { withCallbacks } from '../../lib';
import { UserActionTypes } from '../types';

export const login = withCallbacks(({ email, password }) => ({
  type: UserActionTypes.LOGIN,
  payload: { email, password },
}))

export const register = withCallbacks(({ email, password, name }) => ({
  type: UserActionTypes.REGISTER,
  payload: { email, password, name }
}))
