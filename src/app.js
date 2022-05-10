import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AppNavigator } from './appNavigator';

import configureStore from './redux/configureStore';
import Loader from './components/Loader';

export const { store, persistor } = configureStore();

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export const platform = Platform.OS;
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);

// first: dev, second: production
export const guestToken =
  // 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ZjYwZTZiLTY3NjAtNDk4Ny04NmUxLWVlZTY0N2VmNzU2MyIsImlhdCI6MTU1OTY4NTI4NSwiaXNzIjoiYmlsbHplcm8ifQ.WHJxSGMpJ2hCWRNCWc-2U_ZSSbCit8jy-E55gadVU2U7zrMzkI2Ku_koclXnM32a4h2WjWnWKFScuwY3SvXo42_ePYbmIcv-hgTPrd-JhVKUme3IW99-CoUzLCPWhuDBqkZ1I-H59L5fVpPmJHfmTM9DcO9AO30i1OBJzUUjEqAWAgLCrbCNgWOYwjaOml-UfAeB7C60ftdxsAlu1lawyzsU6J9Qtoi5pnR-aAzEiFkV8I-VggkIwfxRF1CBxqzoRPTvgUUjILnWdB2jSN4jic5QZ6Kt4d-8R4L70hCrf91ETpWdveay1_S5V3ugVLIRL_mGDWYkf6OUj3Gpxzqplg';
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2M1MDExLTM4OTUtNGI4Ni04YzllLTc3NDVkMWI2MmUwZSIsImlhdCI6MTU2MzMxMjcwMCwiaXNzIjoiYmlsbHplcm8ifQ.O9CG9u2cMBmakwEo_pQTaMLn6auiYrBn6oZVr_1o2NZnpzmDC-Y4CrmCXkOadoPTaWgZnUHW6qpitdVwOOn2SpKliyaMUI04eQ65ybQ-g7zc7aSOFGjDhWRSumWkFeiVlf3DI1RsggZMCnccAU0MrQFBj-hGWz2iBKVdKekgkQoYxl4XDfMOSSN9lqfW9p732hz1-xFJn4N1sT3dY0rAf24Tb4QpQcta-7dffec5ySk5frIltV3djnpNNpRewi-wbK_URde4Eg0vZ5dbVqvaJAqqilWYAXTwH0SvbxN-qFt1UdHZFLCaxTFWA0z8WWIi7fMb1EUqHscwj70m_6URtA';

export const SFProFontName = 'SFProDisplay-Regular';
export const SPCompactFontName = 'SFCompactDisplay-Heavy';
export const SPProFontSemiBold = 'SFProDisplay-Semibold';
export const OCRFont = platform === 'ios' ? 'OCRAStd' : 'OCR A Std Regular';
export const FranklinGothicFontName =
  platform === 'ios' ? 'FranklinGothic-Heavy' : 'Franklin Gothic Heavy Regular';

export const headerLogoWidth = 130;
export const headerLogoHeight = 37;

export const defaultUserImage = require('./icons/default-avatar.jpg');
export const helpIconUp = require('./icons/3x-help-btn-up.png');
export const helpIconDown = require('./icons/3x-help-btn-down.png');

export const helpDeskURL = 'https://billzero.app/helpdesk/';
export const tosURL = 'https://billzero.app/tos.html';
export const ppURL = 'https://billzero.app/pp.html';

export const defaultImageDev =
  'https://billzero-dev.s3.amazonaws.com/vendors/imageDefault.jpg';
export const defaultImageProd =
  'https://billzero-prod.s3.amazonaws.com/vendors/imageDefault.jpg';

export const defaultUserAvatars = [
  require('./images/new/user-icon-default.png'),
  require('./images/new/user-icon-default-aqua1.png'),
  require('./images/new/user-icon-default-blue1.png'),
  require('./images/new/user-icon-default-gradient.png'),
  require('./images/new/user-icon-default-green1.png'),
  require('./images/new/user-icon-default-purple1.png'),
  require('./images/new/user-icon-default-yellow1.png'),
];

export const stateList = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'District Of Columbia', value: 'DC' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
];
