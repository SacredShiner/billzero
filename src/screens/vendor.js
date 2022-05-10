import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Input, Button, Icon, CheckBox, Image } from 'react-native-elements';

import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import RadioGroup from 'react-native-radio-buttons-group';
import {TextInputMask} from 'react-native-masked-text';

import { connect } from 'react-redux';
import { billsPost, billUpdate, vendorSave } from '../redux/actions/bill';
import { sendHelp } from '../redux/actions/user';
import { updateBillStatus } from '../redux/actions/userbills';

import {
  SFProFontName,
  SPProFontSemiBold,
  helpIconUp,
  helpIconDown,
  defaultImageDev,
  defaultImageProd,
  OCRFont,
} from '../app';
import { ImageWithLoader } from '../components/Loader';
import BillStatusModal from '../components/BillStatusModal';
import MsgModal from '../components/MsgModal';

const ssnLabel = 'Social Security Number(no space)';
const dateLabel = 'Date of Birth(MMDDYYYY - no space)';

class VendorScreen extends Component {
  state = {
    vendorId: '',
    vendorPassword: '',
    hideVendorPass: false,

    modalVisible: false,
    helpCheck1: true,
    helpCheck2: false,
    helpCheck3: false,

    helpText: '',

    posting: false,
    statusText: '',

    mfaResponse: '',

    choiceData: [],

    helpSubmit: false,
    helpSubmitText: '',
  };

  static navigationOptions = ({ navigation }) => {
    const vendor = navigation.getParam('vendor');

    const { params = {} } = navigation.state;
    const helpIcon = params.modalVisible ? helpIconUp : helpIconDown;

    const backgroundColor = `#${
      vendor && vendor.bgColor ? vendor.bgColor : 'ffffff'
    }`;
    const headerTintColor = `#${
      vendor && vendor.textColor ? vendor.textColor : '000000'
    }`;

    return {
      headerLeft: (
        <Text
          style={{
            color: headerTintColor,
            marginLeft: 20,
            fontFamily: SFProFontName,
          }}
          onPress={() => navigation.goBack()}
        >
          Cancel
        </Text>
      ),
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
      title: 'Enter Your Credentials',
      headerTitleStyle: {
        fontFamily: SFProFontName,
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerStyle: {
        backgroundColor,
        borderColor: headerTintColor,
        borderBottomWidth: 2,
      },
      headerTintColor,
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      vendor: this.props.vendor,
      modalVisible: this.state.modalVisible,
      toggleModal: this.toggleModal,
    });
  }

  UNSAFE_componentWillMount() {
    const { vendor } = this.props;
    const { mfaChallenges } = vendor;
    if (mfaChallenges && mfaChallenges.mfas && mfaChallenges.mfas.length > 0) {
      const {mfaType, deliveryOptions} = mfaChallenges.mfas[0];
      if (mfaType === 'otp') {
        let choiceData = [];
        Object.keys(deliveryOptions).forEach((key) => {
          choiceData.push({
            label: key,
            value: deliveryOptions[key],
            color: `#${
              vendor && vendor.textColor ? vendor.textColor : '000000'
            }`,
          });
        });
        this.setState({ choiceData });
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { bills, vendor, error } = this.props;

    if (bills !== prevProps.bills && bills) {
      if (bills.statusData === 'phone_validation') {
        this.props.navigation.navigate('Cid');
      } else if (bills.status === 'bill_created') {
        this.props.navigation.navigate('Profile');
      } else if (bills.status === 'bill_processing') {
        this.setState({ statusText: 'Processing' });
        this.props.updateBillStatus({
          vendorId: vendor.id,
          vendorName: vendor.name,
          status: 'updating',
        });
        setTimeout(() => {
          this.setState({ posting: false });
          this.props.navigation.navigate('Profile');
        }, 4000);
      } else if (bills.status === 'bill_exsist') {
        this.setState({ statusText: 'Bill Exist' });
        setTimeout(() => {
          this.setState({ posting: false });
          this.props.navigation.navigate('Profile');
        }, 3000);
      } else if (bills.status === 'fail') {
        if (error === 'update_error') {
          this.setState({ statusText: 'MFA Fail' });
          setTimeout(() => {
            this.setState({ posting: false });
            this.props.navigation.navigate('Profile');
          }, 3000);
        } else {
          this.setState({ statusText: 'Auth Fail' });
          setTimeout(() => {
            this.setState({ posting: false });
          }, 3000);
        }
      }
    }
  }

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

  onBillPost = () => {
    this.setState({ posting: true, statusText: '' });

    const { vendor, billsPost, vendorSave } = this.props;

    // vendorSave({
    //   login: vendorId,
    //   password: vendorPassword,
    // });

    const postBody = {
      vendorId: vendor.id,
      credentials: vendor.credentials.map((item) => {
        if (item.name === ssnLabel) {
          return {
            name: item.name,
            stringValue: this.state[item.name].replace(/-/g, ''),
          };
        } else if (item.name === dateLabel) {
          return {
            name: item.name,
            stringValue: this.state[item.name].replace(/\//g, ''),
          };
        }
        return {
          name: item.name,
          stringValue: this.state[item.name],
        };
      }),
    };

    billsPost(postBody);
  };

  onBillUpdate = () => {
<<<<<<< HEAD
    this.setState({ posting: true, statusText: '' });
    const { vendor } = this.props;
    const { mfaChallenges, billId } = vendor;
    const { mfaId, mfas } = mfaChallenges;
    const { mfaType, order } = mfas[0];
=======
    this.setState({posting: true, statusText: ''});
    const {vendor} = this.props;
    const {mfaChallenges, billId} = vendor;
    const {mfaId, mfas} = mfaChallenges;
    const {mfaType, order} = mfas[0];
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    const {choiceData, mfaResponse} = this.state;

    let message = '';
    if (mfaType === 'question') {
      message = mfaResponse;
    } else if (mfaType === 'otp') {
      const selectedRadio = choiceData.find((e) => e.selected === true);
      message = selectedRadio.value;
    }

    const answer = {
      mfaId: mfaId,
      mfaAnswers: [
        {
          order: order,
          message: message,
        },
      ],
    };

    this.props.billUpdate({
      billId: billId,
      answer: answer,
    });
  };

  renderCredentials = () => {
    const { vendor } = this.props;
    const credentials = vendor.credentials;

    const textColor = `#${
      vendor && vendor.textColor ? vendor.textColor : '000000'
    }`;

    if (!credentials || credentials.length < 2) {
      return (
<<<<<<< HEAD
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: textColor, textAlign: 'center' }}>
=======
        <View style={{marginTop: 20}}>
          <Text style={{color: textColor, textAlign: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            Please contact BillZero for this biller
          </Text>
        </View>
      );
    }

    const nextHidden =
      credentials.filter(
<<<<<<< HEAD
        item =>
          this.state[item.name] == undefined || this.state[item.name] == ''
=======
        (item) =>
          this.state[item.name] == undefined || this.state[item.name] == '',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      ).length > 0;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginLeft: 10,
          marginTop: 10,
<<<<<<< HEAD
        }}
      >
        {credentials.map(item => {
=======
        }}>
        {credentials.map((item) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          if (item.name === 'Password' || item.name === 'Password:') {
            return (
              <View
                key={item.name}
                style={{
                  marginTop: -10,
                  width: '100%',
                  height: 80,
                  alignItems: 'center',
                  flexDirection: 'row',
<<<<<<< HEAD
                }}
              >
=======
                }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <Input
                  placeholder={item.name}
                  inputStyle={{
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    backgroundColor: '#d6d6d6',
                    textAlign: 'center',
                    borderRadius: 2,
                    fontFamily: OCRFont,
                    fontSize: 38,
                    letterSpacing: -6,
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    marginTop: 20,
<<<<<<< HEAD
                  }}
                  secureTextEntry={this.state.hideVendorPass}
                  //value={this.state[item.name]}
                  placeholder="password"
                  onChangeText={text => this.setState({ [item.name]: text })}
                />
                <Text
                  onPress={() =>
                    this.setState({
                      hideVendorPass: !this.state.hideVendorPass,
                    })
                  }
                  style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: textColor,
                    marginTop: 64,
                    marginLeft: -55,
                    marginBottom: -5,
                  }}
                >
=======
                  }}
                  secureTextEntry={this.state.hideVendorPass}
                  //value={this.state[item.name]}
                  placeholder="password"
                  onChangeText={(text) => this.setState({[item.name]: text})}
                />
                <Text
                  onPress={() =>
                    this.setState({hideVendorPass: !this.state.hideVendorPass})
                  }
                  style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: textColor,
                    marginTop: 64,
                    marginLeft: -55,
                    marginBottom: -5,
                  }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  {this.state.hideVendorPass ? 'show' : 'hide'}
                </Text>
                {/* <Icon
                    name={this.state.hideVendorPass ? 'visibility-off' : 'visibility'}
                    size={30}
                    color="#9E9E9E"
                    onPress={() =>
                      this.setState({hideVendorPass: !this.state.hideVendorPass})
                    }
                  /> */}
              </View>
            );
          } else if (item.codeList === true) {
<<<<<<< HEAD
            <View style={{ marginTop: 0, width: '100%' }}>
              <RNPickerSelect
                key={item.name}
                onValueChange={value => this.setState({ [item.name]: value })}
                value={this.state[item.name]}
                items={item.codelistItems.map(code => ({
=======
            <View style={{marginTop: 0, width: '100%'}}>
              <RNPickerSelect
                key={item.name}
                onValueChange={(value) => this.setState({[item.name]: value})}
                value={this.state[item.name]}
                items={item.codelistItems.map((code) => ({
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  label: code.text,
                  value: code.value,
                }))}
                style={{
                  inputIOS: {
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    borderRadius: 4,
                    backgroundColor: '#d6d6d6',
                    fontFamily: OCRFont,
                    fontSize: 22,
                    color: 'black',
                    textAlign: 'center',
                  },
                  inputAndroid: {
                    backgroundColor: '#d6d6d6',
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    borderRadius: 4,
                    fontSize: 18,
                    fontFamily: OCRFont,
                    color: 'black',
                    height: 50,
                    marginLeft: 10,
                    marginRight: 10,
                  },
                }}
<<<<<<< HEAD
                placeholder={{ label: item.name, value: '' }}
=======
                placeholder={{label: item.name, value: ''}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              />
            </View>;
          } else if (item.name === ssnLabel) {
            return (
              <View
<<<<<<< HEAD
                style={{ marginTop: 20, width: '100%', textColor: '#00ff00' }}
              >
=======
                style={{marginTop: 20, width: '100%', textColor: '#00ff00'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <TextInputMask
                  key={item.name}
                  type={'custom'}
                  keyboardType="phone-pad"
<<<<<<< HEAD
                  options={{ mask: '999-99-9999' }}
                  placeholder="ssn"
                  value={this.state[item.name]}
                  onChangeText={text => this.setState({ [item.name]: text })}
=======
                  options={{mask: '999-99-9999'}}
                  placeholder="ssn"
                  value={this.state[item.name]}
                  onChangeText={(text) => this.setState({[item.name]: text})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    backgroundColor: '#d6d6d6',
                    textAlign: 'center',
                    borderRadius: 1,
                    fontFamily: OCRFont,
                    fontSize: 38,
                    //borderBottomWidth: 0,
                    marginLeft: 10,
                    marginRight: 10,
                    //placeholderTextColor: '#ffffff',
                    //color: 'red',
                    textColor: 'red',
                    //opacity: 100
                  }}
                />
              </View>
            );
          } else if (item.name === dateLabel) {
            return (
<<<<<<< HEAD
              <View style={{ marginTop: 20, width: '100%' }}>
                <TextInputMask
                  key={item.name}
                  type="datetime"
                  options={{ format: 'MM/DD/YYYY' }}
                  placeholder="birth date"
                  value={this.state[item.name]}
                  onChangeText={text => this.setState({ [item.name]: text })}
=======
              <View style={{marginTop: 20, width: '100%'}}>
                <TextInputMask
                  key={item.name}
                  type="datetime"
                  options={{format: 'MM/DD/YYYY'}}
                  placeholder="birth date"
                  value={this.state[item.name]}
                  onChangeText={(text) => this.setState({[item.name]: text})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    backgroundColor: '#d6d6d6',
                    textAlign: 'center',
                    borderRadius: 1,
                    fontFamily: OCRFont,
                    fontSize: 38,
                    //borderBottomWidth: 0,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
              </View>
            );
          } else {
            return (
<<<<<<< HEAD
              <View style={{ marginTop: 0, width: '100%' }}>
=======
              <View style={{marginTop: 0, width: '100%'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <Input
                  key={item.name}
                  //placeholder={item.name}
                  placeholder="username"
                  inputStyle={{
                    borderWidth: 1,
                    borderColor: '#6d6d6d',
                    backgroundColor: '#d6d6d6',
                    textAlign: 'center',
                    borderRadius: 1,
                    fontFamily: OCRFont,
                    fontSize: 38,
                    letterSpacing: -6,
                    width: 200,
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                  }}
                  autoCapitalize={'none'}
                  autoCompleteType={'off'}
                  value={this.state[item.name]}
<<<<<<< HEAD
                  onChangeText={text => this.setState({ [item.name]: text })}
=======
                  onChangeText={(text) => this.setState({[item.name]: text})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                />
              </View>
            );
          }
        })}

        {/* <Input
          placeholder={credentials[0].name}
          inputStyle={{
            borderWidth: 1,
            borderColor: '#d6d6d6',
            backgroundColor: '#d6d6d6',
            textAlign: 'center',
            borderRadius: 10,
            fontFamily: SFProFontName
          }}
          inputContainerStyle={{
            marginBottom: 10,
            borderBottomWidth: 0,
          }}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoFocus
          value={vendorId}
          onChangeText={text => this.setState({vendorId: text})}
        /> */}

<<<<<<< HEAD
        <View style={{ alignItems: 'center', marginBottom: 5 }}>
=======
        <View style={{alignItems: 'center', marginBottom: 5}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              textAlign: 'center',
              color: textColor,
              fontFamily: SFProFontName,
              marginTop: 10,
              fontStyle: 'italic',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            zero sensitive data stored | 256-bit encrypted
          </Text>
        </View>

<<<<<<< HEAD
        <View style={{ alignItems: 'center' }}>
=======
        <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {!nextHidden && (
            <Button
              title={'Next '}
              titleStyle={{
                color: textColor,
                fontFamily: SPProFontSemiBold,
                fontSize: 30,
                fontWeight: 'bold',
              }}
              // loading={loading}
              // loadingProps={{color: textColor}}
              onPress={this.onBillPost}
              buttonStyle={{
                height: 60,
                backgroundColor: 'transparent',
              }}
              iconRight
              icon={{
                name: 'angle-right',
                type: 'font-awesome',
                color: textColor,
                size: 40,
              }}
            />
          )}
        </View>
      </View>
    );
  };

  renderMFA = () => {
    const {vendor, loading} = this.props;
    const {mfaChallenges} = vendor;
    const {mfas} = mfaChallenges;
    if (!mfas || mfas.length == 0) {
      return <View></View>;
    }

    const {mfaType, challenge, deliveryOptions} = mfas[0];

    const { mfaResponse } = this.state;
    const textColor = `#${
      vendor && vendor.textColor ? vendor.textColor : '000000'
    }`;

    return (
      <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 0,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {mfaType === 'question' && (
            <>
              <Text
                style={{
                  color: textColor,
                  fontFamily: SFProFontName,
                  fontSize: 18,
                  textAlign: 'center',
                }}
              >
                {challenge}
              </Text>
              <Input
                placeholder={'Answer'}
                inputStyle={{
                  borderWidth: 1,
                  borderColor: '#d6d6d6',
                  backgroundColor: '#d6d6d6',
                  textAlign: 'center',
                  borderRadius: 10,
                  fontFamily: SFProFontName,
                  marginTop: 10,
                }}
                inputContainerStyle={{
                  marginBottom: 10,
                  borderBottomWidth: 0,
                  marginLeft: 50,
                  marginRight: 50,
                }}
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                value={mfaResponse}
<<<<<<< HEAD
                onChangeText={text => this.setState({ mfaResponse: text })}
=======
                onChangeText={(text) => this.setState({mfaResponse: text})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              />
            </>
          )}
          {mfaType === 'otp' && this.state.choiceData.length > 0 && (
            <View style={{ marginTop: 10 }}>
              <RadioGroup
                radioButtons={this.state.choiceData}
<<<<<<< HEAD
                onPress={data => this.setState({ choiceData: data })}
=======
                onPress={(data) => this.setState({choiceData: data})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              />
            </View>
          )}
        </View>

        <View style={{ alignItems: 'center', marginTop: 5 }}>
          {(mfaType === 'otp' || mfaResponse !== '') && (
            <Button
              title={'Next '}
              titleStyle={{
                color: textColor,
                fontFamily: SPProFontSemiBold,
                fontSize: 30,
                fontWeight: 'bold',
              }}
              loading={loading}
              loadingProps={{ color: textColor }}
              onPress={this.onBillUpdate}
              buttonStyle={{
                height: 60,
                width: 150,
                backgroundColor: 'transparent',
              }}
              iconRight
              icon={{
                name: 'angle-right',
                type: 'font-awesome',
                color: textColor,
                size: 40,
              }}
            />
          )}
        </View>
      </>
    );
  };

  renderModalBody = () => {
    return (
      <View style={styles.modalBody}>
        <CheckBox
          title="Can't Login"
          checked={this.state.helpCheck1}
          onPress={() =>
            this.setState({
              helpCheck1: true,
              helpCheck2: false,
              helpCheck3: false,
            })
          }
        />
        <CheckBox
          title="Multi-Factor Authentication Won't Work"
          checked={this.state.helpCheck2}
          onPress={() =>
            this.setState({
              helpCheck1: false,
              helpCheck2: true,
              helpCheck3: false,
            })
          }
        />
        <CheckBox
          title="Other Issue"
          checked={this.state.helpCheck3}
          onPress={() =>
            this.setState({
              helpCheck1: false,
              helpCheck2: false,
              helpCheck3: true,
            })
          }
        />
        <TextInput
          editable={this.state.helpCheck3}
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
                subject = "Vendor Can't Login";
              } else if (this.state.helpCheck2) {
                subject = "Vendor Multi-Factor Authentication Won't Work";
              } else {
                subject = 'Vendor Other Issue';
                message = this.state.helpText;
              }
              await this.props.sendHelp(subject, message);

              this.toggleModal(false);

              this.setState({
                helpSubmit: true,
                helpSubmitText: 'Your issue has been submitted',
              });
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
    const {vendor} = this.props;
    const {status, mfaChallenges} = vendor;

    const bgColor = `#${vendor && vendor.bgColor ? vendor.bgColor : 'ffffff'}`;

    // const logoURI = vendor.logo ? `https://sandbox.finovera.com/static_3.0/resources/images/logos/86x50/${vendor.logo}` : vendor.imagex;

    return (
      <View style={{flex: 1, backgroundColor: bgColor}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 10,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <ImageWithLoader
            source={{ uri: vendor.imagex }}
            width={375}
            height={75}
          />
          {/* <Image
            style={{
              // width: vendor.logo ? 86 : 375,
              // height: vendor.logo ? 50 : 75,
              width: 375,
              height: 75
            }}
            source={{uri: vendor.imagex}}
            PlaceholderContent={<ActivityIndicator size={75} />}
            placeholderStyle={{
              backgroundColor: 'transparent'
            }}
          /> */}
          {/* <Image
            style={{
              width: 375,
              height: 75,
            }}
            resizeMode={'contain'}
            source={{uri: vendor.imagex}}
            backgroundColor={bgColor}
          /> */}
        </View>

        {mfaChallenges ? this.renderMFA() : this.renderCredentials()}

        {this.state.modalVisible && this.renderModal()}

        {this.state.posting && (
          <BillStatusModal
            title="Acquiring Your Bill"
            firstLine="Connecting..."
            secondLine={this.state.statusText}
          />
        )}

        <MsgModal
          isVisible={this.state.helpSubmit}
          onBack={() => this.setState({ helpSubmit: false })}
          title="Status"
          body={this.state.helpSubmitText}
          onOK={() => this.setState({ helpSubmit: false })}
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
    height: 310,
    backgroundColor: 'white',
    marginTop: -60,
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
  vendor: state.vendor.data,
  bills: state.bills.data,
  loading: state.bills.loading,
  error: state.bills.error,
});

export default connect(mapStateToProps, {
  billsPost,
  billUpdate,
  vendorSave,
  sendHelp,
  updateBillStatus,
})(VendorScreen);
