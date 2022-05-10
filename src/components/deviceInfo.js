import { Dimensions, Platform } from 'react-native';

export function isIPhoneX() {
  const dim = Dimensions.get('window');

  return Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXRSize(dim));
}

function isIPhoneXSize(dim) {
  return dim.height === 812 || dim.width === 812;
}

function isIPhoneXRSize(dim) {
  return dim.height === 896 || dim.width === 896;
}

export function isBigScreen() {
  const dim = Dimensions.get('window');
  return dim.width > 800 || dim.height > 800;
}
