import React, { Component, Fragment } from 'react';
import {
  Text,
  View,
  ScrollView,
  DatePickerIOS,
  Image,
  Linking,
  Switch,
  Keyboard,
} from 'react-native';
import { Input, Button, Avatar, Icon, CheckBox } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import moment from 'moment-timezone';

import { connect } from 'react-redux';
import { updateUser, uploadImage } from '../redux/actions/user';

import {TextInputMask} from 'react-native-masked-text';

import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';
import { getUniqueId } from 'react-native-device-info';

import messaging from '@react-native-firebase/messaging';

import {
  SFProFontName,
  defaultUserImage,
  stateList,
  helpDeskURL,
  tosURL,
  ppURL,
} from '../app';

import HomeBackButton from '../components/HomeBackButton';
import UserAvatarNameLocation from '../components/UserAvatarNameLocation';
import HeaderLogo from '../components/HeaderLogo';
import { Loading } from '../components/Loader';

// import LegalModal from '../components/LegalModal';
// import {getPP, getTOS} from '../redux/actions/legal';

import BillStatusModal from '../components/BillStatusModal';

import axios from 'axios';

class ProfileSettingsScreen extends Component {
  state = {
    image: '',
    postal_code: '',
    firstName: '',
    lastName: '',
    state: '',
    city: '',
    userName: '',
    dob: '',

    ssn: '',
    veteran: false,
    homeless: false,
    shelter: '',

    modalVisible: false,

    notifToggle: false,

    vVerifying: false,
    vVerifySecondLine: '',
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      // title: 'Settings',
      // headerTitleStyle: {
      //   fontFamily: SFProFontName
      // },
      headerTitle: (
        <HeaderLogo
          onPress={() => {
            params.onUserSave();
            navigation.navigate('Home');
          }}
        />
      ),
      headerLeft: <HomeBackButton onPress={() => params.onUserSave()} />,
      // headerLeft: <Icon name='arrow-left' type='font-awesome' color='#000000' containerStyle={{ marginLeft: 10 }} onPress={() => {
      //   params.onUserSave();
      //   // navigation.navigate('Profile');
      //  } } />,
      // headerRight: <Icon name='save' type='font-awesome' color='#000000' containerStyle={{ marginRight: 10 }} onPress={() => params.onUserSave()} />
    };
  };

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

  componentDidMount() {
    this.props.navigation.setParams({
      onUserSave: this.onUserSave,
    });

    const {
      user: {
        userName,
        profileImage,
        address: { country, state, city, postal_code },
        firstName,
        lastName,
        dob: { year, month, day },
        settings,
        ssn,
        veteran,
        homeless,
        shelter,
      },
    } = this.props;

    let dob = year && month && day ? `${year}-${month}-${day}` : '';

    this.setState({
      image: profileImage
        ? `${profileImage}?random=${moment().format('YYYYMMDDHHmm')}`
        : null,
      country,
      state: state ? state : '',
      city: city ? city : '',
      postal_code,
      firstName: firstName ? firstName : '',
      lastName: lastName ? lastName : '',
      userName,
      dob: dob,
      notifToggle: settings && settings.push,

      ssn: veteran === 'true' ? `***-**-${ssn}` : '',
      veteran: veteran === 'true',
      homeless: homeless === 'true',
      shelter: shelter,
    });
  }

  async getFirbaseToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }

    const { user } = this.props;

    if (user === null) {
      return;
    }

    const { devTokens, userName, verified } = user;

    if (userName !== 'guest' && verified === 'true') {
      const uuid = await getUniqueId();
      let filtered = devTokens.filter((token) => token.id !== uuid);
      filtered.push({
        id: uuid,
        token: fcmToken,
      });
      this.props.updateUser({ devTokens: filtered });
    }
  }

  // async requestNotificationPermission() {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     this.getFirbaseToken();
  //   } catch (error) {
  //     console.log('permission rejected');
  //   }
  // }

  // async checkNotificationPermission() {
  //   const enabled = await firebase.messaging().hasPermission();
  //   if (enabled) {
  //     this.getFirbaseToken();
  //   } else {
  //     this.requestNotificationPermission();
  //   }
  // }

  async requestNotificationPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      this.getFirbaseToken();
    }
  }

  onUserSave = () => {
    const {
      postal_code,
      state,
      city,
      firstName,
      lastName,
      dob,
      notifToggle,
      homeless,
      shelter,
    } = this.state;
    const {
      user: {
        address: { country },
      },
    } = this.props;

    const dobArr = dob.split('-');

    let settings = { push: false };
    if (notifToggle) {
      settings = { push: true };
    }

    this.props.updateUser({
      address: {
        country,
        state,
        postal_code,
        city,
      },
      firstName,
      lastName,
      dob: {
        year: dobArr[0],
        month: dobArr[1],
        day: dobArr[2],
      },
      settings,
      homeless: homeless ? 'true' : 'false',
      shelter,
    });

    this.props.navigation.navigate('Profile');
  };

<<<<<<< HEAD
  saveSSN = last4 => {
=======
  saveSSN = (last4) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (last4 === '') {
      this.props.updateUser({
        veteran: 'false',
      });
    } else {
      this.props.updateUser({
        veteran: 'true',
        ssn: last4,
      });
    }
  };

  renderInputField = (title, name, keyboardType = 'default') => {
    return (
      <Fragment>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#a6a6a6',
              marginLeft: 12,
              fontFamily: SFProFontName,
            }}
          >
            {title}
          </Text>
          <Input
            inputStyle={{
              borderWidth: 1,
              borderColor: '#d6d6d6',
              backgroundColor: '#d6d6d6',
              textAlign: 'center',
              borderRadius: 4,
              fontFamily: SFProFontName,
            }}
            inputContainerStyle={{
              marginBottom: 10,
              borderBottomWidth: 0,
            }}
            keyboardType={keyboardType}
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            value={this.state[name]}
<<<<<<< HEAD
            onChangeText={value => this.setState({ [name]: value })}
=======
            onChangeText={(value) => this.setState({[name]: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          />
        </View>
      </Fragment>
    );
  };

  handleVerifyVeteran = async () => {
    if (this.state.veteran) {
      this.saveSSN('');
<<<<<<< HEAD
      this.setState({ veteran: false, ssn: '' });
=======
      this.setState({veteran: false, ssn: ''});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      return;
    }
    this.setState({vVerifying: true, vVerifySecondLine: ''});
    const {firstName, lastName, dob, ssn} = this.state;

    try {
      const result = await axios.post(
        'https://sandbox-api.va.gov/services/veteran_confirmation/v0/status',
        {
          first_name: firstName,
          last_name: lastName,
          birth_date: dob,
          ssn: ssn,
        },
        {
          headers: {
            apiKey: '2cFIWKwdW8r8yRwwvv8z88q32u41BK7X',
            'Content-Type': 'application/json',
          },
<<<<<<< HEAD
        }
=======
        },
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      );

      if (result.data.veteran_status === 'confirmed') {
        const last4 = ssn.substr(ssn.length - 4);
        this.saveSSN(last4);
        this.setState({
          veteran: true,
          vVerifySecondLine: 'Confirmed',
          ssn: `***-**-${last4}`,
        });
      } else {
        this.saveSSN('');
<<<<<<< HEAD
        this.setState({ veteran: false, vVerifySecondLine: 'Not Confirmed' });
      }
    } catch (error) {
      this.setState({ veteran: false, vVerifySecondLine: 'Not Confirmed' });
=======
        this.setState({veteran: false, vVerifySecondLine: 'Not Confirmed'});
      }
    } catch (error) {
      this.setState({veteran: false, vVerifySecondLine: 'Not Confirmed'});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    }

    setTimeout(() => {
      this.setState({vVerifying: false});
    }, 1500);
  };

  renderVeteran = () => {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, flexDirection: 'row' }}>
=======
      <View style={{flex: 1, flexDirection: 'row'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              fontFamily: SFProFontName,
              fontSize: 22,
              fontWeight: 'bold',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            Veteran
          </Text>
          <CheckBox
            checked={this.state.veteran}
            onPress={this.handleVerifyVeteran}
          />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#a6a6a6',
              marginLeft: 12,
              fontFamily: SFProFontName,
            }}
          >
            Social Security Number
          </Text>
          <TextInputMask
            type={'custom'}
            keyboardType="phone-pad"
            options={{
              mask: this.state.veteran ? '***-**-9999' : '999-99-9999',
            }}
            placeholder={'555-55-5555'}
            value={this.state.ssn}
<<<<<<< HEAD
            onChangeText={text => {
              if (text.length === 11) {
                Keyboard.dismiss();
              }
              this.setState({ ssn: text });
=======
            onChangeText={(text) => {
              if (text.length === 11) {
                Keyboard.dismiss();
              }
              this.setState({ssn: text});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            }}
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: '#d6d6d6',
              backgroundColor: '#d6d6d6',
              textAlign: 'center',
              borderRadius: 4,
              fontFamily: SFProFontName,
              marginBottom: 10,
              borderBottomWidth: 0,
              marginLeft: 10,
              marginRight: 10,
            }}
            editable={!this.state.veteran}
          />
        </View>
      </View>
    );
  };

  renderHomeless = () => {
    const options = this.props.shelters.map((item) => ({
      label: item.title,
      value: item.title,
    }));

    return (
<<<<<<< HEAD
      <View style={{ flex: 1, flexDirection: 'row' }}>
=======
      <View style={{flex: 1, flexDirection: 'row'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              fontFamily: SFProFontName,
              fontSize: 22,
              fontWeight: 'bold',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            Homeless
          </Text>
          <CheckBox
            checked={this.state.homeless}
<<<<<<< HEAD
            onPress={() => this.setState({ homeless: !this.state.homeless })}
=======
            onPress={() => this.setState({homeless: !this.state.homeless})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          />
        </View>
        <View style={{flex: 1, marginBottom: 10}}>
          <Text
            style={{
              color: '#a6a6a6',
              marginLeft: 12,
              fontFamily: SFProFontName,
            }}
          >
            Shelter
          </Text>
          <RNPickerSelect
<<<<<<< HEAD
            onValueChange={value => this.setState({ shelter: value })}
=======
            onValueChange={(value) => this.setState({shelter: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            value={this.state.shelter}
            items={options}
            style={{
              inputIOS: {
                borderWidth: 1,
                borderColor: '#d6d6d6',

                backgroundColor: '#d6d6d6',
                borderRadius: 4,
                fontFamily: SFProFontName,

                height: 40,
                marginLeft: 10,
                marginRight: 10,

                textAlign: 'center',

                fontSize: 18,

                color: 'black',
              },
              inputAndroid: {
                backgroundColor: '#d6d6d6',
                borderWidth: 1,
                borderColor: '#d6d6d6',
                borderRadius: 4,
                fontSize: 18,
                fontFamily: SFProFontName,
                color: 'black',
                height: 50,
                marginLeft: 10,
                marginRight: 10,
              },
            }}
            placeholder={{ label: '', value: '' }}
          />
        </View>
      </View>
    );
  };

  render() {
    const { loading, uploadingImage } = this.props;
    const { image } = this.state;

    const { userName } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 10,
                flex: 1,
              }}
            >
              <Avatar
                rounded
                size={160}
                onPress={() => {
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                    mediaType: 'photo',
                    forceJpg: true,
                  })
                    .then((image) => {
                      this.props.uploadImage(image);
                      this.setState({
                        image: image.path,
                      });
                    })
                    .catch((e) => {});
                }}
                renderPlaceholderContent={<Loading size={160} />}
                source={image ? { uri: this.state.image } : defaultUserImage}
              />

              <View>{uploadingImage && <Text>Uploading image...</Text>}</View>

              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 5,
                  fontFamily: SFProFontName,
                  fontWeight: 'bold',
                  fontSize: 20,
                  letterSpacing: -1.7,
<<<<<<< HEAD
                }}
              >
=======
                }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                @{userName}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
              <Text
                style={{
                  fontFamily: SFProFontName,
                  marginBottom: 5,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                Notifications
              </Text>
<<<<<<< HEAD
              <View style={{ flexDirection: 'row' }}>
=======
              <View style={{flexDirection: 'row'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <Text
                  style={{
                    fontFamily: SFProFontName,
                    fontWeight: 'bold',
                    marginRight: 6,
                    marginTop: 4,
<<<<<<< HEAD
                  }}
                >
=======
                  }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  SMS/TXT
                </Text>
                <Switch
                  value={this.state.notifToggle}
<<<<<<< HEAD
                  onValueChange={value => {
                    this.setState({ notifToggle: value });
=======
                  onValueChange={(value) => {
                    this.setState({notifToggle: value});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    if (value === true) {
                      // this.checkNotificationPermission();
                      this.requestNotificationPermission();
                    }
                  }}
                />
                <Text
                  style={{
                    fontFamily: SFProFontName,
                    fontWeight: 'bold',
                    marginLeft: 6,
                    marginTop: 4,
<<<<<<< HEAD
                  }}
                >
=======
                  }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  PUSH
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {this.renderInputField('First Name (Legal)', 'firstName')}
              {this.renderInputField('Last Name (Legal)', 'lastName')}
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: '#a6a6a6',
                    marginLeft: 12,
                    fontFamily: SFProFontName,
                  }}
                >
                  Date Of Birth
                </Text>
                <View style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
                  <DatePicker
                    style={{
                      width: '100%',
                      borderWidth: 1,
                      borderColor: '#d6d6d6',

                      backgroundColor: '#d6d6d6',
                      borderRadius: 4,
                    }}
                    date={this.state.dob}
                    mode="date"
                    placeholder="Date Of Birth"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      // dateIcon: {
                      //   position: 'absolute',
                      //   left: 0,
                      //   top: 4,
                      //   marginLeft: 0
                      // },
                      dateInput: {
                        borderWidth: 0,
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    showIcon={false}
<<<<<<< HEAD
                    onDateChange={date => {
                      this.setState({ dob: date });
=======
                    onDateChange={(date) => {
                      this.setState({dob: date});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    }}
                  />
                </View>
              </View>
              {this.renderInputField('ZIP Code', 'postal_code', 'numeric')}
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {this.renderInputField('City', 'city')}

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: '#a6a6a6',
                    marginLeft: 12,
                    fontFamily: SFProFontName,
                  }}
                >
                  State
                </Text>
                <RNPickerSelect
<<<<<<< HEAD
                  onValueChange={value => this.setState({ state: value })}
=======
                  onValueChange={(value) => this.setState({state: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  value={this.state.state}
                  items={stateList}
                  style={{
                    inputIOS: {
                      borderWidth: 1,
                      borderColor: '#d6d6d6',

                      backgroundColor: '#d6d6d6',
                      borderRadius: 4,
                      fontFamily: SFProFontName,

                      height: 40,
                      marginLeft: 10,
                      marginRight: 10,

                      textAlign: 'center',

                      fontSize: 18,

                      color: 'black',
                    },
                    inputAndroid: {
                      backgroundColor: '#d6d6d6',
                      borderWidth: 1,
                      borderColor: '#d6d6d6',
                      borderRadius: 4,
                      fontSize: 18,
                      fontFamily: SFProFontName,
                      color: 'black',
                      height: 50,
                      marginLeft: 10,
                      marginRight: 10,
                    },
                  }}
                  placeholder={{ label: '', value: '' }}
                />
              </View>
            </View>
            {this.renderVeteran()}
            {this.renderHomeless()}
          </View>
          <View
            style={{
              marginLeft: 12,
              marginRight: 12,
              flexDirection: 'row',
              marginTop: 5,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Button
                title={'Terms of Service'}
                onPress={() => Linking.openURL(tosURL)}
                // onPress={() => this.modalInit(1)}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Button
                title={'Privacy Policy'}
                onPress={() => Linking.openURL(ppURL)}
                // onPress={() => this.modalInit(2)}
              />
            </View>
          </View>
          <View style={{ marginLeft: 12, marginRight: 12, marginTop: 20 }}>
            <Button
              style={{
                flex: 1,
              }}
              title={'Help Desk'}
              onPress={() => Linking.openURL(helpDeskURL)}
            />
          </View>
          <View style={{marginBottom: 150}}></View>
        </ScrollView>

        {/* <LegalModal
          isVisible={this.state.modalVisible}
          hideModal={() => this.setState({modalVisible: false})}
        /> */}

        {this.state.vVerifying && (
          <BillStatusModal
            title="Verifying"
            firstLine="Veteran Verifying..."
            secondLine={this.state.vVerifySecondLine}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  loading: state.user.loading,
  uploadingImage: state.user.uploadingImage,
  shelters: state.user.shelters,
});

export default connect(mapStateToProps, {
  updateUser,
  uploadImage,

  // getPP,
  // getTOS,
})(ProfileSettingsScreen);
