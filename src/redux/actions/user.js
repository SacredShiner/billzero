// import AsyncStorage from '@react-native-community/async-storage';

import API, {ADD_API_CACHE} from '../../api';
import {guestToken} from '../../app';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const SEND_PIN = 'SEND_PIN';
export const SEND_PIN_SUCCESS = 'SEND_PIN_SUCCESS';
export const SEND_PIN_FAILURE = 'SEND_PIN_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const SEARCH_USERS = 'SEARCH_USERS';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAILURE = 'SEARCH_USERS_FAILURE';

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const CHECK_USERNAME = 'CHECK_USERNAME';
export const CHECK_USERNAME_SUCCESS = 'CHECK_USERNAME_SUCCESS';
export const CHECK_USERNAME_FAILURE = 'CHECK_USERNAME_FAILURE';

export const NEED_REDIRECT_SELECTED_USER = 'NEED_REDIRECT_SELECTED_USER';

export const GET_SHELTERS = 'GET_SHELTERS';

import {BILLS_POST_SUCCESS, billsList} from './bill';

export function setUser(user) {
  return async function (dispatch) {
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: user,
    });

    dispatch(setUserToken(user.token));
  };
}

export function setUserToken(token) {
  return async function (dispatch) {
    dispatch({
      type: 'TOKEN',
      token: token,
    });
  };
}

export function fetchUser() {
  return async function (dispatch) {
    dispatch({type: FETCH_USER});

    try {
      const response = await API.post('user/get');

      if (response.data.status === 'fail') {
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: response.data.message.message,
        });
      }

      if (response.data.status === 'success') {
        dispatch(setUser(response.data.payload));
      }
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: error.message,
      });
    }
  };
}

export function updateUser(user) {
  return async function (dispatch) {
    dispatch({type: UPDATE_USER});

    try {
      const response = await API.post('user/update', {...user});
      const {data} = response;

      if (data.status === 'fail') {
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: data.message,
        });
      }

      if (data.status === 'success') {
        dispatch(setUser(data.payload));
      }
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error,
      });
    }
  };
}

export function sendPin(phone) {
  return async function (dispatch) {
    dispatch({type: SEND_PIN});

    try {
      const response = await API.post('user/sendpin', {phone});
      const {payload, status} = response.data;

      if (status === 'success') {
        dispatch({type: SEND_PIN_SUCCESS, payload: payload});

        if (payload.status === 'phone validation pin code sent') {
          dispatch({
            type: 'UPDATE_USER_STATUS',
            payload: 'phone validation pin code sent',
          });
        }
      }

      if (status === 'fail') {
        dispatch({
          type: SEND_PIN_FAILURE,
          payload: response.data.message,
        });
        dispatch(setUserToken(guestToken));
      }
    } catch (error) {
      dispatch({
        type: SEND_PIN_FAILURE,
        payload: error,
      });
      dispatch(setUserToken(guestToken));
    }
  };
}

export function validatePhone(pincode) {
  return async function (dispatch) {
    dispatch({type: SEND_PIN});

    try {
<<<<<<< HEAD
      const response = await API.post('user/validatephone', { pincode });
      const { payload, status } = response.data;
=======
      const response = await API.post('user/validatephone', {pincode});
      const {payload, status} = response.data;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

      if (status === 'success') {
        const {user} = payload;

        dispatch({type: SEND_PIN_SUCCESS, payload});
        dispatch(setUser(user));
<<<<<<< HEAD
        dispatch({ type: 'UPDATE_USER_STATUS', payload: 'verified-profile' });
        dispatch({ type: BILLS_POST_SUCCESS, payload });
=======
        dispatch({type: 'UPDATE_USER_STATUS', payload: 'verified-profile'});
        dispatch({type: BILLS_POST_SUCCESS, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      }

      if (status === 'fail') {
        dispatch({
          type: SEND_PIN_FAILURE,
          payload: response.data.message,
        });

        // dispatch(setUserToken(guestToken))
      }
    } catch (error) {
      dispatch({
        type: SEND_PIN_FAILURE,
        payload: error,
      });

      // dispatch(setUserToken(guestToken))
    }
  };
}

export function updateSearchText(userName) {
<<<<<<< HEAD
  return async function(dispatch) {
    dispatch({ type: UPDATE_SEARCH_TEXT, payload: userName });
=======
  return async function (dispatch) {
    dispatch({type: UPDATE_SEARCH_TEXT, payload: userName});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };
}

export function searchUsersByUsername(userName) {
  return async function (dispatch) {
    dispatch({type: SEARCH_USERS});

    try {
      const uid = `user/search___${userName}`;
      const response = await API.post('user/search', {limit: 20, userName});
      payload = response.data.payload;

<<<<<<< HEAD
      dispatch({ type: ADD_API_CACHE, uid, payload });
      dispatch({ type: UPDATE_SEARCH_TEXT, payload: userName });
      dispatch({ type: SEARCH_USERS_SUCCESS, payload: payload });
=======
      dispatch({type: ADD_API_CACHE, uid, payload});
      dispatch({type: UPDATE_SEARCH_TEXT, payload: userName});
      dispatch({type: SEARCH_USERS_SUCCESS, payload});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

      /*
      const uid = `user/search___${userName}`;
      let payload = getApiCache(uid, 1);

      if (payload === null) {
        const response = await API.post('user/search', { limit: 10, userName });
        payload = response.data.payload;
        dispatch({ type: ADD_API_CACHE, uid, payload})
      }

      dispatch({ type: UPDATE_SEARCH_TEXT, payload: userName });
      dispatch({ type: SEARCH_USERS_SUCCESS, payload: payload });
      */
    } catch (error) {
      dispatch({
        type: SEARCH_USERS_FAILURE,
        payload: error,
      });
    }
  };
}

export function selectUser(user) {
  return async function (dispatch) {
    dispatch({
      type: 'SELECT_USER',
      payload: user,
    });
  };
}

export function selectUserByName(username) {
<<<<<<< HEAD
  return async function(dispatch) {
=======
  return async function (dispatch) {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    try {
      const response = await API.post('user/getbyusername', {
        userName: username,
      });
<<<<<<< HEAD
      const { payload, status } = response.data;
=======
      const {payload, status} = response.data;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

      if (status === 'success') {
        dispatch({
          type: 'SELECT_USER',
          payload: payload,
        });
        dispatch(billsList(payload.id));
        return 'success';
      }

      if (status === 'fail') {
        dispatch({
          type: 'SELECT_USER',
          payload: null,
        });
        return 'fail';
      }
    } catch (error) {
      dispatch({
        type: 'SELECT_USER',
        payload: null,
      });
      return 'fail';
    }
  };
}

const uploadImageS3 = async (method, url, file) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', file.type);
    xhr.onload = () => {
      if (xhr.status !== 200) {
        reject(
          new Error(
<<<<<<< HEAD
            `Request failed. Status: ${xhr.status}. Content: ${xhr.responseText}`
          )
=======
            `Request failed. Status: ${xhr.status}. Content: ${xhr.responseText}`,
          ),
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        );
      }

      resolve(xhr.responseText);
    };
    xhr.send(file);
  });
};

const uploadImageToS3 = async (image, signS3) => {
  await uploadImageS3('PUT', signS3, {
    uri: image,
    type: 'image/jpeg',
  });

  return {image, remoteUrl: signS3.url};
};

export function uploadImage(image) {
  return async function (dispatch, getState) {
    try {
      dispatch({type: 'UPLOADING_IMAGE', payload: true});
      const formData = new FormData();
      const file = new Blob(
        [
          {
            uri: image.path,
            type: image.mime,
            name: image.filename,
          },
        ],
<<<<<<< HEAD
        { type: image.mime }
=======
        {type: image.mime},
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      );

      formData.append('test', file, file.filename);

      const response = await API.post('user/creates3presignedurl', {});

      const {presignedUrl, imageUrl} = response.data.payload;

      await uploadImageToS3(image.path, presignedUrl);

      const oldUser = getState().user.data;

      dispatch(
        updateUser({
          profileImage: imageUrl,
          userName: oldUser.userName,
          firstName: oldUser.firstName,
          lastName: oldUser.lastName,
<<<<<<< HEAD
        })
      );
      dispatch({ type: 'UPLOADING_IMAGE', payload: false });
    } catch (error) {
      console.log(
        'error error error error error error error error error error error '
      );
      console.log(error);
      console.log(
        'error error error error error error error error error error error '
=======
        }),
      );
      dispatch({type: 'UPLOADING_IMAGE', payload: false});
    } catch (error) {
      console.log(
        'error error error error error error error error error error error ',
      );
      console.log(error);
      console.log(
        'error error error error error error error error error error error ',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      );
      // dispatch({
      //   type: FETCH_BILLS_FAILURE,
      //   payload: error
      // });
    }
  };
}

export function checkUsername(userName, cb) {
  return async function (dispatch) {
    dispatch({type: CHECK_USERNAME});

    try {
<<<<<<< HEAD
      const response = await API.post('user/checkusername', { userName });
      cb(response.data.payload.status);
      dispatch({ type: CHECK_USERNAME_SUCCESS });
=======
      const response = await API.post('user/checkusername', {userName});
      cb(response.data.payload.status);
      dispatch({type: CHECK_USERNAME_SUCCESS});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    } catch (error) {
      dispatch({
        type: CHECK_USERNAME_FAILURE,
        payload: error,
      });
    }
  };
}

export function setNeedRedirect(value) {
  return async function (dispatch) {
    dispatch({type: NEED_REDIRECT_SELECTED_USER, value: value});
  };
}

export function SayThx(vendorId, username) {
  return async function (dispatch) {
    try {
      const response = await API.post('user/notifyuser', {
        id: vendorId,
        message: `BillZero @${username} Says Thanks!`,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function sendHelp(subject, message) {
  return async function (dispatch) {
    try {
      const response = await API.post('user/addmobilesupportticket', {
        subject,
        message,
      });
      console.log('----sending help');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}

export function sendInvite(phones, text = '') {
  return async function (dispatch) {
    try {
      if (text !== '') {
        API.post('user/sendinvite', { phones, text });
      } else {
        API.post('user/sendinvite', { phones });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getShelters() {
  return async function (dispatch) {
    try {
      const response = await API.post('admin/getshelters', {});
      dispatch({
        type: GET_SHELTERS,
        payload: response.data.payload.shelters,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
