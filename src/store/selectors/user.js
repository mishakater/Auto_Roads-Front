import { ReducerKeys } from '../../constants';

export const authenticatedSelector = ({ [ReducerKeys.USER]: { authenticated } }) => authenticated;

export const userSelector = ({ [ReducerKeys.USER]: user }) => user;
