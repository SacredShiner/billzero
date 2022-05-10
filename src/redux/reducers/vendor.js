<<<<<<< HEAD
import { FETCH_VENDOR } from '../actions/vendors';
=======
import {FETCH_VENDOR} from '../actions/vendors';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

const INIT_STATE = {
  data: null,
  error: null,
  loading: false,
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case FETCH_VENDOR:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
}
