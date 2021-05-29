import { Endpoints } from '../../../constants';
import { UserActionTypes } from '../../actions/types';

function* updateProfileSaga({ request, action, dispatchResponse }) {
  const { data, error } = yield request({
    method: 'post',
    endpoint: Endpoints.UPDATE_PROFILE,
    body: action.payload
  });

  yield dispatchResponse(
    { data, error },
    UserActionTypes.UPDATE_PROFILE_SUCCESS,
    UserActionTypes.UPDATE_PROFILE_ERROR
  )
}

export default updateProfileSaga;
