import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { ProfilePayMethodsScreen } from './profilePayMethodsScreen';
import ProfileHeader from './components/ProfileHeader';

import { Avatar, Button } from 'react-native-elements';

import { subsList, cancelSubscription } from '../../redux/actions/subs';

import { SFProFontName } from '../../app';
import { Loading, AvatarWithLoader } from '../../components/Loader';
import { isIPhoneX } from '../../components/deviceInfo';

import { SayThx, selectUser } from '../../redux/actions/user';
import { billsList } from '../../redux/actions/bill';

import MsgModal, { YNMsgModal } from '../../components/MsgModal';

export class ProfileSubscriptionsScreen extends React.Component {
  state = {
    msgModalVisible: false,
    ynmsgModalVisible: false,
    msgModalText: '',
    msgModalOnYes: () => {},
  };

  componentDidMount() {
    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      this.props.subsList();
    });
  }

<<<<<<< HEAD
  subscribeFunc = item => {
    const { allowDelete, id, payerInfo } = item;
=======
  subscribeFunc = (item) => {
    const {allowDelete, id, payerInfo} = item;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    if (allowDelete) {
      this.setState({
        ynmsgModalVisible: true,
        msgModalText: 'Are you sure to cancel subscription?',
        msgModalOnYes: async () => {
          await this.props.cancelSubscription(id);
          this.props.subsList();
        },
      });
    } else {
      if (payerInfo && payerInfo.id) {
        this.props.SayThx(item.payerInfo.id, this.props.user.userName);
        this.setState({
          msgModalVisible: true,
          msgModalText: `"Thanks" sent to @${payerInfo.userName}`,
        });
      }
    }
  };

  renderSubRow = ({ item }) => {
    if (!item) {
      return null;
    }

    const { allowDelete, payeeInfo, payerInfo, vendorInfo } = item;

    const amount = item.amount;
    const currency = '$';
    const interval = 'MONTH';

    const subString = `${currency}${amount}/${interval}`;

    let redirectUser = allowDelete ? payeeInfo : payerInfo;

    return (
      <TouchableWithoutFeedback onPress={() => console.log(123)}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            borderBottomWidth: 1,
            borderColor: '#d7d7d7',
            padding: 10,
          }}
        >
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={{ width: 65, height: 55 }}>
              <AvatarWithLoader
                size={55}
                source={{
                  uri: allowDelete
                    ? payeeInfo.profileImage
                    : payerInfo.profileImage,
                }}
                refresh
                onPress={() => {
                  if (redirectUser && redirectUser.userName !== 'undefined') {
                    this.props.selectUser(redirectUser);
                    this.props.billsList(redirectUser.id);
                    this.props.navigation.navigate('SelectedUser');
                  }
                }}
              />
            </View>
            <View
              style={{ width: 65, height: 55, position: 'relative', left: -25 }}
            >
              <AvatarWithLoader
                size={55}
                source={{
                  uri: vendorInfo.image,
                }}
              />
            </View>
          </View>

          <View style={{ flex: 4 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 15,
              }}
            >
              {subString}
            </Text>
          </View>

          <View style={{ flex: 3 }}>
            <Button
              title={allowDelete ? 'CANCEL' : 'SAY THX'}
              disabled={!allowDelete && payerInfo.thanks}
              color={'blue'}
              onPress={() => this.subscribeFunc(item)}
              buttonStyle={{
                height: 50,
                width: isIPhoneX() ? 110 : 95,
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

  renderSubsList = () => {
    const { loading } = this.props;

    if (loading) {
      return (
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Loading size={40} />
        </View>
      );
      // return <ActivityIndicator />;
    }

    const data = this.props.data;

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
          }}
        >
          No Subscriptions
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
          renderItem={this.renderSubRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ProfileHeader
          user={this.props.user}
          title={'Subscriptions'}
          onAvatarClicked={() =>
            this.props.navigation.navigate('ProfileSettings')
          }
        />
        {this.renderSubsList()}

        <MsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onOK={() => {
            this.setState({ msgModalVisible: false });
            this.props.subsList();
          }}
        />

        <YNMsgModal
          isVisible={this.state.ynmsgModalVisible}
          onBack={() => this.setState({ ynmsgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onYES={() => {
            this.state.msgModalOnYes();
            this.setState({ ynmsgModalVisible: false });
          }}
          onNO={() => this.setState({ ynmsgModalVisible: false })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  data: state.subs.data,
  error: state.subs.error,
  loading: state.subs.loading,
});

export default connect(mapStateToProps, {
  subsList,

  selectUser,
  billsList,

  cancelSubscription,
  SayThx,
})(ProfileSubscriptionsScreen);
