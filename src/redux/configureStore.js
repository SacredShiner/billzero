import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user', 'users', 'token', 'api', 'sms'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    {
      // First: dev, second: production
      // Init value: Guest Token
      // token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0ZjYwZTZiLTY3NjAtNDk4Ny04NmUxLWVlZTY0N2VmNzU2MyIsImlhdCI6MTU1OTY4NTI4NSwiaXNzIjoiYmlsbHplcm8ifQ.WHJxSGMpJ2hCWRNCWc-2U_ZSSbCit8jy-E55gadVU2U7zrMzkI2Ku_koclXnM32a4h2WjWnWKFScuwY3SvXo42_ePYbmIcv-hgTPrd-JhVKUme3IW99-CoUzLCPWhuDBqkZ1I-H59L5fVpPmJHfmTM9DcO9AO30i1OBJzUUjEqAWAgLCrbCNgWOYwjaOml-UfAeB7C60ftdxsAlu1lawyzsU6J9Qtoi5pnR-aAzEiFkV8I-VggkIwfxRF1CBxqzoRPTvgUUjILnWdB2jSN4jic5QZ6Kt4d-8R4L70hCrf91ETpWdveay1_S5V3ugVLIRL_mGDWYkf6OUj3Gpxzqplg"
      token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzN2M1MDExLTM4OTUtNGI4Ni04YzllLTc3NDVkMWI2MmUwZSIsImlhdCI6MTU2MzMxMjcwMCwiaXNzIjoiYmlsbHplcm8ifQ.O9CG9u2cMBmakwEo_pQTaMLn6auiYrBn6oZVr_1o2NZnpzmDC-Y4CrmCXkOadoPTaWgZnUHW6qpitdVwOOn2SpKliyaMUI04eQ65ybQ-g7zc7aSOFGjDhWRSumWkFeiVlf3DI1RsggZMCnccAU0MrQFBj-hGWz2iBKVdKekgkQoYxl4XDfMOSSN9lqfW9p732hz1-xFJn4N1sT3dY0rAf24Tb4QpQcta-7dffec5ySk5frIltV3djnpNNpRewi-wbK_URde4Eg0vZ5dbVqvaJAqqilWYAXTwH0SvbxN-qFt1UdHZFLCaxTFWA0z8WWIi7fMb1EUqHscwj70m_6URtA',
    },
    composeWithDevTools(compose(applyMiddleware(ReduxThunk)))
  );
  let persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
