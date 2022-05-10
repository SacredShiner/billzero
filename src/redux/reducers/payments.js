import {
  FETCH_PAYMENTS,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
  FETCH_PAYRULE,
} from '../actions/payments';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,

  payrule: {
    minimum: 20,
    maximum: 500,
  },
};
<<<<<<< HEAD

export default function(state = INIT_STATE, action) {
  let error;

=======

export default function (state = INIT_STATE, action) {
  let error;

>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  switch (action.type) {
    case FETCH_PAYMENTS:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case FETCH_PAYMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case FETCH_PAYMENTS_FAILURE:
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
    case FETCH_PAYRULE:
      return {
        ...state,
        payrule: {
          minimum: parseInt(action.payload.minimum),
          maximum: parseInt(action.payload.maximum),
        },
      };
    default:
      return state;
  }
}
