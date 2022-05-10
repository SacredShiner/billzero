import React, { Component } from 'react';
import { Image } from 'react-native-elements';
// import CachedImage from 'react-native-image-cache-wrapper';
import { TouchableOpacity } from 'react-native';

export default class CachedAvatar extends Component {
  render() {
    const { size, source, onPress } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          source={source}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
          PlaceholderContent={
            <Image
              source={require('../icons/loading.gif')}
              style={{
                width: size,
                height: size,
              }}
            />
          }
        />
      </TouchableOpacity>
    );
  }
}
