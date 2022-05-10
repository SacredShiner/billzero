import API from '../../api';

export const FETCH_PAYERS = 'FETCH_PAYERS';
export const FETCH_PAYERS_SUCCESS = 'FETCH_PAYERS_SUCCESS';
export const FETCH_PAYERS_FAILURE = 'FETCH_PAYERS_FAILURE';

export function payersList() {
  return async function (dispatch) {
    dispatch({type: FETCH_PAYERS});

    try {
      const response = await API.post('transactions/payers', {});

      dispatch({
        type: FETCH_PAYERS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PAYERS_FAILURE,
        payload: error,
      });
    }
  };
}
