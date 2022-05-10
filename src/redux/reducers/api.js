<<<<<<< HEAD
import { ADD_API_CACHE, DEL_API_CACHE } from '../../api';
=======
import {ADD_API_CACHE, DEL_API_CACHE} from '../../api';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_API_CACHE:
      const newState = {
        ...state,
        [action.uid]: {
          timestamp: new Date().getTime(),
          payload: action.payload,
        },
      };
      return newState;
    case DEL_API_CACHE:
      const oldState = {...state};
      delete oldState[action.uid];
      return oldState;
    default:
      return state;
  }
}
