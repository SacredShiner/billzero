<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD
import { Input, Button, Avatar, Image } from 'react-native-elements';

import { NavigationActions } from 'react-navigation';
=======
import {Input, Button, Avatar, Image} from 'react-native-elements';

import {NavigationActions} from 'react-navigation';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import ImagePicker from 'react-native-image-crop-picker';

import {connect} from 'react-redux';
import {updateUser, uploadImage, checkUsername} from '../redux/actions/user';

import {
  SFProFontName,
  SPProFontSemiBold,
  defaultUserImage,
  defaultUserAvatars,
  platform,
} from '../app';
import HeaderLogo from '../components/HeaderLogo';

import { YNMsgModal } from '../components/MsgModal';

const placeholderStyle = {
  backgroundColor: 'transparent',
};

class ProfileSetupScreen extends Component {
  state = {
    userName: '',
    image: null,
    zipCode: null,
    checkUsernameStatus: null,

    msgModalVisible: false,
    msgModalText: '',
    msgModalOnYes: () => {},

    defaultIndex: Math.floor(Math.random() * defaultUserAvatars.length),
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <HeaderLogo headerLeft={true} />,
      headerLeft: null,
    };
  };

  // componentDidUpdate(prevProps) {

  //   if (moment(this.props.user.updatedAt) > moment(prevProps.user.updatedAt)) {
  //     this.props.navigation.navigate('ProfileSetup2');
  //   }

  //   // const { user: { profileImage, userName } } = this.props;
  //   // if (userName && profileImage) {
  //   //   this.props.navigation.navigate('ProfileSetup2');
  //   // }
  // }

  componentDidMount() {
    console.log('---- profile setup ----');

    const {
      profileImage,
      userName,
<<<<<<< HEAD
      address: { postal_code },
=======
      address: {postal_code},
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    } = this.props.user;

    this.setState({
      image: profileImage || null,
      userName: userName.toLowerCase(),
      zipCode: postal_code,
    });

    // this.checkUsername();
  }

  componentDidUpdate() {
    const {
      userName,
<<<<<<< HEAD
      address: { postal_code },
    } = this.props.user;
    const { bills } = this.props;
=======
      address: {postal_code},
    } = this.props.user;
    const {bills} = this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    console.log('--- profile setup --- ');
    console.log(this.props);
    console.log('--- profile setup --- ');

    if (userName !== 'guest' && postal_code !== null && postal_code !== '') {
      if (this.props.needRedirect) {
        this.props.navigation.navigate('SelectedUser');
      } else if (
        bills &&
        bills.status === 'waiting' &&
        bills.statusData &&
        bills.statusData.mfa_challenges
      ) {
        this.props.navigation.navigate('Vendor');
      } else if (bills) {
        if (bills.bill === null) {
          // Alert.alert('Bill is Processing. You can get notify once completed');
          this.props.navigation.navigate('Profile');
        }
        // if (bills.status === 'bill_processing') {
        //   Alert.alert('Bill is Processing. You can get notify once completed');
        // } else if (bills.status === 'bill_exsist') {
        //   Alert.alert('Bill is Already Added');
        // }
        // Alert.alert(
        //   'Error',
        //   'Vendor Login Failure',
        //   [
        //     {
        //       text: 'Try Again',
        //       onPress: () => this.props.navigation.navigate('Vendor'),
        //     },
        //   ],
        //   {cancelable: false},
        // );
        // this.props.navigation.navigate('Vendor');
      } else {
        // this.props.navigation.navigate(NavigationActions.navigate({ routeName: 'Home' }))
        this.props.navigation.navigate('Home');
      }
    }
  }

  onUserSave = () => {
    if (this.state.checkUsernameStatus !== 'available') {
      this.checkUsername();
      return;
    }

    this.setState({
      msgModalVisible: true,
      msgModalText: "Sure? Can't Change Once Set",
      msgModalOnYes: () => {
        const { userName, zipCode } = this.state;

        this.props.updateUser({
          userName: userName,
          address: {
            postal_code: zipCode,
            state: '',
          },
        });
      },
    });

    // Alert.alert(
    //   'Username Confirm',
    //   "Sure? Can't Change Once Set",
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => {
    //         return;
    //       },
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'Save',
    //       onPress: () => {
    //         const {userName, zipCode} = this.state;

    //         this.props.updateUser({
    //           userName: userName,
    //           address: {
    //             postal_code: zipCode,
    //             state: '',
    //           },
    //         });
    //       },
    //     },
    //   ],
    //   {cancelable: false},
    // );
  };

  checkUsername = () => {
<<<<<<< HEAD
    this.props.checkUsername(this.state.userName, status => {
      this.setState({ checkUsernameStatus: status });
=======
    this.props.checkUsername(this.state.userName, (status) => {
      this.setState({checkUsernameStatus: status});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    });
  };

  renderUsernameAvailable = () => {
    const {loadingCheckUsername} = this.props;
    const {checkUsernameStatus} = this.state;

    if (loadingCheckUsername) {
      return <ActivityIndicator />;
    }
    if (checkUsernameStatus === 'available') {
      return (
        <Image
          source={require('../images/new/3x-ONBOARD-PROFILEPIC_label-username_available.png')}
          style={{
            width: 298,
            height: 23,
          }}
          placeholderStyle={placeholderStyle}
        />
      );
    } else {
      // if (checkUsernameStatus === 'unavailable') {
      return (
        <Image
          source={require('../images/new/3x-ONBOARD-PROFILEPIC_label-username_not_available.png')}
          style={{
            width: 298,
            height: 23,
          }}
          placeholderStyle={placeholderStyle}
        />
      );
    }
  };

  openImagePicker = () => {
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
  };

  render() {
    const {loading, uploadingImage} = this.props;
    const {userName, image, zipCode} = this.state;

    const saveButtonDisabled =
      loading ||
      uploadingImage ||
      userName === '' ||
      zipCode === null ||
      zipCode.length !== 5;

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
          source={require('../images/new/3x-ONBOARD-STEP3_IPH.png')}
          style={{
            width: platform === 'ios' ? 414 : 310,
            height: platform === 'ios' ? 64 : 48,
          }}
          placeholderStyle={placeholderStyle}
        />
<<<<<<< HEAD
        <ScrollView style={{ width: '100%' }}>
=======
        <ScrollView style={{width: '100%'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
              position: 'relative',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <TouchableOpacity
              onPress={this.openImagePicker}
              style={{
                position: 'absolute',
                top: platform === 'ios' ? 60 : 45,
                zIndex: 101,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <Image
                source={require('../images/new/3x-ONBOARD-PROFILEPIC_btn-change_IPH.png')}
                style={{
                  width: platform === 'ios' ? 268 : 201,
                  height: platform === 'ios' ? 39 : 29,
                }}
                placeholderStyle={placeholderStyle}
              />
            </TouchableOpacity>
            <Avatar
              rounded
              size={platform === 'ios' ? 160 : 120}
              onPress={this.openImagePicker}
              source={
                image
<<<<<<< HEAD
                  ? { uri: this.state.image }
                  : defaultUserAvatars[this.state.defaultIndex]
              }
              containerStyle={{ opacity: 0.6 }}
            />
            <View>
              {uploadingImage && (
                <Text style={{ fontFamily: SFProFontName }}>
=======
                  ? {uri: this.state.image}
                  : defaultUserAvatars[this.state.defaultIndex]
              }
              containerStyle={{opacity: 0.6}}
            />
            <View>
              {uploadingImage && (
                <Text style={{fontFamily: SFProFontName}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  Uploading image...
                </Text>
              )}
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <Image
              source={require('../images/new/3x-ONBOARD-PROFILEPIC_label-username.png')}
              style={{
                width: 96,
                height: 13,
                marginBottom: 5,
              }}
              placeholderStyle={placeholderStyle}
            />
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
                borderBottomWidth: 0,
                width: 200,
                alignSelf: 'center',
              }}
              errorStyle={{
                height: 0,
              }}
              autoFocus
              autoCapitalize={'none'}
              autoCompleteType={'off'}
              value={userName}
              onBlur={() => this.checkUsername()}
<<<<<<< HEAD
              onChangeText={async userName => {
=======
              onChangeText={async (userName) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                // if (userName.length === 0) {
                //   this.setState({userName: '', checkUsernameStatus: 'fail'});
                // }

<<<<<<< HEAD
                await this.setState({ userName: userName.toLowerCase() });
=======
                await this.setState({userName: userName.toLowerCase()});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                await this.checkUsername();
              }}
            />
            {this.renderUsernameAvailable()}
          </View>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              source={require('../images/new/3x-ONBOARD-PROFILEPIC_label-zipcode.png')}
              style={{
                width: 78,
                height: 16,
                marginBottom: 5,
              }}
              placeholderStyle={placeholderStyle}
            />
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
                borderBottomWidth: 0,
                width: 150,
                alignSelf: 'center',
              }}
              keyboardType={'numeric'}
              autoCapitalize={'none'}
              autoCompleteType={'off'}
              value={zipCode}
              onChangeText={zipCode => this.setState({ zipCode })}
            />

            {!saveButtonDisabled &&
            this.state.checkUsernameStatus == 'available' ? (
              <TouchableOpacity onPress={this.onUserSave}>
                <Image
                  source={require('../images/new/3x-main-btn-NEXT_ACTIVE_IPH.png')}
                  style={{
                    width: 89,
                    height: 33,
                  }}
                  placeholderStyle={placeholderStyle}
                />
              </TouchableOpacity>
            ) : (
              <Image
                source={require('../images/new/3x-main-btn-NEXT_INACTIVE_IPH.png')}
                style={{
                  width: 89,
                  height: 33,
                }}
                placeholderStyle={placeholderStyle}
              />
            )}
          </View>
        </ScrollView>

        <YNMsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Username Confirm"
          body="Sure?"
          body2="Can't Change Once Set"
          onYES={() => {
            this.state.msgModalOnYes();
            this.setState({ msgModalVisible: false });
          }}
          onNO={() => this.setState({ msgModalVisible: false })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  loading: state.user.loading,
  uploadingImage: state.user.uploadingImage,
  loadingCheckUsername: state.user.loadingCheckUsername,

  needRedirect: state.user.needRedirect,

  bills: state.bills.data,
});

export default connect(mapStateToProps, {
  updateUser,
  uploadImage,
  checkUsername,
})(ProfileSetupScreen);
