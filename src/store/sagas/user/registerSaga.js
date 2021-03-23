import { Endpoints } from '../../../constants';
import { UserActionTypes } from '../../actions/types';

function* registerSaga({ request, action, dispatchResponse }) {
  const { data, error } = yield request({
    method: 'post',
    endpoint: Endpoints.REGISTER,
    body: action.payload,
  });

  yield dispatchResponse(
    { data, error },
    UserActionTypes.REGISTER_SUCCESS,
    UserActionTypes.REGISTER_ERROR,
  )
}

export default registerSaga;
