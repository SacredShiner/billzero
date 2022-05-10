import {
  FETCH_BILLS,
  FETCH_BILLS_SUCCESS,
  FETCH_BILLS_FAILURE,
} from '../actions/bill';

const INIT_STATE = {
  items: [],
  error: null,
  loading: false,
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_BILLS:
      return {
        ...state,
        items: [],
        error: null,
        loading: true,
      };
    case FETCH_BILLS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_BILLS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {
        ...state,
        items: [],
        error: error,
        loading: false,
      };
    default:
      return state;
  }
}
