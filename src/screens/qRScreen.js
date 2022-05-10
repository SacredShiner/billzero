import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { connect } from 'react-redux';

import { RNCamera } from 'react-native-camera';

import { updateSearchText } from '../redux/actions/user';
import { ImageWithLoader } from '../components/Loader';
import { SFProFontName } from '../app';

import { selectUserByName } from '../redux/actions/user';

import QRCode from 'react-native-qrcode-svg';

class QRScreen extends Component {
  state = {
    barcode: '',
    color: '#03e5f9',
    text: 'searching',
    stamp: require('../icons/3x-qr-stamp-blue-blank.png'),
  };

  barcodeRecognized = ({ barcodes }) => {
    console.log(barcodes);
    barcodes.forEach((barcode) => console.warn(barcode.data));
  };

  onBarCodeRead = async (e) => {
    if (e.data && this.state.barcode === '') {
      const barcode = e.data.replace('@', '');
      this.setState({
        barcode,
        color: '#20f903',
        text: 'found',
        stamp: require('../icons/3x-qr-stamp-green-blank.png'),
      });

      this.props.updateSearchText(barcode);
      const status = await this.props.selectUserByName(barcode);
      if (status === 'success') {
        this.props.navigation.navigate('SelectedUser');
      } else {
        this.props.navigation.navigate('Users');
      }
    }
  };

  render() {
    let qrValue = '@ceo';
    const { user } = this.props;
    if (user) {
      const { userName } = user;
      if (userName && userName !== 'guest') {
        qrValue = `@${userName}`;
      }
    }
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onBarCodeRead={this.onBarCodeRead}
          captureAudio={false}
        />

        <View
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            width: '100%',
            height: '100%',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            <ImageWithLoader
              source={require('../icons/3x-qr-logo.png')}
              width={414}
              height={108}
              disableLoading
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: -110,
            }}
          >
            <ImageBackground
              source={this.state.stamp}
              style={{
                width: 160,
                height: 160,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={{ opacity: 0.5 }}>
                <QRCode value={qrValue} size={130} />
              </View>
            </ImageBackground>
            <Text
              style={{
                marginTop: 20,
                color: this.state.color,
                fontSize: 30,
                fontFamily: SFProFontName,
                fontWeight: 'bold',
              }}
            >
              {this.state.text}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              alignItems: 'center',
              bottom: 30,
            }}
          >
            <ImageWithLoader
              source={require('../icons/3x-qr-close-btn.png')}
              width={88}
              height={86}
              disableLoading
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <RNCamera
      //     style={{
      //       flex: 1,
      //       width: '100%',
      //     }}
      //     // onGoogleVisionBarcodesDetected={this.barcodeRecognized}
      //     onBarCodeRead={this.onBarCodeRead}>
      //     <View style={{flex: 1}}>
      //       <View
      //         style={{
      //           marginTop: 30,
      //           alignItems: 'center',
      //           alignSelf: 'center',
      //         }}>
      //         <ImageWithLoader
      //           source={require('../icons/3x-qr-logo.png')}
      //           width={414}
      //           height={108}
      //           disableLoading
      //         />
      //       </View>
      //       <View
      //         style={{
      //           flex: 1,
      //           alignItems: 'center',
      //           justifyContent: 'center',
      //           marginTop: -110,
      //         }}>
      //         <ImageBackground
      //           source={this.state.stamp}
      //           style={{
      //             width: 160,
      //             height: 160,
      //             alignItems: 'center',
      //             justifyContent: 'center',
      //           }}>
      //           {/* <View style={{opacity: 0.5}}>
      //             <QRCode value={qrValue} size={130} />
      //           </View> */}
      //         </ImageBackground>
      //         <Text
      //           style={{
      //             marginTop: 20,
      //             color: this.state.color,
      //             fontSize: 30,
      //             fontFamily: SFProFontName,
      //             fontWeight: '800',
      //           }}>
      //           {this.state.text}
      //         </Text>
      //       </View>
      //       <View
      //         style={{
      //           position: 'absolute',
      //           alignSelf: 'center',
      //           alignItems: 'center',
      //           bottom: 30,
      //         }}>
      //         <ImageWithLoader
      //           source={require('../icons/3x-qr-close-btn.png')}
      //           width={88}
      //           height={86}
      //           disableLoading
      //           onPress={() => this.props.navigation.navigate('Home')}
      //         />
      //       </View>
      //     </View>
      //   </RNCamera>
      // </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, {
  updateSearchText,
  selectUserByName,
})(QRScreen);
