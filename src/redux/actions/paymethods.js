import API from '../../api';

export const FETCH_PAYMETHODS = 'FETCH_PAYMETHODS';
export const FETCH_PAYMETHODS_SUCCESS = 'FETCH_PAYMETHODS_SUCCESS';
export const FETCH_PAYMETHODS_FAILURE = 'FETCH_PAYMETHODS_FAILURE';

export const ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD';
export const ADD_PAYMENT_METHOD_SUCCESS = 'ADD_PAYMENT_METHOD_SUCCESS';
export const ADD_PAYMENT_METHOD_FAILURE = 'ADD_PAYMENT_METHOD_FAILURE';

export function paymethodsList() {
  return async function (dispatch) {
    dispatch({type: FETCH_PAYMETHODS});

    try {
      const response = await API.post('user/getpaymentmethods', {});

      dispatch({
        type: FETCH_PAYMETHODS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PAYMETHODS_FAILURE,
        payload: error,
      });
    }
  };
}

export function addPaymentMethod(token) {
  return async function (dispatch) {
    dispatch({type: ADD_PAYMENT_METHOD});

    try {
      const response = await API.post('user/addpaymentmethod', {
        paymentToken: token,
      });

      dispatch({
        type: ADD_PAYMENT_METHOD_SUCCESS,
        payload: response.data.payload,
      });

      if (response.data.status == 'fail') return 'fail';

      return response.data.payload;
    } catch (error) {
      dispatch({
        type: ADD_PAYMENT_METHOD_FAILURE,
        payload: error,
      });

      return 'fail';
    }
  };
}

export function deletePaymentMethod(cardId) {
  return async function (dispatch) {
    try {
      const response = await API.post('user/deletepaymentmethod', {
        paymentSource: cardId,
      });

      if (response.data.status == 'fail') return 'fail';

      return response.data.payload;
    } catch (error) {
      return 'fail';
    }
  };
}
