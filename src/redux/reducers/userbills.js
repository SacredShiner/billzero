import {
  FETCH_USER_BILLS,
  FETCH_USER_BILLS_SUCCESS,
  FETCH_USER_BILLS_FAILURE,
  UPDATE_USER_BILLS_STATUS,
  REMOVE_USER_BILLS_STATUS,
} from '../actions/userbills';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,

  status: {},
};

export default function (state = INIT_STATE, action) {
  let error;
  let new_status;

  switch (action.type) {
    case FETCH_USER_BILLS:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case FETCH_USER_BILLS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_USER_BILLS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };
    case UPDATE_USER_BILLS_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case REMOVE_USER_BILLS_STATUS:
      return {
        ...state,
        status: {},
      };
    default:
      return state;
  }
}
