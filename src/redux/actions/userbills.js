import API from '../../api';

export const FETCH_USER_BILLS = 'FETCH_USER_BILLS';
export const FETCH_USER_BILLS_SUCCESS = 'FETCH_USER_BILLS_SUCCESS';
export const FETCH_USER_BILLS_FAILURE = 'FETCH_USER_BILLS_FAILURE';

export const UPDATE_USER_BILLS_STATUS = 'UPDATE_USER_BILLS_STATUS';
export const REMOVE_USER_BILLS_STATUS = 'REMOVE_USER_BILLS_STATUS';

export function getUserBills(id) {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: FETCH_USER_BILLS });
=======
  return async function (dispatch) {
    dispatch({type: FETCH_USER_BILLS});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    try {
      const response = await API.post('bills/list', { id });
      dispatch({
        type: FETCH_USER_BILLS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_USER_BILLS_FAILURE,
        payload: error,
      });
    }
  };
}

export function getMyBills() {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: FETCH_USER_BILLS });
=======
  return async function (dispatch) {
    dispatch({type: FETCH_USER_BILLS});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    try {
      const response = await API.post('bills/getmybills', {});
      dispatch({
        type: FETCH_USER_BILLS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_USER_BILLS_FAILURE,
        payload: error,
      });
    }
  };
}

export function refreshBill(billId) {
  return async function (dispatch) {
    try {
      dispatch({ type: FETCH_USER_BILLS });
      const response = await API.post('bills/refresh', { billId });
      dispatch(getMyBills());
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateBillStatus(payload) {
  return async function (dispatch) {
    dispatch({
      type: UPDATE_USER_BILLS_STATUS,
      payload,
    });
  };
}

export function removeBillStatus() {
  return async function (dispatch) {
    dispatch({
      type: REMOVE_USER_BILLS_STATUS,
    });
  };
}
