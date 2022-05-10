import {combineReducers} from 'redux';

import token from './token';
import user from './user';
import users from './users';
import vendor from './vendor';
import vendors from './vendors';
import bills from './bills';
import sms from './sms';
import selectedUser from './selectedUser';
import selectedUserBill from './selectedUserBill';
import selectedUserBills from './selectedUserBills';
import selectedUserPaymentMethod from './selectedUserPaymentMethod';
import api from './api';

import userbills from './userbills';
import subs from './subs';
import payments from './payments';
import paymethods from './paymethods';
import payers from './payers';

import receipt from './receipt';

import legal from './legal';

const appReducer = combineReducers({
  api,
  token,
  user,
  users,
  vendor,
  vendors,
  bills,
  sms,
  selectedUser,
  selectedUserBill,
  selectedUserBills,
  selectedUserPaymentMethod,
  userbills,
  subs,
  payments,
  paymethods,
  payers,
  receipt,
  legal,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
