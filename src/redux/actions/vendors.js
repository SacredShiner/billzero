<<<<<<< HEAD
import API, { getApiCache, ADD_API_CACHE } from '../../api';
=======
import API, {getApiCache, ADD_API_CACHE} from '../../api';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

export const FETCH_VENDORS = 'FETCH_VENDORS';
export const FETCH_VENDORS_SUCCESS = 'FETCH_VENDORS_SUCCESS';
export const FETCH_VENDORS_FAILURE = 'FETCH_VENDORS_FAILURE';

export const FETCH_VENDOR = 'FETCH_VENDOR';

export const SET_VENDOR_CATEGORY = 'SET_VENDOR_CATEGORY';

const limit = 100;

export function setVendorCategory(category) {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: SET_VENDOR_CATEGORY, category });
=======
  return async function (dispatch) {
    dispatch({type: SET_VENDOR_CATEGORY, category});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };
}

export function fetchCommonVendors() {
  return async function (dispatch) {
    dispatch({type: FETCH_VENDORS});

    try {
      const uid = 'vendors/getcommonvendors';
      let payload = getApiCache(uid);

      if (payload === null) {
        const response = await API.post('vendors/getcommonvendors', {
          limit: limit,
        });
        payload = response.data.payload;
<<<<<<< HEAD
        dispatch({ type: ADD_API_CACHE, uid, payload });
=======
        dispatch({type: ADD_API_CACHE, uid, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      }

      dispatch({
        type: FETCH_VENDORS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_VENDORS_FAILURE,
        payload: error,
      });
    }
  };
}

export function fetchVendorsByFinoType(type) {
  return async function (dispatch) {
    dispatch({type: FETCH_VENDORS});

    try {
      const uid = `vendors/filterbytype/${type}`;
      let payload = getApiCache(uid);

      if (payload === null) {
        const response = await API.post('vendors/filterbytype', {
          limit: limit,
          type,
        });
        payload = response.data.payload;
<<<<<<< HEAD
        dispatch({ type: ADD_API_CACHE, uid, payload });
=======
        dispatch({type: ADD_API_CACHE, uid, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      }

      dispatch({
        type: FETCH_VENDORS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_VENDORS_FAILURE,
        payload: error,
      });
    }
  };
}

export function fetchVendorsByType(type) {
  return async function (dispatch) {
    dispatch({type: FETCH_VENDORS});

    try {
      const uid = `vendors/filterbybztype/${type}`;
      let payload = getApiCache(uid);

      if (payload === null) {
        const response = await API.post('vendors/filterbybztype', {
          limit: limit,
          type,
        });
        payload = response.data.payload;
<<<<<<< HEAD
        dispatch({ type: ADD_API_CACHE, uid, payload });
=======
        dispatch({type: ADD_API_CACHE, uid, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      }

      dispatch({
        type: FETCH_VENDORS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_VENDORS_FAILURE,
        payload: error,
      });
    }
  };
}

export function fetchVendorsByName(name) {
  return async function (dispatch) {
    dispatch({type: FETCH_VENDORS});

    try {
      const uid = `vendors/search___${name}`;
      let payload = getApiCache(uid, 1);

      if (payload === null) {
<<<<<<< HEAD
        const response = await API.post('vendors/search', {
          limit: limit,
          name,
        });
        payload = response.data.payload;
        dispatch({ type: ADD_API_CACHE, uid, payload });
=======
        const response = await API.post('vendors/search', {limit: limit, name});
        payload = response.data.payload;
        dispatch({type: ADD_API_CACHE, uid, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      }

      dispatch({
        type: FETCH_VENDORS_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: FETCH_VENDORS_FAILURE,
        payload: error,
      });
    }
  };
}

export function selectVendor(vendor) {
  return async function (dispatch) {
    dispatch({
      type: FETCH_VENDOR,
      payload: {
        ...vendor,
      },
    });
  };
}

// export function selectVendor(vendor) {
//   return async function(dispatch) {
//     dispatch({
//       type: FETCH_VENDOR,
//       payload: vendor
//     });
//   };
// }

export function getVendor(id) {
<<<<<<< HEAD
  return async function(dispatch) {
    const response = await API.post('vendors/get', { id });
    const { payload, status } = response.data;
=======
  return async function (dispatch) {
    const response = await API.post('vendors/get', {id});
    const {payload, status} = response.data;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (status === 'fail') {
      return null;
    }
    return payload;
  };
}
