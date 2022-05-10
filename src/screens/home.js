import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  FlatList,
  PermissionsAndroid,
} from 'react-native';

import {Image, Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

import Modal from 'react-native-modal';
import Contacts from 'react-native-contacts';
import moment from 'moment-timezone';

<<<<<<< HEAD
import {
  SFProFontName,
  SPCompactFontName,
  OCRFont,
  screenWidth,
  screenHeight,
  platform,
} from '../app';

import {
  ImageWithLoader,
  AvatarWithLoader,
  Loading,
} from '../components/Loader';
import { isIPhoneX, isBigScreen } from '../components/deviceInfo';
=======
import {SFProFontName, SPCompactFontName, screenWidth, platform} from '../app';

import {ImageWithLoader, AvatarWithLoader, Loading} from '../components/Loader';
import {isIPhoneX, isBigScreen} from '../components/deviceInfo';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {defaultUserImage, defaultUserAvatars} from '../app';

import {
  fetchUser,
<<<<<<< HEAD
  selectUserByName,
=======
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  setUserToken,
  updateUser,
  sendInvite,
} from '../redux/actions/user';
<<<<<<< HEAD
import {
  setVendorCategory,
  getVendor,
  selectVendor,
} from '../redux/actions/vendors';
import { selectUserBillById } from '../redux/actions/bill';
import { getPayRule } from '../redux/actions/payments';
=======
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {
  setVendorCategory,
  getVendor,
  selectVendor,
} from '../redux/actions/vendors';
import {selectUserBillById} from '../redux/actions/bill';
import {getPayRule} from '../redux/actions/payments';

import {isProfileComplete} from '../components/ProfileCompleteModal';
import {NoBillsModal} from '../components/MoneyModal';
import InviteModal from '../components/InviteModal';

import {getDims, spacing} from '../components/Assets';

const axios = require('axios');

import branch from 'react-native-branch';

<<<<<<< HEAD
const placeholderStyle = { backgroundColor: 'transparent' };
=======
const placeholderStyle = {backgroundColor: 'transparent'};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
const blueColor = '#0c74dc';

const aiArray = [
  'Add all your Bills for 100% Bill Coverage',
  'Text Money Requests to All your Contacts',
  'Hit Up all those IOUSs with Money Requests',
  'Financial Freedom starts w Smart Management',
  'Share your Bill Links across Social Media',
  'Motion Creates Emotion so Share Your Bill Link',
  'Financial Management starts with Lowering Risk',
  'Increase your PAYS by SOCIALIZING your BILLS',
  'You can ALWAYS ask They can ONLY say NO',
  'Lower Your Bills with Pays for More Pocket $',
];

class HomeScreen extends Component {
  state = {
    dims: getDims(this.props.user),
    askMoney: false,

    noBillModal: false,
    requestModal: false,
    requestDone: false,

    billSelectModal: false,
    recipientSelectModal: false,

    contacts: [],

    selectedContact: null,
    selectedBill: null,

    inviteModalVisible: false,
    aiText: '',
  };

  static navigationOptions = {
    header: null,
  };

<<<<<<< HEAD
  _navigateToUser = async params => {
    console.log('===params: ', params);
    if (!params || !params.bzdata) {
      return;
    }

    this.props.getPayRule();
    const { userName, billId, userId } = params.bzdata;
    const vendor = await this.props.getVendor(userId);
    if (vendor) {
      this.props.selectVendor(vendor);
      this.props.navigation.navigate('Vendor');
    }

    if (userName) {
      const status = await this.props.selectUserByName(userName);
      console.log({ vendor });
      if (status === 'fail') {
        return;
      }
      if (billId && billId !== '') {
        this.props.selectUserBillById(userName, billId);
      }
      this.props.navigation.navigate('SelectedUser');
    }
  };

=======
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  componentDidMount() {
    this.setState({
      aiText: aiArray[Math.floor(Math.random() * aiArray.length)],
    });
<<<<<<< HEAD
    branch.subscribe(({ error, params, uri }) => {
      if (error) {
        return;
      }

      this._navigateToUser(params);
    });
=======
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    // console.warn(screenWidth, screenHeight);
    // console.warn("Model: ", DeviceInfo.getModel());
    // console.warn("Device Id: ", DeviceInfo.getDeviceId());

    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 3000);

    // Linking.getInitialURL().then((url) => {
    //   if (url) {
    //     console.log('Initial url is: ' + url);
    //   }
    // }).catch(err => console.error('An error occurred', err));

    const {user, userStatus, fetchUser} = this.props;

    // fetchUser();
    // console.log('home');

    // this.props.navigation.navigate('Sms');

    // First time, load user (guest user) from API
    if (user === null) {
      // this.props.setUserToken(guestToken);
      fetchUser();
    } else {
      if (user.verified === 'false' && userStatus === 'phone_validation') {
        // this.props.navigation.replace('Cid')
        this.props.navigation.navigate('Cid');
      }
      if (
        user.verified === 'false' &&
        userStatus === 'phone validation pin code sent'
      ) {
        this.props.navigation.navigate('Sms');
      }

      const {
        userName,
        address: {postal_code},
      } = user;

      if (
        userName !== 'guest' &&
        user.verified === 'true' &&
        (postal_code === null || postal_code === '')
      ) {
        this.props.navigation.navigate('ProfileSetup');
      }

      // if (userStatus === 'verified-profile') {

      //   const { profileImage, userName, address: { postal_code, state, city }, firstName, lastName } = user;

      //   if (profileImage && userName && postal_code && state && firstName && lastName && city) {
      //     this.props.navigation.navigate('Home');
      //   }

      fetchUser();
    }
  }

  renderLogoImage = () => {
    const {dims} = this.state;
    return (
      <>
        {spacing(dims.spacing1)}
        <ImageWithLoader
          source={dims.logoSource}
          width={dims.logoWidth}
          height={dims.logoHeight}
          disableLoading
        />
      </>
    );
  };

  renderConnectBillImage = () => {
    const {dims} = this.state;
    return (
      <ImageWithLoader
        source={dims.connectBillSource}
        width={dims.connectBillWidth}
        height={dims.connectBillHeight}
        onPress={() => this.props.navigation.navigate('Vendors')}
        disableLoading
      />
    );
  };

  renderEmptyBill = (val) => {
    const {dims} = this.state;
    if (val) {
      return (
        <ImageWithLoader
          source={{uri: val}}
          width={dims.emptyBillWidth}
          height={dims.emptyBillHeight}
          refresh
          rounded
        />
      );
    }
    return (
      <Image
        source={require('../images/new/3x-predef-CIRCLE-SELECT_IPH.png')}
        style={{
          width: dims.emptyBillWidth,
          height: dims.emptyBillHeight,
        }}
        placeholderStyle={placeholderStyle}
      />

      // <ImageBackground
      //   source={dims.emptyBillSource}
      //   style={{
      //     width: dims.emptyBillWidth,
      //     height: dims.emptyBillHeight,
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //   }}>
      //   {val && (
      //     <ImageWithLoader
      //       source={{uri: val}}
      //       width={dims.emptyFillWidth}
      //       height={dims.emptyFillHeight}
      //       refresh
      //     />
      //   )}
      // </ImageBackground>
    );
  };

  renderMyBills = () => {
    let mobile = null,
      car = null,
      loans = null,
      internet = null,
      credit = null,
      insurance = null;
    if (this.props.user) {
      const {mainbills} = this.props.user;
      if (mainbills) {
        mobile = mainbills.mobile;
        car = mainbills.car;
        loans = mainbills.loans;
        internet = mainbills.internet;
        credit = mainbills.credit;
        insurance = mainbills.insurance;
      }
    }

    const {dims} = this.state;

    const emptyBillStyle = {
      color: 'black',
      fontFamily: SFProFontName,
      fontWeight: 'bold',
      fontSize: dims.emptyFontSize,
      marginBottom: 5,
      textAlign: 'center',
    };

    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: dims.emptyMargin,
            marginRight: dims.emptyMargin,
<<<<<<< HEAD
          }}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
=======
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <TouchableOpacity
              onPress={() => {
                if (mobile) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(1);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>Mobile Phone</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>Mobile Phone</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(mobile)}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (car) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(3);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>Automobile</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>Automobile</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(car)}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (internet) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(2);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>Internet</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>Internet</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(internet)}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: dims.emptyMargin,
            marginRight: dims.emptyMargin,
            marginTop: 20,
<<<<<<< HEAD
          }}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
=======
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <TouchableOpacity
              onPress={() => {
                if (loans) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(7);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>School</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>School</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(loans)}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (credit) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(8);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>Credit Card</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>Credit Card</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(credit)}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (insurance) {
                  this.props.navigation.navigate('Profile');
                } else {
                  this.props.setVendorCategory(5);
                  this.props.navigation.navigate('Vendors');
                }
<<<<<<< HEAD
              }}
            >
              <Text style={emptyBillStyle}>Insurance</Text>
              <View style={{ alignItems: 'center' }}>
=======
              }}>
              <Text style={emptyBillStyle}>Insurance</Text>
              <View style={{alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.renderEmptyBill(insurance)}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  renderPayBillImage = () => {
    const {dims} = this.state;
    return (
      <ImageWithLoader
        source={dims.payBillSource}
        width={dims.payBillWidth}
        height={dims.payBillHeight}
        onPress={() => this.props.navigation.navigate('Users')}
        disableLoading
      />
    );
  };

  // USER SECTION ==========================================================

  renderUser = () => {
    const {user, loading} = this.props;
    const {dims} = this.state;

    if (loading) {
      return (
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 25,
          }}
        >
          <Loading size={dims.profileSize} />
        </View>
      );
    }

    // USER ACCOUNT SECTION n8 04.12.2021 ======================================
    if (!user) {
      return null;
    }

    const {userName, profileImage} = user;

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Profile')}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'black',
            borderRadius: 0,
            padding: 0,
            //paddingTop: 40,
            //marginTop: 40,
            //paddingVertical: 10
          }}
        >
          <AvatarWithLoader
            size={dims.profileSize}
            source={
              profileImage
                ? {
                    uri: `${profileImage}?random=${moment().format(
<<<<<<< HEAD
                      'YYYYMMDDHHmm'
=======
                      'YYYYMMDDHHmm',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    )}`,
                  }
                : defaultUserAvatars[
                    Math.floor(Math.random() * defaultUserAvatars.length)
                  ]
            }
            onPress={() => this.props.navigation.navigate('Profile')}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 1.5,
                marginRight: -1.4,
                fontFamily: SPCompactFontName,
                fontSize: 27,
                color: blueColor,
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
                color: blueColor,
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
        </View>
      </TouchableOpacity>
    );
  };

  renderMain = () => {
    const {dims, askMoney} = this.state;

    //console.log("here");

    const styles = StyleSheet.create({
      aiBox: {
        //flex: 1,
        //flexDirection: 'row',
        width: screenWidth,
        height: 90,
        //borderColor: 'lightgray',
        //marginTop: isIPhoneX() ? 20 : 5,     //11 : 6-8-12MAX

        marginTop: isBigScreen() ? 40 : 5, //BIG : SMALL

        borderWidth: 0,
        resizeMode: 'contain',
        //marginBottom: isIPhoneX() ? 15 : 0    //11 : 6-8-12MAX
        marginBottom: isBigScreen() ? 25 : 0, //BIG : SMALL
      },
    });

    return (
      <>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            //marginTop: 100,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {spacing(dims.spacing2)}
          {this.renderConnectBillImage()}
          {spacing(dims.spacing4)}
          {this.renderMyBills()}
          {spacing(dims.spacing5)}

          <View style={styles.aiBox}>
            <Image
              source={require('../images/new/3x-AI-cta-bar-empty.png')}
              style={{
                //flex: 1,
                //flexDirection: 'column',
                height: 75,
                //width: screenWidth,
                //resizeMode: 'stretch',
                //marginTop: 0,
                paddingVertical: 0,
                borderColor: 'red',
                borderWidth: 0,
              }}
              placeholderStyle={placeholderStyle}
            />
            <TouchableOpacity onPress={this.handleMoneyAskClick}>
              <Text
                style={{
                  borderColor: 'red',
                  borderWidth: 0,
                  color: 'red',
                  top: -34,
                  height: 30,
                  fontFamily: SFProFontName,
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                  justifyContent: 'center',
<<<<<<< HEAD
                }}
              >
=======
                }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                {this.state.aiText}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: isIPhoneX() ? 0 : 0,
              //money section
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {askMoney
              ? this.renderMoneyRequestSection()
              : this.renderMoneySection()}
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: dims.profileBottom,
            alignSelf: 'center',
            alignItems: 'center',
          }}
        >
          {this.renderUser()}
        </View>

        <View
          style={{
            position: 'absolute',
            right: dims.karmaRight,
            bottom: dims.karmaBottom,
          }}
        >
          <ImageWithLoader
            source={dims.karmaSource}
            disableLoading
            width={dims.karmaWidth}
            height={dims.karmaHeight}
            onPress={() => this.props.navigation.navigate('QR')}
          />
        </View>

        <View
<<<<<<< HEAD
          style={{ position: 'absolute', bottom: dims.inviteBottom, left: 30 }}
        >
=======
          style={{position: 'absolute', bottom: dims.inviteBottom, left: 30}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <ImageWithLoader
            //source={dims.gameSource}
            source={require('../images/new/3x-daily-game-btn.png')}
            disableLoading
            width={0} //90
            height={0} //64
            onPress={() => this.setState({inviteModalVisible: true})}
          />
        </View>

        {this.state.inviteModalVisible && (
          <InviteModal
            hideModal={() => this.setState({inviteModalVisible: false})}
            text=""
            title="Invite"
            buttonTitle="SEND NOW"
          />
        )}
      </>
    );
  };

  renderANON = () => {
    const {dims} = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        {spacing(dims.spacing2)}
        {this.renderConnectBillImage()}
        {spacing(dims.spacing4)}
        {this.renderMyBills()}
        {spacing(dims.spacing5)}
        {this.renderMoneySection()}

        <View
          style={{
            position: 'absolute',
            right: dims.karmaRight,
            bottom: dims.karmaBottom,
          }}
        >
          <ImageWithLoader
            source={dims.karmaSource}
            disableLoading
            width={dims.karmaWidth}
            height={dims.karmaHeight}
            onPress={() => this.props.navigation.navigate('QR')}
          />
        </View>
      </View>
    );
  };

  handleMoneyAskClick = () => {
    this.setState({
      aiText: aiArray[Math.floor(Math.random() * aiArray.length)],
    });

    if (!this.props.user) {
      return;
    }
    const {bills} = this.props.user;
    if (!bills || bills.length == 0) {
      this.setState({noBillModal: true});
      return;
    }
<<<<<<< HEAD
    this.setState({ askMoney: true });
=======
    this.setState({askMoney: true});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };

  renderMoneySection = () => {
    const {dims} = this.state;
    return (
      <>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Users')}>
          <Image
            source={dims.moneySource}
            style={{
              width: dims.payBillWidth,
              height: dims.payBillHeight,
            }}
            placeholderStyle={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
        <View
<<<<<<< HEAD
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
        >
=======
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Users')}>
            <Image
              source={require('../images/new/3x-predef-CIRCLE-PAY_IPH.jpg')}
              style={{
                width: dims.emptyBillWidth,
                height: dims.emptyBillWidth,
              }}
              placeholderStyle={placeholderStyle}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 30, marginRight: 30}}>
            <ImageWithLoader
              source={require('../icons/3x-chevron-right.png')}
              width={36}
              height={70}
              disableLoading
            />
          </View>
          <TouchableOpacity onPress={this.handleMoneyAskClick}>
            <Image
              source={require('../images/new/3x-predef-CIRCLE-ASK_IPH.jpg')}
              style={{
                width: dims.emptyBillWidth,
                height: dims.emptyBillWidth,
              }}
              placeholderStyle={placeholderStyle}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  handleRequestClick = () => {
<<<<<<< HEAD
    this.setState({ requestModal: true });
    const phones = this.state.selectedContact.phoneNumbers
      ? this.state.selectedContact.phoneNumbers.map(item => item.number)
      : [];
    this.props.sendInvite(
      phones,
      `Verified Bill $ Request @${this.props.user.userName}\n${this.state.selectedBill.dl}`
=======
    this.setState({requestModal: true});
    const phones = this.state.selectedContact.phoneNumbers
      ? this.state.selectedContact.phoneNumbers.map((item) => item.number)
      : [];
    this.props.sendInvite(
      phones,
      `Verified Bill $ Request @${this.props.user.userName}\n${this.state.selectedBill.dl}`,
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    );
    setTimeout(() => {
      this.setState({requestDone: true});
      setTimeout(() => {
        this.setState({
          requestModal: false,
          selectedContact: null,
          selectedBill: null,
          requestDone: false,
        });
      }, 1000);
    }, 2000);
  };

  loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.log(err);
        return;
      }
      contacts.sort((a, b) => a.givenName > b.givenName);
      this.setState({contacts});
    });
  };

  handleContactSelectClick = () => {
    if (platform === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'BillZero app would like to view your contacts.',
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
<<<<<<< HEAD
    this.setState({ recipientSelectModal: true });
=======
    this.setState({recipientSelectModal: true});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  };

  renderMoneyRequestSection = () => {
    const {dims, selectedBill, selectedContact} = this.state;
    const {bills} = this.props.user;

    const enabled = selectedBill && selectedContact;

    let daysDiff = 0;

    if (selectedBill) {
      daysDiff = moment(selectedBill.dueDate).diff(moment(), 'day');
    }

    return (
      <>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              askMoney: false,
              selectedBill: false,
              selectedContact: null,
            })
<<<<<<< HEAD
          }
        >
=======
          }>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Image
            source={dims.moneyRequestSource}
            style={{
              width: dims.payBillWidth,
              height: dims.payBillHeight,
            }}
            placeholderStyle={{backgroundColor: 'transparent'}}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <TouchableOpacity
            style={{alignItems: 'center', flex: 2}}
            onPress={() => this.setState({billSelectModal: true})}>
            <Image
              source={
                selectedBill
<<<<<<< HEAD
                  ? { uri: selectedBill.image }
=======
                  ? {uri: selectedBill.image}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  : require('../images/new/3x-predef-CIRCLE-SELECT_IPH.png')
              }
              style={{
                width: dims.emptyBillWidth,
                height: dims.emptyBillWidth,
                borderRadius: 42,
              }}
              placeholderStyle={placeholderStyle}
            />
            <Text
              style={{
                marginTop: 5,
                fontFamily: SFProFontName,
                fontSize: 16,
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {selectedBill
                ? `$${Math.ceil(selectedBill.balance)}/${
                    daysDiff >= 0 ? `${daysDiff}D DUE` : `${-daysDiff}D LATE`
                  }`
                : 'Bill'}
            </Text>
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', marginTop: -24}}>
            <ImageWithLoader
              source={require('../icons/3x-chevron-right.png')}
              width={36}
              height={70}
              disableLoading
            />
          </View>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 2}}
            onPress={this.handleContactSelectClick}>
            {selectedContact ? (
              <Avatar
                rounded
                title={selectedContact.givenName.slice(0, 1).toUpperCase()}
                size={dims.emptyBillWidth}
<<<<<<< HEAD
                containerStyle={{ backgroundColor: blueColor }}
                source={
                  selectedContact.hasThumbnail
                    ? { uri: selectedContact.thumbnailPath }
=======
                containerStyle={{backgroundColor: blueColor}}
                source={
                  selectedContact.hasThumbnail
                    ? {uri: selectedContact.thumbnailPath}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    : null
                }
              />
            ) : (
              <Image
                source={require('../images/new/3x-predef-CIRCLE-SELECT_IPH.png')}
                style={{
                  width: dims.emptyBillWidth,
                  height: dims.emptyBillWidth,
                  borderRadius: 42,
                }}
                placeholderStyle={placeholderStyle}
              />
            )}
            <Text
              style={{
                marginTop: 5,
                fontFamily: SFProFontName,
                fontSize: 16,
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {selectedContact
                ? selectedContact.givenName.substring(0, 12)
                : 'Recipient'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {(selectedBill || selectedContact) && (
            <TouchableOpacity
              style={{
                zIndex: 1,
                position: 'absolute',
                top: isBigScreen() ? -98 : -88,
                alignItems: 'center',
                left: isBigScreen() ? 38 : 220,
                padding: 0,
              }}
              onPress={() =>
<<<<<<< HEAD
                this.setState({ selectedBill: null, selectedContact: null })
              }
            >
=======
                this.setState({selectedBill: null, selectedContact: null})
              }>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <Image
                source={require('../images/new/3x-send_money_ask-close-btn.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
                placeholderStyle={placeholderStyle}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{
              zindex: 1,
              alignItems: 'center',
              top: isBigScreen() ? -100 : -90,
              marginLeft: -65,
              width: 50,
            }}
            onPress={this.handleRequestClick}
            disabled={!enabled}>
            <Image
              source={
                enabled
                  ? require('../images/new/3x-REQUEST_NOW_V3_IPH.png')
                  : require('../images/new/3x-REQUEST_NOW-OFF_V3_IPH.png')
              }
              style={{
                width: 100,
                height: 18,
                borderColor: 'red',
              }}
              placeholderStyle={{backgroundColor: 'transparent'}}
            />
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={this.state.requestModal}
          animationIn="fadeInUp"
          animationInTiming={500}
          animationOut="fadeOutDown"
          animationOutTiming={500}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={
                this.state.requestDone
                  ? require('../images/new/3x-DONE-WHITE-FADE_IPH.png')
                  : require('../images/new/3x-SENDING-WHITE-FADE_IPH.png')
              }
              style={{
                width: 414,
                height: 38,
                backgroundColor: 'transparent',
              }}
              placeholderStyle={placeholderStyle}
            />
          </View>
        </Modal>

        <Modal
          isVisible={this.state.billSelectModal}
          onBackdropPress={() => this.setState({billSelectModal: false})}
          animationIn="fadeInUp"
          animationInTiming={500}
          animationOut="fadeOutDown"
          animationOutTiming={500}>
          <View style={{width: 150, alignItems: 'center'}}>
            <FlatList
              data={bills}
              renderItem={({item}) => {
                const days = moment(item.dueDate).diff(moment(), 'day');
                return (
                  <TouchableOpacity
<<<<<<< HEAD
                    style={{ marginBottom: 20 }}
=======
                    style={{marginBottom: 20}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    onPress={() =>
                      this.setState({
                        billSelectModal: false,
                        selectedBill: item,
                      })
<<<<<<< HEAD
                    }
                  >
=======
                    }>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    <Image
                      source={{uri: item.image}}
                      style={{
                        width: 84,
                        height: 84,
                        borderRadius: 42,
                      }}
                    />
<<<<<<< HEAD
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: 'white' }}>
=======
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: 'white'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                        ${Math.ceil(item.balance)} /{' '}
                      </Text>
                      {days >= 0 ? (
                        <Text style={{color: 'white'}}>{days}D DUE</Text>
                      ) : (
                        <Text style={{color: 'red'}}>{-days}D LATE</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) =>
                index.toString() + ' ' + item.image
              }
            />
          </View>
        </Modal>

        <Modal
          isVisible={this.state.recipientSelectModal}
          onBackdropPress={() => this.setState({recipientSelectModal: false})}
          animationIn="fadeInUp"
          animationInTiming={500}
          animationOut="fadeOutDown"
<<<<<<< HEAD
          animationOutTiming={500}
        >
=======
          animationOutTiming={500}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              flex: 1,
              width: 150,
              alignItems: 'center',
              marginLeft: screenWidth - 200,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <FlatList
              style={{flex: 1}}
              data={this.state.contacts}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
<<<<<<< HEAD
                    style={{ marginBottom: 20, alignItems: 'center' }}
=======
                    style={{marginBottom: 20, alignItems: 'center'}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    onPress={() =>
                      this.setState({
                        recipientSelectModal: false,
                        selectedContact: item,
                      })
<<<<<<< HEAD
                    }
                  >
=======
                    }>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    {!item.hasThumbnail ? (
                      <Avatar
                        rounded
                        title={item.givenName.slice(0, 1).toUpperCase()}
                        size={84}
                        containerStyle={{backgroundColor: 'gray'}}
                      />
                    ) : (
                      <Avatar
                        rounded
                        source={{uri: item.thumbnailPath}}
                        size={84}
                        containerStyle={{backgroundColor: 'gray'}}
                      />
                    )}
                    <Text style={{color: 'white'}}>{item.givenName}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) =>
                index.toString() + ' ' + item.image
              }
            />
          </View>
        </Modal>
      </>
    );
  };

  render() {
    const {user} = this.props;
    const isNewUser =
      user == null ||
      user.userName === 'guest' ||
      user.address.postal_code == null ||
      user.address.postal_code === '';
    // const helpIcon = this.state.modalVisible
    //   ? require('../icons/3x-help-up.png')
    //   : require('../icons/3x-help-down.png');

    let isComplete = !isNewUser && isProfileComplete(user);

    return (
      <ImageBackground
        style={{
          flex: 1,
          backgroundColor: 'white',
<<<<<<< HEAD
        }}
      >
        <View style={{ flex: 1 }}>
=======
        }}>
        <View style={{flex: 1}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {isNewUser && this.renderANON()}
          {!isNewUser && this.renderMain()}
        </View>

        {!isComplete && user && user.bills && user.bills.length > 0 && (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ProfileBills')}
            style={{
              position: 'absolute',
              top: 0,
              height: isIPhoneX() ? 90 : 55,
              width: '100%',
              backgroundColor: '#ff3838',
              alignSelf: 'center',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontFamily: SFProFontName,
                fontWeight: 'bold',
                fontSize: 20,
                color: '#ffffff',
                textAlign: 'center',
                paddingTop: isIPhoneX() ? 35 : 12,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              complete your profile - bills not payable
            </Text>
          </TouchableOpacity>
        )}
        {this.state.noBillModal && (
          <NoBillsModal
            isVisible={this.state.noBillModal}
            onBack={() => this.setState({noBillModal: false})}
            onAdd={() => this.props.navigation.navigate('Vendors')}
          />
        )}
      </ImageBackground>
    );
  }
}

const hstyles = StyleSheet.create({
  div: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  button: {
    marginBottom: 50,
    fontSize: 40,
  },
});

// export default HomeScreen;

const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user.data,
  loading: state.user.loading,
  newUser: state.user.newUser,
  userStatus: state.user.userStatus,

  bills: state.userbills.data,
});

export default connect(mapStateToProps, {
  setUserToken,
  fetchUser,
  updateUser,
  sendInvite,
<<<<<<< HEAD

  setVendorCategory,

  getPayRule,
  selectUserByName,
  selectUserBillById,
=======
  setVendorCategory,
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  getVendor,
  selectVendor,
})(HomeScreen);
