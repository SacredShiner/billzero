import {
  FETCH_VENDORS,
  FETCH_VENDORS_SUCCESS,
  FETCH_VENDORS_FAILURE,
  SET_VENDOR_CATEGORY,
} from '../actions/vendors';

const INIT_STATE = {
  items: [],
  error: null,
  loading: false,

  category: 0,
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_VENDORS:
      return {
        ...state,
        items: [],
        error: null,
        loading: true,
      };
    case FETCH_VENDORS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_VENDORS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {
        ...state,
        items: [],
        error: error,
        loading: false,
      };
    case SET_VENDOR_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
}
