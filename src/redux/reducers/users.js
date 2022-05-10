import {
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILURE,
  UPDATE_SEARCH_TEXT,
} from '../actions/user';

const INIT_STATE = {
  items: [],
  searchText: null,
  error: null,
  loading: false,

  selectedUser: null,
};

export default function (state = INIT_STATE, action) {
  let error;

  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false,
      };
    case SEARCH_USERS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return {
        ...state,
        items: [],
        error: error,
        loading: false,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };

    case 'SELECT_USER':
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
}
