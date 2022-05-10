import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import { connect } from 'react-redux';

import {SFProFontName, defaultImageDev, defaultImageProd} from '../app';
import {AvatarWithLoader, ImageWithLoader} from './Loader';

class CheckoutHeader extends Component {
  render() {
    const { user, selectedUser, selectedUserBill, total } = this.props;

    let vendorLogo = null;
    if (selectedUserBill) {
      vendorLogo =
        selectedUserBill.image == defaultImageDev ||
        selectedUserBill.image == defaultImageProd
          ? `https://sandbox.finovera.com/static_3.0/resources/images/logos/86x50/${selectedUserBill.logo}`
          : selectedUserBill.image;
    }

    return (
      <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <AvatarWithLoader
            source={{
              uri: selectedUser.profileImage ? selectedUser.profileImage : null,
            }}
            size={70}
            refresh
          />
          <Text
            style={{
              fontFamily: SFProFontName,
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 3,
            }}
          >
            @{selectedUser.userName}
          </Text>
        </View>
        <View
          style={{ alignItems: 'center', flexDirection: 'row', marginTop: -20 }}
        >
          <View style={{ alignItems: 'center', width: 120 }}>
            <AvatarWithLoader
              source={{ uri: user.profileImage ? user.profileImage : null }}
              size={90}
              refresh
            />
            <Text
              style={{
                fontFamily: SFProFontName,
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 3,
              }}
            >
              @{user.userName}
            </Text>
          </View>
          <View
            style={{
              marginTop: 0,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <ImageWithLoader
              source={require('../icons/3x-chevron-right.png')}
              width={24}
              height={47}
              disableLoading
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: SFProFontName,
                fontSize: 23,
                color: '#dc0000',
                fontWeight: 'bold',
                marginLeft: 15,
                marginRight: 15,
                marginTop: 0,
              }}
            >
              ${total}
            </Text>
            <ImageWithLoader
              source={require('../icons/3x-chevron-right.png')}
              width={24}
              height={47}
              disableLoading
            />
          </View>
          <View style={{ alignItems: 'center', width: 120 }}>
            <AvatarWithLoader
              source={{
                uri: vendorLogo,
              }}
              size={90}
            />
            <Text
              style={{
                fontFamily: SFProFontName,
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 3,
                textAlign: 'center',
              }}
            >
              {selectedUserBill.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  selectedUser: state.users.selectedUser,
  selectedUserBill: state.selectedUserBill,
});

export default connect(mapStateToProps, null)(CheckoutHeader);
