import { Endpoints } from '../../../constants';
import { RoadsActionTypes } from '../../actions/types';

function* getRoadsSaga({ request, dispatchResponse, action }) {
  const { data, error } = yield request({
    method: 'post',
    endpoint: Endpoints.RATE_ROAD,
    body: action.payload,
  });

  yield dispatchResponse(
    { data, error },
    RoadsActionTypes.RATE_SUCCESS,
    RoadsActionTypes.RATE_ERROR,
  );
}

export default getRoadsSaga;
