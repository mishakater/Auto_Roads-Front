import { Endpoints } from '../../../constants';
import { RoadsActionTypes } from '../../actions/types';

function* getRoadsSaga({ request, dispatchResponse }) {
  const { data, error } = yield request({
    method: 'get',
    endpoint: Endpoints.GET_ROADS,
  });

  yield dispatchResponse(
    { data, error },
    RoadsActionTypes.LIST_SUCCESS,
    RoadsActionTypes.LIST_ERROR,
  );
}

export default getRoadsSaga;
