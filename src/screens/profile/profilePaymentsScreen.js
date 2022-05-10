import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import ProfileHeader from './components/ProfileHeader';

import {Avatar, Button} from 'react-native-elements';

<<<<<<< HEAD
import { paymentsList } from '../../redux/actions/payments';
=======
import {paymentsList} from '../../redux/actions/payments';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import moment from 'moment-timezone';

import {SFProFontName} from '../../app';

<<<<<<< HEAD
import { SayThx, selectUser } from '../../redux/actions/user';
import { billsList } from '../../redux/actions/bill';
import { Loading, AvatarWithLoader } from '../../components/Loader';
import { isIPhoneX } from '../../components/deviceInfo';
=======
import {SayThx, selectUser} from '../../redux/actions/user';
import {billsList} from '../../redux/actions/bill';
import {Loading, AvatarWithLoader} from '../../components/Loader';
import {isIPhoneX} from '../../components/deviceInfo';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import MsgModal from '../../components/MsgModal';

export class ProfilePaymentsScreen extends React.Component {
  state = {
    msgModalVisible: false,
    msgModalText: '',
  };

  componentDidMount() {
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      this.props.paymentsList();
    });
  }

<<<<<<< HEAD
  renderPaymentRow = ({ item }) => {
=======
  renderPaymentRow = ({item}) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (!item) {
      return null;
    }

    const balance = item.amountToAddBalance;
    const currency = item.currency == 'usd' ? '$' : '$';

    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#d7d7d7',
            padding: 10,
<<<<<<< HEAD
          }}
        >
          <View style={{ flex: 4, flexDirection: 'row' }}>
            <View style={{ width: 65, height: 55 }}>
=======
          }}>
          <View style={{flex: 4, flexDirection: 'row'}}>
            <View style={{width: 65, height: 55}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <AvatarWithLoader
                size={55}
                source={{
                  uri:
                    item.payerInfo.profileImage &&
                    item.payerInfo.profileImage != 'undefined'
                      ? item.payerInfo.profileImage
                      : null,
                }}
                refresh
                onPress={() => {
                  this.props.selectUser(item.payerInfo);
                  this.props.billsList(item.payerInfo.id);
                  this.props.navigation.navigate('SelectedUser');
                }}
              />
            </View>
            <View
<<<<<<< HEAD
              style={{ width: 65, height: 55, position: 'relative', left: -25 }}
            >
=======
              style={{width: 65, height: 55, position: 'relative', left: -25}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <AvatarWithLoader
                size={55}
                source={{
                  uri:
                    item.vendorInfo.image &&
                    item.vendorInfo.image != 'undefined'
                      ? item.vendorInfo.image
                      : null,
                }}
              />
            </View>
          </View>

<<<<<<< HEAD
          <View style={{ flex: 2 }}>
=======
          <View style={{flex: 2}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 15,
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {currency}
              {Math.ceil(balance)}
            </Text>
          </View>

<<<<<<< HEAD
          <View style={{ flex: 3 }}>
=======
          <View style={{flex: 3}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 15,
                fontFamily: SFProFontName,
                marginLeft: 10,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {moment().diff(moment(item.createdAt), 'day')}D AGO
            </Text>
          </View>

          <View style={{ flex: 4 }}>
            <Button
              onPress={() => {
                if (item.payerInfo && item.payerInfo.id) {
                  this.props.SayThx(
                    item.payerInfo.id,
<<<<<<< HEAD
                    this.props.user.userName
=======
                    this.props.user.userName,
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  );
                  this.setState({
                    msgModalVisible: true,
                    msgModalText: `"Thanks" sent to @${item.payerInfo.userName}`,
                  });
                }
              }}
              disabled={!item.payerInfo.thanks}
              title={'SAY THX'}
              titleStyle={{fontFamily: SFProFontName}}
              color={'blue'}
              buttonStyle={{
                height: 45,
                width: 105,
                marginRight: 15,
              }}
              titleStyle={{
                fontSize: isIPhoneX() ? 20 : 18,
                fontWeight: 'bold',
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderPaymentsList = () => {
<<<<<<< HEAD
    const { loading, data } = this.props;

    if (loading) {
      return (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
=======
    const {loading, data} = this.props;

    if (loading) {
      return (
        <View style={{alignItems: 'center', marginTop: 30}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Loading size={40} />
        </View>
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
            fontWeight: 'bold',
            fontSize: 25,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          No Payments
        </Text>
      );
    } else {
      return (
        <FlatList
          style={{
            width: '100%',
            paddingRight: 10,
            paddingLeft: 10,
          }}
          data={data}
          renderItem={this.renderPaymentRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  render() {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: 'white' }}>
=======
      <View style={{flex: 1, backgroundColor: 'white'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <ProfileHeader
          user={this.props.user}
          title={'PAYMENTS'}
          onAvatarClicked={() =>
            this.props.navigation.navigate('ProfileSettings')
          }
        />
        {this.renderPaymentsList()}

        <MsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onOK={() => {
            this.setState({ msgModalVisible: false });
            this.props.paymentsList();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  data: state.payments.data,
  error: state.payments.error,
  loading: state.payments.loading,
});

export default connect(mapStateToProps, {
  paymentsList,
  SayThx,

  selectUser,
  billsList,
})(ProfilePaymentsScreen);
