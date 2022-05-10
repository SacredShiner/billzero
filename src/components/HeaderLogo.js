import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-elements';

import {
  platform,
  screenWidth,
  headerLogoHeight,
  headerLogoWidth,
} from '../app';

export default function HeaderLogo(props) {
  const { onPress } = props;

  let spacing = 125;

  if (props.headerLeft) {
    spacing = 65;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image
        source={require('../icons/3x-main-logo.png')}
        containerStyle={{
          width: headerLogoWidth,
          height: headerLogoHeight,
          marginLeft: platform === 'ios' ? 0 : screenWidth / 2 - spacing,
        }}
      />
    </TouchableWithoutFeedback>
  );
}
