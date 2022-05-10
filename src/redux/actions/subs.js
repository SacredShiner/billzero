import API from '../../api';

export const FETCH_SUBS = 'FETCH_SUBS';
export const FETCH_SUBS_SUCCESS = 'FETCH_SUBS_SUCCESS';
export const FETCH_SUBS_FAILURE = 'FETCH_SUBS_FAILURE';

export function subsList() {
  return async function (dispatch) {
    dispatch({type: FETCH_SUBS});

    try {
      const response = await API.post('user/getsubscriptions', {});

      dispatch({
        type: FETCH_SUBS_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SUBS_FAILURE,
        payload: error,
      });
    }
  };
}

export function cancelSubscription(id) {
  return async function (dispatch) {
    try {
      await API.post('user/cancelsubscription', { subscriptionId: id });
    } catch (error) {
      console.log(error);
    }
  };
}
