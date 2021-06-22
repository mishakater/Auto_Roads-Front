import { Endpoints } from '../../../constants';
import { RoadsActionTypes } from '../../actions/types';

function* commentRoadSaga({ request, dispatchResponse, action }) {
  const { data, error } = yield request({
    method: 'post',
    endpoint: Endpoints.COMMENT_ROAD,
    body: action.payload,
  });

  yield dispatchResponse(
    { data, error },
    RoadsActionTypes.COMMENT_SUCCESS,
    RoadsActionTypes.COMMENT_ERROR,
  );
}

export default commentRoadSaga;
