import {
  FETCH_SUBS,
  FETCH_SUBS_SUCCESS,
  FETCH_SUBS_FAILURE,
} from '../actions/subs';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,
};
<<<<<<< HEAD

export default function(state = INIT_STATE, action) {
  let error;

=======

export default function (state = INIT_STATE, action) {
  let error;

>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  switch (action.type) {
    case FETCH_SUBS:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case FETCH_SUBS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_SUBS_FAILURE:
<<<<<<< HEAD
      error = action.payload || { message: action.payload.message };
=======
      error = action.payload || {message: action.payload.message};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };
    default:
      return state;
  }
}
