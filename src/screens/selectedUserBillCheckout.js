<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, {Component, Fragment} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  View,
  TouchableWithoutFeedback,
  Image,
  YellowBox,
  StyleSheet,
  TextInput,
} from 'react-native';
<<<<<<< HEAD
import { Avatar, Text, CheckBox, Button } from 'react-native-elements';
import { connect } from 'react-redux';
=======
import {Avatar, Text, CheckBox, Button} from 'react-native-elements';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import Modal from 'react-native-modal';

import Signature from '../libs/react-native-signature-canvas';

<<<<<<< HEAD
import { sendHelp } from '../redux/actions/user';
=======
import {sendHelp} from '../redux/actions/user';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  billsPay,
  billsCharge,
  billsList,
  selectUserBill,
  calculateFee,
} from '../redux/actions/bill';
import {
  SFProFontName,
  SPProFontSemiBold,
  helpIconUp,
  helpIconDown,
} from '../app';

import HomeBackButton from '../components/HomeBackButton';
import CheckoutHeader from '../components/CheckoutHeader';

import {setReceiptData, getKarmaOrgs} from '../redux/actions/receipt';
import HeaderLogo from '../components/HeaderLogo';

<<<<<<< HEAD
import { ImageWithLoader } from '../components/Loader';
import ProfileCompleteModal, {
  isProfileComplete,
} from '../components/ProfileCompleteModal';
import { isIPhoneX } from '../components/deviceInfo';
=======
import {ImageWithLoader} from '../components/Loader';
import ProfileCompleteModal, {
  isProfileComplete,
} from '../components/ProfileCompleteModal';
import {isIPhoneX} from '../components/deviceInfo';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import MsgModal from '../components/MsgModal';

// console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
// YellowBox.ignoreWarnings(['Warning: WebView']);

class SelectedUserBillCheckoutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribe: false,
      payeeFee: false,
      signature: null,
      signatureVisible: false,
      loading: false,

      amount: 0,
      fee: 1.99,
      subscribeVal: 1,
      feePayee: 1.99,
      total: 0,

      modalVisible: false,
      helpCheck1: true,
      helpCheck2: false,
      helpText: '',

      userModalVisible: false,

      msgModalVisible: false,
      msgModalText: '',
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const helpIcon = params.modalVisible ? helpIconUp : helpIconDown;
    return {
      headerTitle: <HeaderLogo onPress={() => navigation.navigate('Home')} />,
      headerLeft: <HomeBackButton onPress={() => navigation.goBack()} />,
      headerRight: (
        <View style={styles.helpIcon}>
          <ImageWithLoader
            onPress={() => params.toggleModal(true)}
            source={helpIcon}
            width={43}
            height={43}
            disableLoading
          />
        </View>
      ),
    };
  };

  setCheckoutValues = async () => {
    let payload = {
      amount: Math.ceil(this.props.selectedUserPaymentMethod.value),
      uid: this.props.selectedUser.id,
    };
    let result = await this.props.calculateFee(payload);
    if (result !== 'fail') {
      this.setState({
        amount: result.amount,
        fee: result.feePayer,
        feePayee: result.feePayee,
        total: result.total,
      });
    }
    // let payload = {
    //   amount: Math.ceil(this.props.selectedUserPaymentMethod.value),
    //   billId: this.props.selectedUserBill.id,
    //   subscribe: this.state.subscribe,
    //   payPayeeFee: this.state.payeeFee,
    // };
    // let result = await this.props.calculateFee(payload);

    // if (result !== 'fail') {
    //   this.setState({
    //     amount: result.amount,
    //     fee: result.fee,
    //     subscribeVal: result.subscribe,
    //     feePayee: result.feePayee,
    //     total: result.total,
    //   });
    // }
  };

<<<<<<< HEAD
  toggleModal = toggle => {
    this.setState({ modalVisible: toggle });
=======
  toggleModal = (toggle) => {
    this.setState({modalVisible: toggle});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    this.props.navigation.setParams({
      modalVisible: toggle,
    });
  };

  componentDidMount = async () => {
    await this.setCheckoutValues();

    this.props.navigation.setParams({
      modalVisible: this.state.modalVisible,
      toggleModal: this.toggleModal,
    });
  };

  onProcessPayment = async () => {
    this.setState({ loading: true });

    const billId = this.props.selectedUserBill.id;
    const userId = this.props.selectedUser.id;

    // await this.props.billsPay(billId);

    const cardId = this.props.selectedUserPaymentMethod.id;

    var chargePayload = {
      amount: this.state.amount,
      userId,
      billId,
      paymentSource: cardId,
      signature: this.state.signature,
      giftBill: false,
      payPayeeFee: this.state.payeeFee,
    };

    if (this.state.subscribe) {
      chargePayload[
        'planId'
      ] = `plan_pay${this.props.selectedUserPaymentMethod.value}Monthly`;
    }

    let result = await this.props.billsCharge(chargePayload);

    this.setState({ loading: false });

    // if (status == 'success') {
    //   this.props.billsList(this.props.selectedUser.id)
    // }

    if (result.status === 'fail') {
      this.setState({
        msgModalVisible: true,
        msgModalText: 'ERROR on Payment',
      });
      return;
    }

    const karmaOrgs = await this.props.getKarmaOrgs();
    const karmas = karmaOrgs.filter(
<<<<<<< HEAD
      item => item.image != null && item.image != ''
=======
      (item) => item.image != null && item.image != '',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    );
    let karma = null;
    if (karmas.length > 0) {
      karma = karmas[Math.floor(Math.random() * karmas.length)];
    }

    this.props.setReceiptData({
      total: this.state.total,
      signature: this.state.signature,
      method: result.method,
      karma,
    });

    this.props.billsList(this.props.selectedUser.id);
    this.props.navigation.navigate('Receipt');
  };

  handleSignature = (signature) => {
    this.setState({signature: signature === 'null' ? null : signature});
  };

  renderRows = () => {
    const {selectedUserPaymentMethod} = this.props;
    const {value, brand, last4} = selectedUserPaymentMethod;

    let {amount, total, subscribeVal, fee, feePayee} = this.state;

    return (
      <View style={{}}>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderWidth: 1,
            borderColor: '#c4c4c4',
            backgroundColor: '#f1f1f1',
            padding: 5,
            marginBottom: 5,
<<<<<<< HEAD
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Bill Amount</Text>
            <Text style={{ fontWeight: 'bold' }}>$ {amount}</Text>
=======
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Bill Amount</Text>
            <Text style={{fontWeight: 'bold'}}>$ {amount}</Text>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          </View>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderWidth: 1,
            borderColor: '#c4c4c4',
            backgroundColor: '#f1f1f1',
            padding: 5,
            marginBottom: 5,
<<<<<<< HEAD
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Processing Fee</Text>
            <Text style={{ fontWeight: 'bold' }}>
=======
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Processing Fee</Text>
            <Text style={{fontWeight: 'bold'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {fee == 0 ? 'FREE' : `$ ${fee.toFixed(2)}`}
            </Text>
          </View>
        </View>
        {/* <View style={{ marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: '#c4c4c4', backgroundColor: '#f1f1f1', padding: 5, marginBottom: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <CheckBox
              title='Subscribe'
              containerStyle={{  margin: 0, padding: 0, marginLeft: 0 }}
              checked={this.state.subscribe}
              onPress={ async () => {
                await this.setState({subscribe: !this.state.subscribe})
                this.setCheckoutValues()
              }}
            />
            <Text style={{ fontWeight: 'bold', color: '#158000' }}>-$ {subscribeVal.toFixed(2)}</Text>
          </View>
        </View> */}
        {/* <View style={{ marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: '#c4c4c4', backgroundColor: '#f1f1f1', padding: 5, marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <CheckBox
              title='Pay Payee Fee'
              containerStyle={{  margin: 0, padding: 0, marginLeft: 0 }}
              checked={this.state.payeeFee}
              onPress={ async () => {
                await this.setState({payeeFee: !this.state.payeeFee})
                this.setCheckoutValues()
              }}
            />
            <Text style={{ fontWeight: 'bold', color: '#158000' }}>$ {feePayee.toFixed(2)}</Text>
          </View>
        </View> */}
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            borderWidth: 1,
            borderColor: '#c4c4c4',
            backgroundColor: '#f1f1f1',
            padding: 10,
            marginTop: isIPhoneX() ? 20 : 0,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
<<<<<<< HEAD
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Total</Text>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}
            >
=======
            }}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <View
                style={{
                  backgroundColor: '#00ff0a',
                  padding: 2,
                  fontWeight: '700',
                  borderWidth: 1,
                  borderColor: '#006505',
<<<<<<< HEAD
                }}
              >
=======
                }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <Text>
                  {brand.toUpperCase()} {last4}
                </Text>
              </View>
            </TouchableWithoutFeedback>
<<<<<<< HEAD
            <Text style={{ fontWeight: 'bold' }}>$ {Math.ceil(total)}</Text>
=======
            <Text style={{fontWeight: 'bold'}}>$ {Math.ceil(total)}</Text>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          </View>
        </View>
      </View>
    );
  };

  renderCheckout = () => {
    const style = `.m-signature-pad--footer
    .button {
      background-color: transparent;
      color: grey;
    }`;

    return (
      <>
        <CheckoutHeader total={Math.ceil(this.state.total)} />
        {/* <View style={{  flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  marginLeft: 10, marginRight: 10, paddingBottom: 30, paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Avatar
                rounded
                size={120}
                source={{ uri: selectedUser.profileImage }}
              />
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>{ selectedUser.userName }</Text>
              <Text style={{ color: '#a6a6a6', textAlign: 'center', marginTop: 5 }}>{ `${city ? city: ''}, ${state ? state: ''}` }</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Avatar
                rounded
                size={120}
                source={{ uri: selectedUserBill.image }}
              />
              <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>{ selectedUserBill.billerName }</Text>
            </View>
          </View>
        </View> */}
        {this.renderRows()}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: isIPhoneX() ? 20 : 5,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              width: '100%',
              borderColor: '#929292',
              borderStyle: 'dashed',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Signature
              onOK={(signature) => this.handleSignature(signature)}
              descriptionText=""
              clearText="CLEAR"
              webStyle={style}
              descriptionText={'SIGN ABOVE'}
            />
            {/* <Text style={{ position: 'relative', top: '-50%', left: '40%', fontFamily: SFProFontName, fontSize: 20 }} >Sign Here...</Text> */}
          </View>
        </View>
<<<<<<< HEAD
        <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
=======
        <View style={{justifyContent: 'flex-end', alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Button
            title={`PAY $${Math.ceil(this.state.total)} NOW`}
            titleStyle={{
              fontFamily: SPProFontSemiBold,
              color: 'white',
              fontSize: isIPhoneX() ? 31 : 30,
              fontWeight: 'bold',
              paddingBottom: isIPhoneX() ? 10 : 0,
            }}
            loading={this.state.loading}
            disabled={!this.state.signature || this.state.loading}
            onPress={() => {
              if (isProfileComplete(this.props.user)) {
                this.onProcessPayment();
              } else {
                this.setState({ userModalVisible: true });
              }
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

  renderModalBody = () => {
    return (
      <View style={styles.modalBody}>
        <CheckBox
          title="Payment Won't Process"
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
                subject = "Checkout Payment Won't Process";
              } else {
                subject = 'Checkout Other Issue';
                message = this.state.helpText;
              }
              await this.props.sendHelp(subject, message);

              this.toggleModal(false);

              setTimeout(() => {
                this.setState({
                  msgModalVisible: true,
                  msgModalText: 'Your issue has been submitted',
                });
              }, 200);
            }}
          />
        </View>
      </View>
    );
  };

  renderModal = () => {
    return (
      <Modal
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.toggleModal(false)}
      >
        <View style={styles.modalView}>{this.renderModalBody()}</View>
      </Modal>
    );
  };

  render() {
    const {selectedUserBill} = this.props;

    if (!selectedUserBill) {
      return null;
    }

    return (
<<<<<<< HEAD
      <View style={{ flex: 1 }}>
=======
      <View style={{flex: 1}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        {this.renderCheckout()}

        {this.state.modalVisible && this.renderModal()}

        {this.state.userModalVisible && (
          <ProfileCompleteModal
            isVisible={true}
            onBackdropPress={() => this.setState({ userModalVisible: false })}
            title={`PAY $${Math.ceil(this.state.total)} NOW`}
            submit={() => {
              this.setState({ userModalVisible: false });
              this.onProcessPayment();
            }}
          />
        )}

        <MsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onOK={() => this.setState({ msgModalVisible: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  helpIcon: {
    marginTop: -10,
    marginRight: 10,
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
  selectedUser: state.users.selectedUser,
  selectedUserBill: state.selectedUserBill,
  selectedUserPaymentMethod: state.selectedUserPaymentMethod,
});

export default connect(mapStateToProps, {
  billsPay,
  billsCharge,
  billsList,
  selectUserBill,
  calculateFee,
  setReceiptData,
  sendHelp,
  getKarmaOrgs,
})(SelectedUserBillCheckoutScreen);
