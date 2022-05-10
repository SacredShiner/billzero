import React, { Component, Fragment } from 'react';
import {
  View,
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';

import Modal from 'react-native-modal';

import { CreditCardInput } from 'react-native-credit-card-input';

import { SFProFontName } from '../app';

import { sendHelp } from '../redux/actions/user';
import { addPaymentMethod } from '../redux/actions/paymethods';
import { selectUserPaymentMethod } from '../redux/actions/bill';

import MsgModal from './MsgModal';

const axios = require('axios');
const qs = require('querystring');

class AddPaymentMethod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: null,
      loading: false,

      isValid: false,

      modalVisible: false,

      helpCheck1: true,
      helpCheck2: false,
      helpText: '',

      ccError: false,
      ccErrorText: '',
    };

    this._onChange = this._onChange.bind(this);
  }

<<<<<<< HEAD
  _onChange = form => {
    this.setState({ isValid: form.valid, form: form });
=======
  _onChange = (form) => {
    this.setState({isValid: form.valid, form: form});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };

  onDoneClicked = async () => {
    const { form } = this.state;

    if (form == null || form.valid === false) {
      this.setState({ ccError: true, ccErrorText: 'Card is Invalid' });
      return;
    }

    this.setState({ loading: true });

    let url = 'https://api.stripe.com/v1/tokens';
    let config = {
      headers: {
        // Authorization: 'Bearer pk_test_eix7RwSFe6AtU2UZvLvqcDJA',
        Authorization: 'Bearer pk_live_nTsPPPPfgPtdPJtzLeBfhMnx',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const { number, expiry, cvc } = form.values;

    const exp_month = expiry.split('/')[0];
    const exp_year = expiry.split('/')[1];

    let data = {
      'card[number]': number,
      'card[exp_month]': exp_month,
      'card[exp_year]': exp_year,
      'card[cvc]': cvc,
    };

    let stripeResponse = await axios
      .post(url, qs.stringify(data), config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return 'error';
      });

    if (stripeResponse === 'error') {
      this.setState({
        ccError: true,
        ccErrorText: 'Card is Incorrect',
        loading: false,
      });
      return;
    }

    const token = stripeResponse.id;
    const cardId = stripeResponse.card.id;

    console.log(token);
    console.log(cardId);

    const addResponse = await this.props.addPaymentMethod(token);

    this.setState({ loading: false });

    if (addResponse === 'fail') {
      this.setState({ ccError: true, ccErrorText: 'Error Adding Card' });
      return;
    }

    const cards = addResponse.paymentMethods;

    console.log(cards);

    var card = null;

    cards.forEach((item) => {
      if (cardId === item.id) {
        card = item;
      }
    });

    console.log(card);

    if (!card) {
      this.setState({ ccError: true, ccErrorText: 'Error Adding Card' });
      return;
    }

    this.props.selectUserPaymentMethod({
      ...card,
      ...{ value: this.props.payAmount },
    });
    this.props.onDone();
    // this.props.navigation.navigate('SelectedUserBillCheckout');

    // Alert.alert(
    //   'Success',
    //   'Added Payment method successfully',
    //   [
    //     {text: 'OK', onPress: () => {
    //       // this.props.onDone(token);
    //     }},
    //   ],
    //   {cancelable: false},
    // );
  };

  renderModalBody = () => {
    return (
      <View style={styles.modalBody}>
        <CheckBox
          title="Credit Card won't Add"
          checked={this.state.helpCheck1}
          onPress={() => this.setState({ helpCheck1: true, helpCheck2: false })}
        />
        <CheckBox
          title="Other Issue"
          checked={this.state.helpCheck2}
          onPress={() => this.setState({ helpCheck1: false, helpCheck2: true })}
        />
        <TextInput
          editable={this.state.helpCheck2}
          maxLength={50}
          style={styles.helpTextInput}
          autoCorrect
          placeholder="50 character limit"
          value={this.state.helpText}
<<<<<<< HEAD
          onChangeText={value => this.setState({ helpText: value })}
=======
          onChangeText={(value) => this.setState({helpText: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        />
        <View style={styles.sendBtnView}>
          <Button
            title={'send'}
            titleStyle={styles.sendBtnTitleStyle}
            buttonStyle={styles.sendBtnStyle}
            onPress={async () => {
              let subject = '';
              let message = '';

              if (this.state.helpCheck1) {
                subject = "Credit Card Won't Add";
              } else {
                subject = 'Credit Card Other Issue';
                message = this.state.helpText;
              }
              await this.props.sendHelp(subject, message);

              setTimeout(() => {
                this.props.hideModal();
                this.setState({
                  ccError: true,
                  ccErrorText: 'Issue Submitted',
                });
              }, 200);
              // Alert.alert(
              //   'Help',
              //   'Your issue has been submitted',
              //   [
              //     {
              //       text: 'OK',
              //       onPress: this.props.hideModal,
              //     },
              //   ],
              //   {cancelable: false},
              // );
            }}
          />
        </View>
      </View>
    );
  };

  renderModal = () => {
    return (
      <Modal
        isVisible={this.props.modalVisible}
        onBackdropPress={this.props.hideModal}
      >
        <View style={styles.modalView}>{this.renderModalBody()}</View>
      </Modal>
    );
  };

  render() {
    const { modalVisible } = this.props;

    return (
      <Fragment>
        <ScrollView>
          <Button
            title="Back"
            titleStyle={styles.backTitle}
            type="clear"
            onPress={() => {
              this.props.onBack();
            }}
          />
          <CreditCardInput
            autoFocus
            onChange={this._onChange}
            style={styles.creditInput}
          />
          {this.state.isValid && (
            <Button
              title="SAVE"
              loading={this.state.loading}
              titleStyle={{ fontFamily: SFProFontName }}
              style={styles.saveButton}
              onPress={() => this.onDoneClicked()}
            />
          )}
        </ScrollView>

        {modalVisible && this.renderModal()}

        <MsgModal
          isVisible={this.state.ccError}
          onBack={() => this.setState({ ccError: false })}
          title="Status"
          body={this.state.ccErrorText}
          onOK={() => this.setState({ ccError: false })}
        />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  saveButton: {
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 100,
  },
  creditInput: {
    marginLeft: 10,
    marginRight: 10,
  },
  backTitle: {
    fontFamily: SFProFontName,
    marginLeft: 20,
  },
  modalView: {
    height: 250,
    backgroundColor: 'white',
    marginTop: -30,
  },
  modalBody: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  helpTextInput: {
    opacity: 0.5,
    borderColor: 'gray',
    borderWidth: 2,
    height: 75,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: SFProFontName,
    fontSize: 18,
  },
  sendBtnView: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  sendBtnStyle: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 60,
  },
  sendBtnTitleStyle: {
    fontFamily: SFProFontName,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    textAlign: 'right',
  },
});

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, {
  addPaymentMethod,
  selectUserPaymentMethod,
  sendHelp,
})(AddPaymentMethod);
