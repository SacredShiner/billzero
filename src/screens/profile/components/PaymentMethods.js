<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
<<<<<<< HEAD
import { Button, Image } from 'react-native-elements';
=======
import {Button, Image} from 'react-native-elements';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {connect} from 'react-redux';

import {
  paymethodsList,
  deletePaymentMethod,
} from '../../../redux/actions/paymethods';

import {SFProFontName} from '../../../app';

class PaymentMethods extends Component {
  componentDidMount() {
    this.props.paymethodsList();
  }

  renderCreditCard = (card, name, number) => {
    let icon = null;
    if (card === 'visa') icon = require(`../../../icons/visa.png`);
    if (card === 'mastercard') icon = require(`../../../icons/mastercard.png`);

    return (
      // <View>

      // </View>
      <View
        style={{
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
            height: 45,
            backgroundColor: '#fff',
            justifyContent: 'center',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Image
            source={icon}
            resizeMode={'contain'}
            style={{width: 100, height: 45}}
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
            {name.toUpperCase()} * {number}
          </Text>
        </View>
        <View
          style={{
            width: 80,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 5,
<<<<<<< HEAD
          }}
        >
          <Button
            title={'EDIT'}
            titleStyle={{ fontFamily: SFProFontName }}
=======
          }}>
          <Button
            title={'EDIT'}
            titleStyle={{fontFamily: SFProFontName}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            onPress={() => console.log(123)}
            type={'clear'}
          />
        </View>
      </View>
    );
  };

  renderCreditCards = () => {
    return (
      <>
        {this.renderCreditCard('visa', 'visa', 3478)}
        {this.renderCreditCard('mastercard', 'mc', 8690)}
      </>
    );
  };

<<<<<<< HEAD
  renderCreditCardRow = ({ item }) => {
=======
  renderCreditCardRow = ({item}) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (!item) {
      return null;
    }

<<<<<<< HEAD
    const { brand, last4, id } = item;
=======
    const {brand, last4, id} = item;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    console.log(id);

    var icon = null,
      name = '';
    if (brand === 'Visa') {
      icon = require(`../../../icons/visa.png`);
      name = 'VISA';
    } else if (brand === 'MasterCard') {
      icon = require(`../../../icons/mastercard.png`);
      name = 'MC';
    } else if (brand === 'American Express') {
      icon = require(`../../../icons/american-express.png`);
      name = 'AMEX';
    }

    return (
      <TouchableWithoutFeedback>
        <View
          style={{
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
              height: 45,
              backgroundColor: '#fff',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Image
              source={icon}
              resizeMode={'contain'}
              style={{width: 100, height: 45}}
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
              {name.toUpperCase()} * {last4}
            </Text>
          </View>
          <View
            style={{
              width: 100,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Button
              onPress={() => {
                Alert.alert(
                  '',
                  'Are you sure to remove card?',
                  [
                    {text: 'No', style: 'cancel'},
                    {
                      text: 'Yes',
                      onPress: () => {
                        this.props.deletePaymentMethod(id);
                        this.props.paymethodsList();
                      },
                    },
                  ],
                  { cancelable: false }
                );
              }}
              title={'REMOVE'}
              titleStyle={{fontFamily: SFProFontName}}
              type={'clear'}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderMain = () => {
    const {loading, data} = this.props;

    if (loading) {
      return (
        <Image
          source={require('../../../icons/loading.gif')}
          style={{
            width: 30,
            height: 30,
          }}
        />
      );
      // return <ActivityIndicator />;
    }

    if (data == null || data.length == 0) {
      return (
        <Text
          h4
          style={{
            marginTop: 50,
            marginBottom: 16,
            textAlign: 'center',
            fontFamily: SFProFontName,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          No Payment Methods
        </Text>
      );
    } else {
      return (
        <FlatList
          style={{
            width: '100%',
            paddingRight: 10,
            paddingLeft: 10,
            flex: 1,
          }}
          data={data}
          renderItem={this.renderCreditCardRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  render() {
    return <>{this.renderMain()}</>;
  }
}

const mapStateToProps = (state) => ({
  data: state.paymethods.data,
  loading: state.paymethods.loading,
  error: state.paymethods.loading,
});

export default connect(mapStateToProps, {
  paymethodsList,
  deletePaymentMethod,
})(PaymentMethods);
