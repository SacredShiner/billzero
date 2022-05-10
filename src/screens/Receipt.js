<<<<<<< HEAD
import React, { Component } from 'react';
import { Linking, View } from 'react-native';
import { Text, Button, Image } from 'react-native-elements';
import { connect } from 'react-redux';
=======
import React, {Component} from 'react';
import {Linking, View} from 'react-native';
import {Text, Button, Image} from 'react-native-elements';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {
  SFProFontName,
  SPProFontSemiBold,
  headerLogoHeight,
  headerLogoWidth,
  screenWidth,
  FranklinGothicFontName,
} from '../app';

import CheckoutHeader from '../components/CheckoutHeader';
import HeaderLogo from '../components/HeaderLogo';
<<<<<<< HEAD
import { ImageWithLoader } from '../components/Loader';
import { isIPhoneX } from '../components/deviceInfo';
import { getDims } from '../components/Assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
=======
import {ImageWithLoader} from '../components/Loader';
import {isIPhoneX} from '../components/deviceInfo';
import {getDims} from '../components/Assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

class ReceiptScreen extends Component {
  state = {
    dims: getDims(this.props.user),
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <HeaderLogo
          headerLeft={true}
          onPress={() => navigation.navigate('Home')}
        />
      ),
      headerLeft: null,
    };
  };

  renderReciept = () => {
<<<<<<< HEAD
    const {
      selectedUserPaymentMethod,
      total,
      signature,
      method,
      karma,
    } = this.props;
    const { brand, last4 } = selectedUserPaymentMethod;
=======
    const {selectedUserPaymentMethod, total, signature, method, karma} =
      this.props;
    const {brand, last4} = selectedUserPaymentMethod;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    let amount = Math.ceil(total);

    let card = brand.toUpperCase();

    if (card == 'AMERICAN EXPRESS') card = 'AMEX';
    else if (card === 'MASTERCARD') card = 'MC';

    return (
      <>
<<<<<<< HEAD
        <View
          style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}
        >
          <View style={{ alignItems: 'center' }}>
=======
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
          <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontFamily: SFProFontName,
                fontSize: 35,
                fontWeight: 'bold',
                marginTop: 5,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Reciept
            </Text>
          </View>
          <CheckoutHeader total={amount} />
          {karma && (
            <TouchableOpacity onPress={() => Linking.openURL(karma.web)}>
              <Image
<<<<<<< HEAD
                source={{ uri: karma.image }}
=======
                source={{uri: karma.image}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                style={{
                  width: screenWidth,
                  height: this.state.dims.karmaImageHeight,
                  resizeMode: 'contain',
                }}
<<<<<<< HEAD
                placeholderStyle={{ backgroundColor: 'transparent' }}
=======
                placeholderStyle={{backgroundColor: 'transparent'}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              />
            </TouchableOpacity>
          )}
          <Text
            style={{
              fontFamily: SPProFontSemiBold,
              fontSize: 25,
              marginTop: 35,
              letterSpacing: -1.5,
<<<<<<< HEAD
            }}
          >
            ${amount} Charged {card} {last4}
          </Text>
          <ImageWithLoader source={{ uri: signature }} width={75} height={75} />
=======
            }}>
            ${amount} Charged {card} {last4}
          </Text>
          <ImageWithLoader source={{uri: signature}} width={75} height={75} />
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              fontFamily: SPProFontSemiBold,
              fontSize: 25,
              letterSpacing: -1.5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {method === 'bank'
              ? 'Payment to Biller'
              : 'Payment will Post Shortly'}
          </Text>
          {method === 'bank' && (
            <Text
              style={{
                fontFamily: SPProFontSemiBold,
                fontSize: 18,
                marginTop: 5,
                color: '#d40a00',
                letterSpacing: -1.5,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              1-3 Business Days (ACH)
            </Text>
          )}
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'white',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Button
            title={`CONTINUE`}
            titleStyle={{
              fontFamily: SPProFontSemiBold,
              color: 'white',
              fontSize: isIPhoneX() ? 31 : 30,
              fontWeight: 'bold',
              paddingBottom: isIPhoneX() ? 10 : 0,
            }}
            onPress={() => {
              // this.props.navigation.navigate('SelectedUser', { refresh: true });
              this.props.navigation.navigate('SelectedUser');
            }}
<<<<<<< HEAD
            containerStyle={{ marginTop: 10, width: '100%' }}
=======
            containerStyle={{marginTop: 10, width: '100%'}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            buttonStyle={{
              backgroundColor: '#ff1a45',
              height: isIPhoneX() ? 80 : 70,
            }}
          />
        </View>
      </>
    );
  };

  render() {
<<<<<<< HEAD
    return <View style={{ flex: 1 }}>{this.renderReciept()}</View>;
=======
    return <View style={{flex: 1}}>{this.renderReciept()}</View>;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  selectedUserPaymentMethod: state.selectedUserPaymentMethod,
  total: state.receipt.data.total,
  signature: state.receipt.data.signature,
  method: state.receipt.data.method,
  karma: state.receipt.data.karma,
});

export default connect(mapStateToProps, null)(ReceiptScreen);
