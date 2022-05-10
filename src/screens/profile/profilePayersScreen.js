import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
<<<<<<< HEAD
import { Avatar, Button } from 'react-native-elements';
=======
import {Avatar, Button} from 'react-native-elements';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {connect} from 'react-redux';
import ProfileHeader from './components/ProfileHeader';

import {payersList} from '../../redux/actions/payers';
import {SayThx, selectUser} from '../../redux/actions/user';
import {billsList} from '../../redux/actions/bill';

<<<<<<< HEAD
import { SFProFontName } from '../../app';
import { Loading, AvatarWithLoader } from '../../components/Loader';
import { isIPhoneX } from '../../components/deviceInfo';
=======
import {SFProFontName} from '../../app';
import {Loading, AvatarWithLoader} from '../../components/Loader';
import {isIPhoneX} from '../../components/deviceInfo';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import MsgModal from '../../components/MsgModal';

class ProfilePayersScreen extends React.Component {
  state = {
    msgModalVisible: false,
    msgModalText: '',
  };

  componentDidMount() {
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      this.props.payersList();
    });
  }

  renderTransactionRow = ({item}) => {
    if (!item) {
      return null;
    }

    const {amount, billerName, date} = item;

    let billerNameCap = billerName
      ? billerName.charAt(0).toUpperCase() + billerName.slice(1)
      : '';

    let d = new Date(date);
    let month = d.getUTCMonth() + 1;
    let day = d.getUTCDate();

    return (
      <TouchableWithoutFeedback onPress={() => {}}>
<<<<<<< HEAD
        <View style={{ flex: 1, flexDirection: 'row' }}>
=======
        <View style={{flex: 1, flexDirection: 'row'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text
            style={{
              width: 80,
              fontFamily: SFProFontName,
              fontWeight: 'bold',
              fontSize: 14,
              color: '#228e18',
              textAlign: 'right',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            ${Math.ceil(amount)}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              fontFamily: SFProFontName,
              fontSize: 12,
              color: '#5d5d5d',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {billerNameCap} - {month < 10 ? `0${month}` : month}/
            {day < 10 ? `0${day}` : day}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

<<<<<<< HEAD
  renderPayerRow = ({ item }) => {
=======
  renderPayerRow = ({item}) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (!item) {
      return null;
    }

<<<<<<< HEAD
    const {
      id,
      userName,
      profileImage,
      city,
      state,
      transactions,
      thanks,
    } = item;

    var total = 0;
    transactions.map(transaction => (total += transaction.amount));
=======
    const {id, userName, profileImage, city, state, transactions, thanks} =
      item;

    var total = 0;
    transactions.map((transaction) => (total += transaction.amount));
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            marginBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#d7d7d7',
            padding: 10,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
<<<<<<< HEAD
            }}
          >
            <View style={{ flex: 5, flexDirection: 'row' }}>
=======
            }}>
            <View style={{flex: 5, flexDirection: 'row'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <AvatarWithLoader
                size={55}
                source={{
                  uri: profileImage,
                }}
                refresh
                onPress={() => {
                  this.props.selectUser(item);
                  this.props.billsList(id);
                  this.props.navigation.navigate('SelectedUser');
                }}
              />
<<<<<<< HEAD
              <View style={{ marginLeft: 10, justifyContent: 'center' }}>
=======
              <View style={{marginLeft: 10, justifyContent: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    fontFamily: SFProFontName,
<<<<<<< HEAD
                  }}
                >
=======
                  }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                  @{userName}
                </Text>
                {/* <Text style={{ fontSize: 13, color: 'black', marginTop: 5, fontFamily: SFProFontName }}>{city},{state}</Text> */}
              </View>
            </View>
<<<<<<< HEAD
            <View style={{ flex: 3, alignItems: 'center' }}>
=======
            <View style={{flex: 3, alignItems: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 13,
                  fontFamily: SFProFontName,
<<<<<<< HEAD
                }}
              >
=======
                }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                $
                {total >= 1000
                  ? `${Math.ceil(total / 1000)}K`
                  : Math.ceil(total)}
              </Text>
            </View>
<<<<<<< HEAD
            <View style={{ flex: 3 }}>
=======
            <View style={{flex: 3}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              <Button
                title={'SAY THX'}
                disabled={!thanks}
                color={'blue'}
                onPress={() => {
                  this.props.SayThx(id, this.props.user.userName);
                  this.setState({
                    msgModalVisible: true,
                    msgModalText: `"Thanks" sent to @${userName}`,
                  });
                }}
                buttonStyle={{
                  height: 45,
                  width: 95,
                  marginTop: 3,
                }}
                titleStyle={{
                  fontSize: isIPhoneX() ? 20 : 18,
                  fontWeight: 'bold',
                  fontFamily: SFProFontName,
                }}
              />
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
            <FlatList
              style={{
                width: '100%',
                paddingRight: 10,
                paddingLeft: 10,
              }}
              data={transactions}
              renderItem={this.renderTransactionRow}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderPayersList = () => {
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
          No Payers
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
          renderItem={this.renderPayerRow}
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
          title={'PAYERS'}
          onAvatarClicked={() =>
            this.props.navigation.navigate('ProfileSettings')
          }
        />
        {this.renderPayersList()}

        <MsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onOK={() => {
            this.setState({ msgModalVisible: false });
            this.props.payersList();
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  data: state.payers.data,
  error: state.payers.error,
  loading: state.payers.loading,
});

export default connect(mapStateToProps, {
  payersList,
  SayThx,

  selectUser,
  billsList,
})(ProfilePayersScreen);
