import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  CHECK_USERNAME,
  CHECK_USERNAME_SUCCESS,
  CHECK_USERNAME_FAILURE,
  NEED_REDIRECT_SELECTED_USER,
  GET_SHELTERS,
} from '../actions/user';

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,
  loadingCheckUsername: false,
  uploadingImage: false,
  newUser: true,
  userStatus: '', // phone_validation                 -> next screen CID
  // phone validation pin code sent   -> next screen PIN/SMS
  needRedirect: false, // Redirect Selected User Bill If New User

  shelters: [],
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case FETCH_USER:
      return {...state, error: null, loading: true};
    case UPDATE_USER:
      return {...state, error: null, loading: true};

    case UPDATE_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
      return {...state, data: action.payload, error: null, loading: false};

    case FETCH_USER_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, data: null, error: error, loading: false};
    case UPDATE_USER_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {...state, error: error, loading: false};

    case 'UPDATE_NEW_USER':
      return {...state, newUser: false};

    case 'UPDATE_USER_STATUS':
      return {...state, userStatus: action.payload};

    case 'UPLOADING_IMAGE':
      return {...state, uploadingImage: action.payload};

    case CHECK_USERNAME:
      return {...state, loadingCheckUsername: true};
    case CHECK_USERNAME_SUCCESS:
<<<<<<< HEAD
      return { ...state, loadingCheckUsername: false };
=======
      return {...state, loadingCheckUsername: false};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    case CHECK_USERNAME_FAILURE:
      return {...state, loadingCheckUsername: false};

    case NEED_REDIRECT_SELECTED_USER:
<<<<<<< HEAD
      return { ...state, needRedirect: action.value };
=======
      return {...state, needRedirect: action.value};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    case GET_SHELTERS:
      return {
        ...state,
        shelters: action.payload,
      };
    default:
      return state;
  }
}
