import {
  FETCH_PAYMETHODS,
  FETCH_PAYMETHODS_SUCCESS,
  FETCH_PAYMETHODS_FAILURE,
  ADD_PAYMENT_METHOD,
  ADD_PAYMENT_METHOD_SUCCESS,
  ADD_PAYMENT_METHOD_FAILURE,
} from '../actions/paymethods';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,
};
<<<<<<< HEAD

export default function(state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_PAYMETHODS:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case FETCH_PAYMETHODS_SUCCESS:
      return {
        ...state,
        data: action.payload.paymentMethods,
        error: null,
        loading: false,
      };
    case FETCH_PAYMETHODS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };

=======

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_PAYMETHODS:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case FETCH_PAYMETHODS_SUCCESS:
      return {
        ...state,
        data: action.payload.paymentMethods,
        error: null,
        loading: false,
      };
    case FETCH_PAYMETHODS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {
        ...state,
        data: null,
        error: error,
        loading: false,
      };

>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    case ADD_PAYMENT_METHOD:
      return {
        ...state,
        data: null,
        error: null,
        loading: true,
      };
    case ADD_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        data: action.payload.paymentMethods,
        error: null,
        loading: false,
      };
    case ADD_PAYMENT_METHOD_FAILURE:
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
