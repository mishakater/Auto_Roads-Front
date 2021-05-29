import { RoadsActionTypes } from '../actions/types';

const initialState = {
  roads: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case RoadsActionTypes.LIST_SUCCESS: {
      return {
        ...state,
        roads: action.payload,
      };
    }
    case RoadsActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        roads: action.payload,
      };
    }
    default:
      return state;
  }
}
