export default function (state = null, action) {
  switch (action.type) {
    case 'TOKEN':
      return action.token;
    default:
      return state;
  }
}
