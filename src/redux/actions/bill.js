import API from '../../api';
import { setUser } from './user';

export const BILLS_POST = 'BILLS_POST';
export const BILLS_POST_SUCCESS = 'BILLS_POST_SUCCESS';
export const BILLS_POST_FAILURE = 'BILLS_POST_FAILURE';
export const BILLS_POST_ERROR_REMOVE = 'BILLS_POST_ERROR_REMOVE';

export const BILLS_PAY = 'BILLS_PAY';
export const BILLS_PAY_SUCCESS = 'BILLS_PAY_SUCCESS';
export const BILLS_PAY_FAILURE = 'BILLS_PAY_FAILURE';

export const FETCH_BILLS = 'FETCH_BILLS';
export const FETCH_BILLS_SUCCESS = 'FETCH_BILLS_SUCCESS';
export const FETCH_BILLS_FAILURE = 'FETCH_BILLS_FAILURE';

export const BILLS_UPDATE = 'BILLS_UPDATE';
export const BILLS_UPDATE_SUCCESS = 'BILLS_UPDATE_SUCCESS';
export const BILLS_UPDATE_FAILURE = 'BILLS_UPDATE_FAILURE';

export function billsPostErrorRemove() {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: BILLS_POST_ERROR_REMOVE });
=======
  return async function (dispatch) {
    dispatch({type: BILLS_POST_ERROR_REMOVE});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };
}

export function billsPost(body) {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: BILLS_POST });
=======
  return async function (dispatch) {
    dispatch({type: BILLS_POST});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    // body = {
    //   "vendorId":"f39bc1ee-0433-4377-a284-a42d49a1c14f",
    //   "login": "jdoe@successful.ii",
    //   "password": "HeLl0o1!"
    // }

    // const mfa_body = {
    //   vendorId: body.vendorId,
    //   login: 'choice',
    //   password: '123456',
    // };

    try {
      const response = await API.post('bills/post', body);
      const { payload, status, message } = response.data;

      console.log('-- bill post response: ', response);

      if (status === 'success') {
        dispatch({ type: BILLS_POST_SUCCESS, payload });

        if (
          payload.status === 'waiting' &&
          payload.statusData === 'phone_validation'
        ) {
          dispatch(setUser(payload.user));
          dispatch({ type: 'UPDATE_NEW_USER' });
          dispatch({ type: 'UPDATE_USER_STATUS', payload: 'phone_validation' });
        }
      }

      if (status === 'fail') {
        dispatch({
          type: BILLS_POST_FAILURE,
          payload: message,
        });
      }
    } catch (error) {
      dispatch({
        type: BILLS_POST_FAILURE,
        payload: error,
      });
    }
  };
}

export function billUpdate(body) {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: BILLS_UPDATE });
=======
  return async function (dispatch) {
    dispatch({type: BILLS_UPDATE});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    try {
      const response = await API.post('bills/update', body);
      const { payload, status } = response.data;

      console.log('--- bill update ---');
      console.log(response.data);

      if (status === 'success') {
        dispatch({ type: BILLS_UPDATE_SUCCESS, payload });
      }

      if (status === 'fail') {
        dispatch({ type: BILLS_UPDATE_FAILURE });
      }
    } catch (error) {
      dispatch({ type: BILLS_UPDATE_FAILURE });
      // dispatch({
      //   type: BILLS_POST_FAILURE,
      //   payload: error
      // });
    }
  };
}

export function billUpdateErrorRemove() {
  return async function (dispatch) {
    dispatch({type: 'BILLS_UPDATE_ERROR_REMOVE'});
  };
}

export function billsPay(billId) {
  return async function (dispatch) {
    dispatch({type: BILLS_PAY});

    // {
    //   "billId":"f5ba3901-df2e-4297-b9eb-69ead9e0203b"
    // }

    try {
      const response = await API.post('bills/pay', {billId});

      console.log('--- bills pay response ---');
      console.log(response.data);
      console.log('--- bills pay response ---');

      const {payload, status} = response.data;

      if (status === 'success') {
        dispatch({type: BILLS_PAY_SUCCESS, payload});

        if (
          payload.status === 'waiting' &&
          payload.statusData === 'phone_validation'
        ) {
          dispatch(setUser(payload.user));
          dispatch({type: 'UPDATE_NEW_USER'});
          dispatch({type: 'UPDATE_USER_STATUS', payload: 'phone_validation'});
        }
      }
    } catch (error) {
      console.log('--- bills pay error ---');
      console.log(error);
      console.log('--- bills pay error ---');
      dispatch({
        type: BILLS_PAY_FAILURE,
        payload: error,
      });
    }
  };
}

export function billsList(id) {
  return async function (dispatch) {
    dispatch({type: FETCH_BILLS});

    try {
      const response = await API.post('bills/list', {id});
      dispatch({
        type: FETCH_BILLS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_BILLS_FAILURE,
        payload: error,
      });
    }
  };
}

export function billsListByUsername(userName) {
  return async function (dispatch) {
    dispatch({type: FETCH_BILLS});

    try {
      const response = await API.post('bills/list', { userName });
      dispatch({
        type: FETCH_BILLS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_BILLS_FAILURE,
        payload: error,
      });
    }
  };
}

export function selectUserBill(payload) {
  return async function (dispatch) {
    dispatch({type: 'SELECT_USER_BILL', payload: payload});
  };
}

export function selectUserBillById(userName, id) {
  return async function (dispatch) {
    try {
      const response = await API.post('bills/getbill', {userName, id});
      const {payload, status} = response.data;
      if (status == 'success') {
        dispatch({type: 'SELECT_USER_BILL', payload: payload});
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function selectUserPaymentMethod(payload) {
  return async function (dispatch) {
    dispatch({type: 'SELECT_USER_PAYMENT_METHOD', payload: payload});
  };
}

export function billsCharge(payload) {
<<<<<<< HEAD
  return async function(dispatch) {
=======
  return async function (dispatch) {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    // return 'success';

    try {
      const response = await API.post('bills/charge', payload);
      return {
        status: response.data.status,
        method: response.data.payload.method,
      };
    } catch (error) {
      console.log('----errr response: ', error.response.data);
      return 'fail';
    }
  };
}

export function calculateFee(body) {
<<<<<<< HEAD
  return async function(dispatch) {
=======
  return async function (dispatch) {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    try {
      // const response = await API.post('bills/calculatefee', body);
      const response = await API.post('bills/getfee', body);

      const {payload, status} = response.data;

      if (status == 'fail') {
        return 'fail';
      }

      return payload;
    } catch (error) {
      return 'fail';
    }
  };
}

export function vendorSave(vendorInfo) {
  return async function (dispatch) {
    dispatch({type: 'VENDOR_SAVE', payload: vendorInfo});
  };
}

export function getDL(id) {
  return async function (dispatch) {
    try {
      const response = await API.post('bills/getdeeplinkbill', {id});
      const {payload, status} = response.data;
      if (status == 'fail') {
        return null;
      }
      return payload;
    } catch {
      return null;
    }
  };
}
