import API from '../../api';

export const FETCH_PAYMENTS = 'FETCH_PAYMENTS';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAILURE = 'FETCH_PAYMENTS_FAILURE';

export const FETCH_PAYRULE = 'FETCH_PAYRULE';

export function paymentsList() {
  return async function (dispatch) {
    dispatch({type: FETCH_PAYMENTS});

    try {
      const response = await API.post('user/getpayments', {});

      dispatch({
        type: FETCH_PAYMENTS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PAYMENTS_FAILURE,
        payload: error,
      });
    }
  };
}

export function getPayRule() {
  return async function (dispatch) {
    try {
      const response = await API.post('admin/getpayrulesettings', {});
      dispatch({
        type: FETCH_PAYRULE,
        payload: response.data.payload,
      });
    } catch (error) {}
  };
}
