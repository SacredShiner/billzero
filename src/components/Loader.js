import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Avatar } from 'react-native-elements';

import moment from 'moment-timezone';

import { defaultUserAvatars, defaultUserImage } from '../app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderStyle: {
    backgroundColor: 'transparent',
  },
});

export default function Loader(props) {
  const { size } = props;

  return (
    <View style={styles.container}>
      <Image
        source={require('../icons/loading.gif')}
        containerStyle={{
          width: size,
          height: size,
        }}
        placeholderStyle={styles.placeholderStyle}
      />
    </View>
  );
}

export function Loading(props) {
  const { size } = props;

  return (
    <Image
      source={require('../icons/loading.gif')}
      containerStyle={{
        width: size,
        height: size,
        backgroundColor: 'transparent',
      }}
      placeholderStyle={styles.placeholderStyle}
      style={{
        backgroundColor: 'transparent',
      }}
    />
  );
}

export class ImageWithLoader extends Component {
  render() {
<<<<<<< HEAD
    const {
      width,
      height,
      onPress,
      disableLoading,
      rounded,
      source,
      refresh,
    } = this.props;
=======
    const {width, height, onPress, disableLoading, rounded, source, refresh} =
      this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    let imageSource = source;
    if (imageSource.uri !== undefined) {
      if (imageSource.uri != null) {
        if (refresh !== undefined) {
          imageSource.uri = `${imageSource.uri}?random=${moment().format(
<<<<<<< HEAD
            'YYYYMMDDHHmm'
=======
            'YYYYMMDDHHmm',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          )}`;
        }
      } else {
        imageSource = defaultUserImage;
      }
    }

    if (onPress === undefined) {
      return (
        <Image
          source={imageSource}
          containerStyle={{
            width: width,
            height: height,
            borderRadius: rounded ? width / 2 : 0,
          }}
          PlaceholderContent={
            disableLoading !== undefined ? null : <Loading size={height} />
          }
          placeholderStyle={styles.placeholderStyle}
        />
      );
    }

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.2}>
        <Image
          source={imageSource}
          containerStyle={{
            width: width,
            height: height,
            borderRadius: rounded ? width / 2 : 0,
          }}
          PlaceholderContent={
            disableLoading !== undefined ? null : <Loading size={height} />
          }
          placeholderStyle={styles.placeholderStyle}
        />
      </TouchableOpacity>
    );
  }
}

export class AvatarWithLoader extends Component {
  state = {
    source: null,
  };

  UNSAFE_componentWillMount() {
    const { source, refresh } = this.props;
    let avatarSource = source;
    if (avatarSource.uri !== undefined) {
      if (avatarSource.uri !== null && avatarSource.uri !== 'undefined') {
        if (refresh !== undefined) {
          avatarSource.uri = `${avatarSource.uri}?random=${moment().format(
<<<<<<< HEAD
            'YYYYMMDDHHmm'
=======
            'YYYYMMDDHHmm',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          )}`;
        }
      } else {
        avatarSource =
          defaultUserAvatars[
            Math.floor(Math.random() * defaultUserAvatars.length)
          ];
      }
    }

    this.setState({ source: avatarSource });
  }

  render() {
    const { size, onPress, disableLoading } = this.props;

    if (onPress === undefined) {
      return (
        <Avatar
          rounded
          source={this.state.source}
          size={size}
          renderPlaceholderContent={
            disableLoading !== undefined ? null : <Loading size={size} />
          }
          placeholderStyle={styles.placeholderStyle}
        />
      );
    }

    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.2}>
        <Avatar
          rounded
          source={this.state.source}
          size={size}
          renderPlaceholderContent={
            disableLoading !== undefined ? null : <Loading size={size} />
          }
          placeholderStyle={styles.placeholderStyle}
        />
      </TouchableOpacity>
    );
  }
}
