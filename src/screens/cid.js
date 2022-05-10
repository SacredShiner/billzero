<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  View,
  Keyboard,
  Linking,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD
import { Button, Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { sendPin } from '../redux/actions/user';
=======
import {Button, Icon, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {sendPin} from '../redux/actions/user';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
// import TextInputMask from 'react-native-text-input-mask';

import {TextInputMask} from 'react-native-masked-text';

import HeaderLogo from '../components/HeaderLogo';

import {tosURL, ppURL, SFProFontName, platform} from '../app';

// import LegalModal from '../components/LegalModal';
// import {getPP, getTOS} from '../redux/actions/legal';

const placeholderStyle = {
  backgroundColor: 'transparent',
};

class CidScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderLogo headerLeft={true} />,
      headerLeft: null,
      // )
    };
  };

  state = {
    phone: '',
    modalVisible: false,
  };

  componentDidMount() {
    // this.phoneInput.focus()
  }

  // modalInit = type => {
  //   // 1: TOS, 2: PP
  //   if (type === 1) {
  //     this.props.getTOS();
  //   }
  //   if (type === 2) {
  //     this.props.getPP();
  //   }

  //   this.setState({modalVisible: true});
  // };

  sendPin = () => {
    const {sendPin} = this.props;
    const {phone} = this.state;

    const formatted = `+1${phone.split('-').join('')}`;

    sendPin(formatted);
  };

  componentDidUpdate(prevProps) {
<<<<<<< HEAD
    const { sms } = this.props;
=======
    const {sms} = this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    if (
      sms !== prevProps.sms &&
      sms &&
      sms.status === 'phone validation pin code sent'
    ) {
      this.props.navigation.navigate('Sms');
    }
  }

  render() {
<<<<<<< HEAD
    const { loading } = this.props;
    const { phone } = this.state;
=======
    const {loading} = this.props;
    const {phone} = this.state;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    return (
      <View
        style={{
          flex: 1,
          paddingTop: 10,
          backgroundColor: 'white',
          alignItems: 'center',
<<<<<<< HEAD
        }}
      >
=======
        }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <Image
          source={require('../images/new/3x-ONBOARD-STEP1_IPH.png')}
          style={{
            width: platform === 'ios' ? 414 : 310,
            height: platform === 'ios' ? 64 : 48,
          }}
          placeholderStyle={placeholderStyle}
        />
        <Image
          source={require('../images/new/3x-ONBOARD-LABEL_verification_IPH.png')}
          style={{
            width: 168,
            height: 27,
            marginTop: 20,
          }}
          placeholderStyle={placeholderStyle}
        />
        <Image
          source={require('../images/new/3x-ONBOARD-LABEL_enter_mobile_cid_IPH.png')}
          style={{
            width: 268,
            height: 22,
            marginTop: 15,
          }}
          placeholderStyle={placeholderStyle}
        />
        <TextInputMask
          type={'custom'}
          autoFocus
          keyboardType={'phone-pad'}
          options={{
            mask: '999-999-9999',
          }}
          placeholder={'123-456-7890'}
          value={this.state.phone}
<<<<<<< HEAD
          onChangeText={text => {
            if (text.length == 12) {
              Keyboard.dismiss();
            }
            this.setState({ phone: text });
=======
          onChangeText={(text) => {
            if (text.length == 12) {
              Keyboard.dismiss();
            }
            this.setState({phone: text});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          }}
          style={{
            borderColor: '#dedede',
            borderWidth: 1,
            backgroundColor: '#f2f2f2',
            color: '#000',
            textAlign: 'center',
            borderRadius: 2,
            width: 300,
            height: 60,
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: SFProFontName,
            marginTop: 10,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity
          style={{backgroundColor: '#e3e5e7', padding: 10}}
          disabled={loading || phone === '' || phone.length < 12}
<<<<<<< HEAD
          onPress={this.sendPin}
        >
=======
          onPress={this.sendPin}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {loading || phone === '' || phone.length < 12 ? (
            <Image
              source={require('../images/new/3x-main-btn-txt-me-pin_inactive_IPH.png')}
              style={{
                width: 126,
                height: 32,
              }}
            />
          ) : (
            <Image
              source={require('../images/new/3x-main-btn-txt-me-pin_active_IPH.png')}
              style={{
                width: 126,
                height: 32,
              }}
            />
          )}
        </TouchableOpacity>

        {/* <Button title={'Text My Pin'}
            onPress={this.sendPin}
            loading={loading}
            disabled={loading || phone === '' || phone.length < 12}
            disabled={phone === '' || phone.length < 12}
            buttonStyle={{
              height: 60,
              width: 150
            }} /> */}
<<<<<<< HEAD
        <View style={{ marginTop: 20 }}>
=======
        <View style={{marginTop: 20}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              textAlign: 'center',
              fontFamily: SFProFontName,
              fontSize: 15,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            By Continuing to use BillZero
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: SFProFontName,
              marginTop: 10,
              fontSize: 15,
<<<<<<< HEAD
            }}
          >
            You Agree to our{' '}
            <Text
              style={{ color: '#03a5f9' }}
              onPress={() => Linking.openURL(tosURL)}
            >
=======
            }}>
            You Agree to our{' '}
            <Text
              style={{color: '#03a5f9'}}
              onPress={() => Linking.openURL(tosURL)}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Terms
            </Text>{' '}
            &{' '}
            <Text
<<<<<<< HEAD
              style={{ color: '#03a5f9' }}
              onPress={() => Linking.openURL(ppURL)}
            >
=======
              style={{color: '#03a5f9'}}
              onPress={() => Linking.openURL(ppURL)}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Polices
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  sms: state.sms.data,
  loading: state.sms.loading,
});

export default connect(mapStateToProps, {
  sendPin,

  // getPP,
  // getTOS,
})(CidScreen);
