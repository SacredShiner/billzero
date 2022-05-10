<<<<<<< HEAD
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { Text, Image } from 'react-native-elements';

import { SPCompactFontName } from '../app';
import { AvatarWithLoader } from '../components/Loader';
=======
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import {Text, Image} from 'react-native-elements';

import {SPCompactFontName} from '../app';
import {AvatarWithLoader} from '../components/Loader';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import moment from 'moment-timezone';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    //backgroundColor: 'red'
  },
  username: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: SPCompactFontName,
    fontSize: 23,
    color: '#0c74dc',
    letterSpacing: -0.5,
    //backgroundColor: 'black'
  },
});

class UserAvatarNameLocation extends Component {
  state = {
    imageURI: '',
  };

  UNSAFE_componentWillMount() {
    const { profileImage } = this.props.user;
    const { refresh } = this.props;

    let uri = null;

    if (profileImage) {
      if (refresh === undefined) {
        uri = profileImage;
      } else {
        uri = `${profileImage}?random=${moment().format('YYYYMMDDHHmm')}`;
      }
    }

    this.setState({ imageURI: uri });
  }

  render() {
    const { userName } = this.props.user;
    // const city = address.city ? address.city.toUpperCase() : '';
    // const state = address.state ? address.state.toUpperCase() : '';

    const screenHeight = Dimensions.get('window').height;
    let size = 120;
    if (Platform.OS === 'ios') {
      if (screenHeight < 700) {
        size = 80;
      } else if (screenHeight < 750) {
        size = 90;
      }
    } else {
      if (screenHeight < 590) {
        size = 70;
      } else if (screenHeight < 650) {
        size = 80;
      } else if (screenHeight < 740) {
        size = 90;
      }
    }

    return (
      <>
        <View style={styles.main}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -15,
              backgroundColor: 'white',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {this.props.user.veteran === 'true' && (
              <Image
                source={require('../images/new/PROFILE_BADGE-VA-VETERAN.png')}
                style={{
                  width: 95,
                  height: 100,
                  color: 'white',
                }}
              />
            )}
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <AvatarWithLoader
              rounded
              size={size}
              source={{
                uri: this.state.imageURI,
              }}
              onPress={this.props.onAvatarClicked}
            />
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '100',
                top: -113,
                //marginRight: -1.4,
                fontFamily: SPCompactFontName,
                fontSize: 18,
                color: '#ffffff',
                letterSpacing: 0,
                height: 22,
                //textDecorationLine: 'underline'
<<<<<<< HEAD
              }}
            ></Text>
          </View>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
=======
              }}></Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {this.props.user.homeless === 'true' && (
              <Image
                source={require('../images/new/PROFILE_BADGE-HOMELESS.png')}
                style={{
                  width: 133,
                  height: 58,
                }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            marginTop: -20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 1.5,
              marginRight: -1.4,
              fontFamily: SPCompactFontName,
              fontSize: 27,
              color: '#0c74dc',
              letterSpacing: -2,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            @
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 1.2,
              fontFamily: SPCompactFontName,
              fontSize: 26.5,
              color: '#0c74dc',
              textDecorationLine: 'underline',
              letterSpacing: -1.7,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {userName}
          </Text>
        </View>
      </>
    );
  }
}

export default UserAvatarNameLocation;
