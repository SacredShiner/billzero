<<<<<<< HEAD
import { SET_RECEIPT_DATA } from '../actions/receipt';
=======
import {SET_RECEIPT_DATA} from '../actions/receipt';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

const INIT_STATE = {
  data: null,
};

<<<<<<< HEAD
export default function(state = INIT_STATE, action) {
=======
export default function (state = INIT_STATE, action) {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  switch (action.type) {
    case SET_RECEIPT_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
