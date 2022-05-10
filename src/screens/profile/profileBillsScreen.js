import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  Linking,
  Clipboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import moment from 'moment-timezone';

import ProfileHeader from './components/ProfileHeader';
import { Avatar } from 'react-native-elements';

import {
  getMyBills,
  refreshBill,
  removeBillStatus,
} from '../../redux/actions/userbills';

<<<<<<< HEAD
import { getShelters } from '../../redux/actions/user';
import { selectVendor, getVendor } from '../../redux/actions/vendors';

import { SFProFontName, defaultImageDev, defaultImageProd } from '../../app';
import { Loading } from '../../components/Loader';
=======
import {getShelters} from '../../redux/actions/user';
import {selectVendor, getVendor} from '../../redux/actions/vendors';

import {SFProFontName, defaultImageDev, defaultImageProd} from '../../app';
import {Loading} from '../../components/Loader';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import ProfileCompleteModal, {
  isProfileComplete,
} from '../../components/ProfileCompleteModal';

import BillStatusModal from '../../components/BillStatusModal';
import MsgModal from '../../components/MsgModal';

import InviteModal from '../../components/InviteModal';

class ProfileBillsScreen extends React.Component {
  state = {
    userModalVisible: false,

    inviteModalVisible: false,
    shareURL: '',

    msgModalVisible: false,
    msgModalText: '',
    msgModalTextSecond: '',
    openSocial: () => {},
  };

  componentDidMount() {
    // this.props.billsList('4c7487ca-d284-4ed1-9b9d-6ebc1b7ced57');

    this.willFocus = this.props.navigation.addListener('willFocus', () => {
      this.props.getMyBills();
    });

    if (!isProfileComplete(this.props.user)) {
      this.setState({ userModalVisible: true });
    }

    this.props.getShelters();
  }

  copyDLToClipboard = (shareURL, openSocial) => {
    Clipboard.setString(shareURL);
    this.setState({
      msgModalVisible: true,
      msgModalText: 'Bill Link',
      msgModalTextSecond: 'Copied to Clipboard',
      openSocial,
    });
  };

  // socialShare = (type, shareURL) => {
  //   if (type === 'SNAPCHAT') {
  //     Share.open({
  //       title: 'BillZero Bill Link',
  //       url: shareImage,
  //       failOnCancel: false,
  //     });
  //   } else if (type === 'INSTAGRAM') {
  //     Share.open({
  //       title: 'BillZero Bill Link',
  //       url: shareImage,
  //       message: shareURL,
  //       subject: shareURL,
  //       instagramCaption: shareURL,
  //       failOnCancel: false,
  //     });
  //   } else if (type === 'TWITTER') {
  //     Share.shareSingle({
  //       social: Share.Social.TWITTER,
  //       message: shareURL,
  //       url: '',
  //     });
  //   } else if (type === 'FACEBOOK') {
  //     Share.open({
  //       title: 'BillZero Bill Link',
  //       message: shareURL,
  //       failOnCancel: false,
  //     });
  //   }
  // };

<<<<<<< HEAD
  onMFAClicked = async item => {
    const { billerId, mfaChallenges, id } = item;
=======
  onMFAClicked = async (item) => {
    const {billerId, mfaChallenges, id} = item;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    const payload = await this.props.getVendor(billerId);
    const vendorData = {
      ...payload,
      logo: item.logo,
      mfaChallenges,
      billId: id,
    };
    this.props.selectVendor(vendorData);
    this.props.navigation.navigate('Vendor');
  };

  renderBillRow = ({ item }) => {
    if (!item) {
      return null;
    }

    const { userName } = this.props.user;
    const { balance, dueDate, repost, id, status } = item;
    const days = moment(dueDate).diff(moment(), 'day');
    const shareURL = item.dl;

    const isRepostable = repost === 'true';

    const vendorLogo =
      item.image == defaultImageDev || item.image == defaultImageProd
        ? `https://sandbox.finovera.com/static_3.0/resources/images/logos/86x50/${item.logo}`
        : item.image;

    return (
      <View
        style={{
          backgroundColor: status === 'success' ? 'white' : '#ffe0e0',
          paddingRight: 10,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#d7d7d7',
            // borderRadius: 5,
            padding: 5,
            marginTop: 15,
          }}
        >
          <View style={{ width: 65, height: 55 }}>
            <Avatar
              rounded
              size={55}
              source={{
                uri: vendorLogo,
              }}
            />
          </View>
          <View style={{ flex: 1, marginBottom: 5 }}>
            <View>
              <Text style={{ fontFamily: SFProFontName }}>
                {item.billerName}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {status === 'success' && (
                <>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#b0b0b0',
                        fontFamily: SFProFontName,
                      }}
                    >
                      ${Math.ceil(balance)}
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'red',
                        fontFamily: SFProFontName,
                      }}
                    >
                      ${Math.ceil(balance)}
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    {isRepostable ? (
                      <TouchableOpacity
                        onPress={() => this.props.refreshBill(item.id)}
                      >
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlign: 'right',
                            fontFamily: SFProFontName,
                            color: 'red',
                          }}
                        >
                          REPOST
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          textAlign: 'right',
                          fontFamily: SFProFontName,
                          color: 'black',
                        }}
                      >
                        {days}D DUE
                      </Text>
                    )}
                  </View>
                </>
              )}
              {status === 'pending' && (
                <>
                  <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'red',
                        fontFamily: SFProFontName,
                        marginTop: 0,
                      }}
                    >
                      PENDING
                    </Text>
                  </View>
                </>
              )}
            </View>
            {status === 'mfa' && (
<<<<<<< HEAD
              <View style={{ flex: 1, justifyContent: 'center' }}>
=======
              <View style={{flex: 1, justifyContent: 'center'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                <TouchableOpacity onPress={() => this.onMFAClicked(item)}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'red',
                      fontFamily: SFProFontName,
                      marginTop: 5,
                      textAlign: 'right',
<<<<<<< HEAD
                    }}
                  >
=======
                    }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                    ENTER MFA
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {status === 'success' && (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ shareURL });
                    this.setState({ inviteModalVisible: true });
                  }}
                >
                  <Image
                    source={require('../../images/new/3x-TXT-btn.png')}
                    style={{
                      width: 40,
                      height: 35,
                      marginRight: 35,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    this.copyDLToClipboard(shareURL, () => {});
                  }}
                >
                  <Image
                    source={require('../../icons/social/3x-link-share.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={async () => {
                    this.copyDLToClipboard(shareURL, () =>
                      Linking.openURL('snapchat://')
                    );
                  }}
                >
                  <Image
                    source={require('../../icons/social/3x-sn-share.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.copyDLToClipboard(shareURL, () =>
                      Linking.openURL('instagram://')
                    );
                    // if (Linking.canOpenURL('instagram://')) {
                    //   Linking.openURL(`instagram://post?message=${shareURL}`);
                    // } else {
                    //   Linking.openURL(
                    //     `itms-apps://itunes.apple.com/us/app/instagram/id389801252`,
                    //   );
                    // }
                    // this.socialShare('INSTAGRAM', shareURL);
                  }}
                >
                  <Image
                    source={require('../../icons/social/3x-ig-share.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.copyDLToClipboard(shareURL, () => {
                      Linking.openURL(`twitter://post?message=${shareURL}`);
                    });
                    // if (Linking.canOpenURL('twitter://')) {
                    //   Linking.openURL(`twitter://post?message=${shareURL}`);
                    // } else {
                    //   Linking.openURL(
                    //     `itms-apps://itunes.apple.com/us/app/twitter/id333903271`,
                    //   );
                    // }
                    // this.socialShare('TWITTER', shareURL);
                  }}
                >
                  <Image
                    source={require('../../icons/social/3x-tw-share.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      marginRight: 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.copyDLToClipboard(shareURL, () => {
                      Linking.openURL('fb://');
                    });
                    // if (Linking.canOpenURL('fb://')) {
                    //   Linking.openURL(`fb://post?message=${shareURL}`);
                    // } else {
                    //   Linking.openURL(
                    //     `itms-apps://itunes.apple.com/us/app/facebook/id284882215`,
                    //   );
                    // }
                    // this.socialShare('FACEBOOK', shareURL);
                  }}
                >
                  <Image
                    source={require('../../icons/social/3x-fb-share.png')}
                    style={{ width: 30, height: 30, marginLeft: 5 }}
                  />
                </TouchableOpacity>
              </View>
            )}
            {status !== 'success' && (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  height: 10,
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  renderBillsList = () => {
    const { loading, bills } = this.props;

    if (loading) {
      return (
        <View style={{ alignItems: 'center', marginTop: 30, flex: 1 }}>
          <Loading size={40} />
        </View>
      );
      // return <ActivityIndicator />;
    }

    if (bills === null || bills.length === 0) {
      return (
        <>
          <Text
            h4
            style={{
              marginTop: 50,
              marginBottom: 16,
              textAlign: 'center',
              fontFamily: SFProFontName,
              fontWeight: 'bold',
              fontSize: 25,
              flex: 1,
            }}
          >
            No Bills
          </Text>
        </>
      );
    } else {
      return (
        <FlatList
          style={{
            width: '100%',
          }}
          data={bills}
          renderItem={this.renderBillRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  };

  renderBillStatusModal = () => {
    const { billsStatus } = this.props;
    if (Object.keys(billsStatus).length !== 0) {
      const { status } = billsStatus;
      let firstLine = '';
      let secondLine = '';
      if (status === 'updating') {
        // Processing
        firstLine = 'Bill Processing';
        secondLine = 'Will Notify Shortly';
      } else if (status === 'success') {
        // Ready
        firstLine = 'Bill is Ready';
        secondLine = '';
      } else if (status === 'waiting') {
        //MFA Require
        firstLine = 'MFA require';
        secondLine = '';
      } else if (status === 'fail') {
        firstLine = 'Authentication Failed';
        secondLine = 'Please try again';
      }
      setTimeout(() => {
        this.props.removeBillStatus();
      }, 5000);
      return (
        <BillStatusModal
          title={'Bill Status'}
          firstLine={firstLine}
          secondLine={secondLine}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ProfileHeader
          user={this.props.user}
          title={'BILLS'}
          onAvatarClicked={() =>
            this.props.navigation.navigate('ProfileSettings')
          }
        />
        {this.renderBillsList()}

        <Button
          title={'ADD BILL'}
          titleStyle={{
            fontFamily: SFProFontName,
            fontSize: 20,
            color: '#0e2209',
            fontWeight: 'bold',
          }}
          buttonStyle={{
            backgroundColor: '#61f047',
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
          }}
          onPress={() => this.props.navigation.navigate('Vendors')}
        />

        {this.state.userModalVisible && (
          <ProfileCompleteModal
            isVisible={true}
            onBackdropPress={() => this.setState({ userModalVisible: false })}
            title={'POST MY BILL NOW!'}
            submit={() => this.setState({ userModalVisible: false })}
          />
        )}

        {this.renderBillStatusModal()}

        {this.state.msgModalVisible && (
          <MsgModal
            isVisible={this.state.msgModalVisible}
            onBack={() => this.setState({ msgModalVisible: false })}
            title="Status"
            body={this.state.msgModalText}
            second={this.state.msgModalTextSecond}
            onOK={() => {
              this.setState({ msgModalVisible: false });
              this.state.openSocial();
            }}
          />
        )}

        {this.state.inviteModalVisible && (
          <InviteModal
<<<<<<< HEAD
            hideModal={() => this.setState({ inviteModalVisible: false })}
=======
            hideModal={() => this.setState({inviteModalVisible: false})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            text={`Verified Bill $ Request @${this.props.user.userName}\n${this.state.shareURL}`}
            title="Direct Money Request"
            buttonTitle="SEND NOW"
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,

  bills: state.userbills.data,
  loading: state.userbills.loading,

  billsStatus: state.userbills.status,
});

export default connect(mapStateToProps, {
  getMyBills,
  refreshBill,
  removeBillStatus,

  getVendor,
  selectVendor,

  getShelters,
})(ProfileBillsScreen);
