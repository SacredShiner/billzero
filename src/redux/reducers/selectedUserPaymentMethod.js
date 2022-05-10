const INIT_STATE = {
  id: 0,
  brand: '',
  last4: '',
  default: false,
  value: 0,
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'SELECT_USER_PAYMENT_METHOD':
      // return action.payload ? { ...action.payload } : null;
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
