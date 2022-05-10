import API from '../../api';

export const FETCH_LEGAL = 'FETCH_LEGAL';
export const FETCH_LEGAL_SUCCESS = 'FETCH_LEGAL_SUCCESS';
export const FETCH_LEGAL_FAILURE = 'FETCH_LEGAL_FAILURE';

export function getPP() {
  return async function (dispatch) {
    dispatch({type: FETCH_LEGAL});

    try {
      const response = await API.post('user/pp', {});

      dispatch({
        type: FETCH_LEGAL_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_LEGAL_FAILURE,
        payload: error,
      });
    }
  };
}

export function getTOS() {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: FETCH_LEGAL });
=======
  return async function (dispatch) {
    dispatch({type: FETCH_LEGAL});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    try {
      const response = await API.post('user/tos', {});

      dispatch({
        type: FETCH_LEGAL_SUCCESS,
        payload: response.data.payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_LEGAL_FAILURE,
        payload: error,
      });
    }
  };
}
