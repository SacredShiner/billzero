<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  Alert,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD
import { Button, Text, Image } from 'react-native-elements';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import { connect } from 'react-redux';
=======
import {Button, Text, Image} from 'react-native-elements';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import { validatePhone, sendPin } from '../redux/actions/user';

import {SFProFontName, platform} from '../app';

import HeaderLogo from '../components/HeaderLogo';
import HomeBackButton from '../components/HomeBackButton';

const placeholderStyle = {
  backgroundColor: 'transparent',
};

class SmsVerificationScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderLogo />,
      headerLeft: <HomeBackButton onPress={() => navigation.goBack()} />,
    };
  };

  state = {
    code: '',
  };

  clearCode = () => {
<<<<<<< HEAD
    this.setState({ code: '' });
=======
    this.setState({code: ''});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };

  onCodeVerify = () => {
    const {validatePhone} = this.props;
    const {code} = this.state;

    validatePhone(code);
  };

  componentDidMount() {}

  componentDidUpdate(prevProps) {
    const {sms, error} = this.props;

    // console.log('--- sms update ---')
    // console.log(sms);

    // if (sms !== prevProps.sms && sms && sms.statusData === 'phone_verified') {
    if (
      sms !== prevProps.sms &&
      sms &&
      sms.statusData &&
      (sms.statusData.mfa_challenges || sms.statusData === 'phone_verified')
    ) {
      this.props.navigation.navigate('ProfileSetup');
    }

    // console.log(`---- error: ${error}`)

    if (error === 'InvalidId' || error === 'Failed to find Biller Payment Id') {
      Alert.alert(
        'Error',
        'Vendor Login Failure',
        [
          {
            text: 'Try Again',
            onPress: () => this.props.navigation.navigate('Vendor'),
          },
        ],
        { cancelable: false }
      );
    }
  }

  resendPin = () => {
    const {sms, sendPin} = this.props;
    if (sms && sms.phone) {
      sendPin(sms.phone);
      Alert.alert(
        'PIN Code',
        `Your PIN code was successfully sent to ${this.formatPhone(sms.phone)}`,
<<<<<<< HEAD
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
=======
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      );
    }
  };

  formatPhone = phone => {
    if (phone.length == 12) {
      return (
        phone.substring(2, 5) +
        '-' +
        phone.substring(5, 8) +
        '-' +
        phone.substring(8)
      );
    } else if (phone.length == 10) {
      return (
        phone.substring(0, 3) +
        '-' +
        phone.substring(3, 6) +
        '-' +
        phone.substring(6)
      );
    } else {
      return phone;
    }
  };

  render() {
    const {code} = this.state;
    const {loading, sms, error} = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 10,
          alignItems: 'center',
<<<<<<< HEAD
        }}
      >
=======
        }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <Image
          source={require('../images/new/3x-ONBOARD-STEP2_IPH.png')}
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
          source={require('../images/new/3x-ONBOARD-LABEL_enter_pin_code_IPH.png')}
          style={{
            width: 208,
            height: 22,
            marginTop: 15,
          }}
          placeholderStyle={placeholderStyle}
        />
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {sms && sms.phone && this.formatPhone(sms.phone)}
        </Text>

        <CodeField
          autoFocus
          value={this.state.code}
<<<<<<< HEAD
          onChangeText={value => {
            this.setState({ code: value });
=======
          onChangeText={(value) => {
            this.setState({code: value});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            if (value.length == 4) {
              Keyboard.dismiss();
            }
          }}
          keyboardType="number-pad"
          cellCount={4}
          rootStyle={styles.rootStyle}
<<<<<<< HEAD
          renderCell={({ index, symbol, isFocused }) => (
=======
          renderCell={({index, symbol, isFocused}) => (
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text key={index} style={styles.input}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 15,
<<<<<<< HEAD
          }}
        >
          <Button
            title={'Resend Code'}
            type="clear"
            titleStyle={{ fontSize: 16 }}
            buttonStyle={{ padding: 0 }}
            containerStyle={{ height: 24, marginRight: 50 }}
=======
          }}>
          <Button
            title={'Resend Code'}
            type="clear"
            titleStyle={{fontSize: 16}}
            buttonStyle={{padding: 0}}
            containerStyle={{height: 24, marginRight: 50}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            onPress={() => this.resendPin()}
          />
          <Button
            onPress={this.clearCode}
            title={'Clear'}
            type="clear"
<<<<<<< HEAD
            titleStyle={{ fontSize: 16 }}
            buttonStyle={{ padding: 0 }}
            containerStyle={{ height: 24, marginLeft: 50 }}
=======
            titleStyle={{fontSize: 16}}
            buttonStyle={{padding: 0}}
            containerStyle={{height: 24, marginLeft: 50}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          />
        </View>
        {error === 'Unauthorized' && (
          <Text
<<<<<<< HEAD
            style={{ color: 'red', marginTop: 20, fontFamily: SFProFontName }}
          >
=======
            style={{color: 'red', marginTop: 20, fontFamily: SFProFontName}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            PIN code is not valid, please try again.
          </Text>
        )}

        <TouchableOpacity
          style={{backgroundColor: '#e3e5e7', padding: 15, marginTop: 25}}
          disabled={loading || code === ''}
<<<<<<< HEAD
          onPress={this.onCodeVerify}
        >
=======
          onPress={this.onCodeVerify}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {loading || code === '' ? (
            <Image
              source={require('../images/new/3x-main-btn-verify_inactive_IPH.png')}
              style={{
                width: 84,
                height: 34,
              }}
              placeholderStyle={placeholderStyle}
            />
          ) : (
            <Image
              source={require('../images/new/3x-main-btn-verify_active_IPH.png')}
              style={{
                width: 84,
                height: 34,
              }}
              placeholderStyle={placeholderStyle}
            />
          )}
        </TouchableOpacity>
        {/* 
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
          <Button title={'Verify'}
                  onPress={this.onCodeVerify}
                  loading={loading}
                  disabled={loading || code === ''}
                  buttonStyle={{
                    height: 60,
                    width: 150
                  }} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  resetCode: {
    marginTop: 25,
    color: '#4b5ba4',
  },
  rootStyle: {
    height: 55,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    color: '#000',
    backgroundColor: '#f0f0f0',
    fontSize: 26,
    width: 50,
    height: 50,
    textAlign: 'center',
    margin: 5,
    paddingTop: 6,
  },
});

const mapStateToProps = (state) => ({
  sms: state.sms.data,
  loading: state.sms.loading,
  error: state.sms.error,
});

export default connect(mapStateToProps, {
  validatePhone,
  sendPin,
})(SmsVerificationScreen);
