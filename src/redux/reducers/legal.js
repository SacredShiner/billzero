import {
  FETCH_LEGAL,
  FETCH_LEGAL_SUCCESS,
  FETCH_LEGAL_FAILURE,
} from '../actions/legal';

const INIT_STATE = {
  data: '',
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
    case FETCH_LEGAL:
      return {
        ...state,
        data: '',
        error: null,
        loading: true,
      };
    case FETCH_LEGAL_SUCCESS:
      return {
        ...state,
        data: action.payload.body,
        error: null,
        loading: false,
      };
    case FETCH_LEGAL_FAILURE:
<<<<<<< HEAD
      error = action.payload || { message: action.payload.message };
=======
      error = action.payload || {message: action.payload.message};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      return {
        ...state,
        data: '',
        error: error,
        loading: false,
      };
    default:
      return state;
  }
}
