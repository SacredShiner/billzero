<<<<<<< HEAD
import { SEND_PIN, SEND_PIN_SUCCESS, SEND_PIN_FAILURE } from '../actions/user';
=======
import {SEND_PIN, SEND_PIN_SUCCESS, SEND_PIN_FAILURE} from '../actions/user';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case SEND_PIN:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SEND_PIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case SEND_PIN_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {
        ...state,
        error,
        loading: false,
      };
    default:
      return state;
  }
}
