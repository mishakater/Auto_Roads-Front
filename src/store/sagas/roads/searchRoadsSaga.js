import { Endpoints } from '../../../constants';
import { RoadsActionTypes } from '../../actions/types';

function* searchRoadsSaga({ request, action, dispatchResponse }) {
  const { data, error } = yield request({
    method: 'get',
    endpoint: Endpoints.SEARCH_ROADS,
    params: { roadName: action.payload.query },
  });

  yield dispatchResponse(
    { data, error },
    RoadsActionTypes.SEARCH_SUCCESS,
    RoadsActionTypes.SEARCH_ERROR,
  );
}

export default searchRoadsSaga;
