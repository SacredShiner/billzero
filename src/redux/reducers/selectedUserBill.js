export default function (state = null, action) {
  switch (action.type) {
    case 'SELECT_USER_BILL':
      return action.payload ? {...action.payload} : null;
    default:
      return state;
  }
}
