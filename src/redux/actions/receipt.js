import API from '../../api';

export const SET_RECEIPT_DATA = 'SET_RECEIPT_DATA';

export function setReceiptData(body) {
  return async function (dispatch) {
    dispatch({type: SET_RECEIPT_DATA, payload: body});
  };
}

export function getKarmaOrgs() {
  return async function (dispatch) {
    try {
      const response = await API.post('admin/getkarmaorgs', {});
      return response.data.payload;
    } catch (error) {
      return [];
    }
  };
}
