<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, {Component, Fragment} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  View,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
<<<<<<< HEAD
import { Avatar, Text, Image, Button } from 'react-native-elements';
import { connect } from 'react-redux';
=======
import {Avatar, Text, Image, Button} from 'react-native-elements';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import CachedAvatar from '../components/CachedAvatar';

import Slider from 'react-native-slider';

import {bold} from 'ansi-colors';

<<<<<<< HEAD
import { setNeedRedirect } from '../redux/actions/user';

import { SFProFontName } from '../app';

// import PaymentMethods from './profile/components/PaymentMethods';

import { paymethodsList } from '../redux/actions/paymethods';
import { selectUserPaymentMethod } from '../redux/actions/bill';
import { ImageWithLoader, Loading } from '../components/Loader';
import { isIPhoneX } from '../components/deviceInfo';
import { isBigScreen } from '../components/deviceInfo';
import { reduce } from 'lodash';
=======
import {setNeedRedirect} from '../redux/actions/user';

import {SFProFontName} from '../app';

// import PaymentMethods from './profile/components/PaymentMethods';

import {paymethodsList} from '../redux/actions/paymethods';
import {selectUserPaymentMethod} from '../redux/actions/bill';
import {ImageWithLoader, Loading} from '../components/Loader';
import {isIPhoneX} from '../components/deviceInfo';
import {isBigScreen} from '../components/deviceInfo';
import {reduce} from 'lodash';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

class SelectedUserBillScreen extends Component {
  constructor() {
    super();

    this.state = {
      value: 5,
      onReleasePayAmount: false,
    };
  }

  componentDidMount() {
    this.props.paymethodsList();
    this.props.setNeedRedirect(false);

    const payRule = this.props.payRule;
    let temp = payRule.minimum;

    if (this.props.payAmount && this.props.payAmount > payRule.minimum) {
      temp = this.props.payAmount;
    }

    // this.setState({ value: Math.ceil( this.props.payAmount == 0 ? 20 : this.props.payAmount) });
    this.setState({
      value: Math.ceil(Math.min(temp, this.props.selectedUserBill.balance)),
    });
  }

  // onPaymentSelect = (method) => {
  //   this.props.onPaymentSelected(method, this.state.value)
  // }

<<<<<<< HEAD
  onPaymentSelect = card => {
    const { balance } = this.props.selectedUserBill;
=======
  onPaymentSelect = (card) => {
    const {balance} = this.props.selectedUserBill;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    let billAmount =
      balance < this.props.payRule.minimum ? balance : this.state.value;
    this.props.onPaymentSelected(card, billAmount);
  };

  renderPaymentAmount = () => {
    const { selectedUserBill } = this.props;

    const balance = selectedUserBill.balance;

    if (balance && balance < this.props.payRule.minimum) {
      return (
        <Text
          style={{
            alignItems: 'center',
            fontSize: 20,
            fontFamily: SFProFontName,
            fontWeight: 'bold',
          }}
        >
          ${this.state.value}
        </Text>
      );
    }

    const screenWidth = Math.round(Dimensions.get('window').width);
    var leftPos = 0;
    var textWidth = this.state.value > 99 ? 75 : 50;

<<<<<<< HEAD
    const { minimum } = this.props.payRule;
=======
    const {minimum} = this.props.payRule;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    if (this.state.value === minimum) {
      leftPos = 0;
    } else if (this.state.value === balance) {
      // if (balance - ~~balance > 0) {
      //   textWidth += 45;
      // }
      if (balance > 99) {
        textWidth += 90;
      } else {
        textWidth += 100;
      }
      leftPos = screenWidth - textWidth;
    } else {
      leftPos =
        ((screenWidth - textWidth) / (balance - minimum)) *
        (this.state.value - minimum);
    }

    let step = 5;
    if (balance - this.state.value < 5) {
      step = 1;
    }

    let amountShow = `$${this.state.value}`;
    if (balance < this.props.payRule.maximum && this.state.value === balance) {
      amountShow = `FULL PAY $${this.state.value}`;
    }

    return (
<<<<<<< HEAD
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
        >
=======
      <View style={{flexDirection: 'row'}}>
        <View
          style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: isIPhoneX() ? 20 : 17,
              width: textWidth,
              left: leftPos,
              fontFamily: SFProFontName,
            }}
          >
            {amountShow}
          </Text>
          <Slider
            thumbStyle={{ width: 10, height: 25, borderRadius: 0 }}
            trackStyle={{ height: 20 }}
            value={this.state.value}
            minimumValue={minimum}
            maximumValue={Math.min(balance, this.props.payRule.maximum)}
            minimumTrackTintColor={'#35ff4c'}
            maximumTrackTintColor={'#ff1713'}
            step={step}
            onValueChange={value => this.setState({ value: Math.ceil(value) })}
            onSlidingComplete={() => {
              if (!this.state.onReleasePayAmount) {
                this.setState({ onReleasePayAmount: true });
              }
            }}
          />
<<<<<<< HEAD
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
=======
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              0%
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              25%
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              50%
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              75%
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              100%
            </Text>
          </View>
        </View>
      </View>
    );
  };

  // renderCreditCard = (card, name, number) => {
  //   let icon = null;
  //   if (card === 'visa') icon = require(`../icons/visa.png`);
  //   if (card === 'mastercard') icon = require(`../icons/mastercard.png`);

  //   return (
  //     <TouchableWithoutFeedback onPress={() => this.onPaymentSelect({card, name, number})}>
  //       <View style={{
  //         flexDirection: 'row',
  //         backgroundColor: '#e5e4dd',
  //         borderWidth: 1,
  //         borderColor: '#dbdbdb',
  //         marginBottom: 10
  //       }}>
  //         <View style={{ width: 100, height: 45, backgroundColor: '#fff', justifyContent: 'center' }}>
  //           <Image
  //             source={icon}
  //             resizeMode={'contain'}
  //             style={{ width: 100, height: 45 }}
  //           />
  //         </View>
  //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 5 }}>
  //           <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000000', fontFamily: SFProFontName }}>
  //             { name.toUpperCase() } **** *** **** {number}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // };

<<<<<<< HEAD
  renderCreditCardRow = ({ item }) => {
=======
  renderCreditCardRow = ({item}) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (!item) {
      return null;
    }

<<<<<<< HEAD
    const { brand, last4 } = item;
=======
    const {brand, last4} = item;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    let secureStr = '**** **** **** ';
    var icon = null,
      name = '';
    if (brand === 'Visa') {
      icon = require('../icons/visa.png');
      name = 'VISA';
    } else if (brand === 'MasterCard') {
      icon = require('../icons/mastercard.png');
      name = 'MC';
    } else if (brand === 'American Express') {
      icon = require('../icons/american-express.png');
      name = 'AMEX';
      secureStr = '**** ****** *';
    }

    return (
      <TouchableWithoutFeedback onPress={() => this.onPaymentSelect(item)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#e5e4dd',
            borderWidth: 1,
            borderColor: '#dbdbdb',
            marginBottom: 10,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              width: 100,
              height: isIPhoneX() ? 45 : 30,
              backgroundColor: '#f00',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <ImageWithLoader
              width={100}
              height={isIPhoneX() ? 45 : 30}
              source={icon}
              disableLoading
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000000',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {name.toUpperCase()} {secureStr}
              {last4}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderPayMethods = () => {
    if (!this.state.onReleasePayAmount) {
      return null;
    }

<<<<<<< HEAD
    const { data, loading, selectedUserBill } = this.props;
    const { balance } = selectedUserBill;
    const { minimum } = this.props.payRule;

    let billAmount = Math.ceil(balance < minimum ? balance : this.state.value);

    return (
      <View style={{ flex: 1, marginTop: isIPhoneX() ? 0 : 0 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', marginBottom: 20, marginTop: 20 }}
          >
=======
    const {data, loading, selectedUserBill} = this.props;
    const {balance} = selectedUserBill;
    const {minimum} = this.props.payRule;

    let billAmount = Math.ceil(balance < minimum ? balance : this.state.value);

    return (
      <View style={{flex: 1, marginTop: isIPhoneX() ? 0 : 0}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 20}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              PAY METHODS
            </Text>
          </View>

          {loading ? (
<<<<<<< HEAD
            <View style={{ alignItems: 'center' }}>
=======
            <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <Loading size={10} />
            </View>
          ) : (
            <FlatList
              style={{
                flex: 1,
                paddingRight: 10,
                paddingLeft: 10,
                borderColor: 'red',
              }}
              data={data}
              renderItem={this.renderCreditCardRow}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            marginBottom: isIPhoneX() ? 0 : 0,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Button
            title={'ADD PAYMENT METHOD'}
            titleStyle={{
              fontFamily: SFProFontName,
              fontSize: 24,
              color: '#0e2209',
              fontWeight: 'bold',
            }}
            buttonStyle={{
              backgroundColor: '#61f047',
              marginLeft: 10,
              marginRight: 10,
              height: isIPhoneX() ? 60 : 60,
              //width: isIPhoneX() ? 420 : 380,
              width: isBigScreen() ? 420 : 380,
            }}
            onPress={() => {
              if (!this.props.currentUser) {
                return;
              }
              if (this.props.currentUser.userName == 'guest') {
<<<<<<< HEAD
                this.props.selectUserPaymentMethod({ value: billAmount });
                this.props.setNeedRedirect(true);
                this.props.payBill();
              } else {
                this.props.selectUserPaymentMethod({ value: billAmount });
=======
                this.props.selectUserPaymentMethod({value: billAmount});
                this.props.setNeedRedirect(true);
                this.props.payBill();
              } else {
                this.props.selectUserPaymentMethod({value: billAmount});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                this.props.onAddPaymentClicked();
              }
            }}
            type="clear"
          />
        </View>
      </View>
    );
  };

  render() {
<<<<<<< HEAD
    const { paymentMethods } = this.props.selectedUserBill;
=======
    const {paymentMethods} = this.props.selectedUserBill;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    const payable =
      paymentMethods.indexOf('creditcard') != -1 ||
      paymentMethods.indexOf('bank') != -1;

    if (!payable) {
      return (
        <Fragment>
<<<<<<< HEAD
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
=======
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              This Bill is not Payable
            </Text>
            <Text
              style={{
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Please Contact Billzero Support
            </Text>
          </View>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <View
          style={{
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: isIPhoneX() ? 10 : 10,
<<<<<<< HEAD
          }}
        >
          <View
            style={{ flexDirection: 'row', marginBottom: isIPhoneX() ? 0 : 0 }}
          >
=======
          }}>
          <View
            style={{flexDirection: 'row', marginBottom: isIPhoneX() ? 0 : 0}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                width: '100%',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              PAY AMOUNT
            </Text>
          </View>
          {this.renderPaymentAmount()}
          {this.renderPayMethods()}
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.paymethods.data,
  loading: state.paymethods.loading,
  error: state.paymethods.loading,

  payAmount: state.selectedUserPaymentMethod.value,
  payRule: state.payments.payrule,
});

export default connect(mapStateToProps, {
  paymethodsList,
  setNeedRedirect,
  selectUserPaymentMethod,
})(SelectedUserBillScreen);

// export default SelectedUserBillScreen;
