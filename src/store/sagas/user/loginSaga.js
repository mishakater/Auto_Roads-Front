import { Endpoints } from '../../../constants';
import { UserActionTypes } from '../../actions/types';

function* loginSaga({ request, action, dispatchResponse }) {
  const { data, error } = yield request({
    method: 'post',
    endpoint: Endpoints.LOGIN,
    body: action.payload,
  });

  yield dispatchResponse(
    { data, error },
    UserActionTypes.LOGIN_SUCCESS,
    UserActionTypes.LOGIN_ERROR,
  )
}

export default loginSaga;
