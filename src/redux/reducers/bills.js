import {
  BILLS_POST,
  BILLS_POST_SUCCESS,
  BILLS_POST_FAILURE,
  BILLS_POST_ERROR_REMOVE,
  BILLS_PAY,
  BILLS_PAY_SUCCESS,
  BILLS_PAY_FAILURE,
  BILLS_UPDATE,
  BILLS_UPDATE_SUCCESS,
  BILLS_UPDATE_FAILURE,
} from '../actions/bill';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,

  vendorInfo: null,
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case BILLS_POST:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case BILLS_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case BILLS_POST_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };
    case BILLS_POST_ERROR_REMOVE:
      return {
        ...state,
        error: null,
      };

    case BILLS_PAY:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case BILLS_PAY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case BILLS_PAY_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };

    case BILLS_UPDATE:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case BILLS_UPDATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case BILLS_UPDATE_FAILURE:
      return {
        ...state,
        data: {
          status: 'fail',
        },
        loading: false,
        error: 'update_error',
      };
    case 'BILLS_UPDATE_ERROR_REMOVE':
      return {
        ...state,
        error: null,
      };

    case 'VENDOR_SAVE':
      return {
        ...state,
        vendorInfo: action.payload,
      };
    default:
      return state;
  }
}
