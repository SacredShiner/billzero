import React, { Component, Fragment } from 'react';
import {
  View,
  FlatList,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import { Avatar, Text, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import moment from 'moment-timezone';

import SelectedUserBillScreen from './selectedUserBillComponent';
import UserAvatarNameLocation from '../components/UserAvatarNameLocation';

import AddPaymentMethod from '../components/AddPaymentMethod';

import {
  billsPay,
  selectUserBill,
  selectUserPaymentMethod,
} from '../redux/actions/bill';

import {
  SFProFontName,
  helpIconUp,
  helpIconDown,
  defaultImageDev,
  defaultImageProd,
} from '../app';
import HomeBackButton from '../components/HomeBackButton';
import HeaderLogo from '../components/HeaderLogo';
import {
  Loading,
  AvatarWithLoader,
  ImageWithLoader,
} from '../components/Loader';
import { isIPhoneX } from '../components/deviceInfo';

class SelectedUserScreen extends Component {
  constructor() {
    super();

    this.state = {
      selectedBill: null,
      height: null,
      addPaymentClicked: false,

      helpModalVisible: false,
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const helpIcon = params.modalVisible ? helpIconUp : helpIconDown;
    return {
      headerTitle: <HeaderLogo onPress={() => navigation.navigate('Home')} />,
      headerLeft: <HomeBackButton onPress={() => navigation.goBack()} />,
      headerRight: params.showHelp ? (
<<<<<<< HEAD
        <View style={{ marginTop: -10, marginRight: 10 }}>
=======
        <View style={{marginTop: -10, marginRight: 10}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <ImageWithLoader
            onPress={() => params.toggleModal(true)}
            source={helpIcon}
            width={43}
            height={43}
            disableLoading
          />
        </View>
      ) : null,
    };
  };

  onAddPaymentClicked = () => {
    this.setState({ addPaymentClicked: !this.state.addPaymentClicked });
    this.props.navigation.setParams({
      showHelp: !this.state.addPaymentClicked,
    });
  };

  onAddPaymentDone = () => {
    this.setState({ addPaymentClicked: false });
    this.props.navigation.setParams({ showHelp: false });
    this.props.navigation.navigate('SelectedUserBillCheckout');
  };

  onPaymentSelected = (card, value) => {
    this.props.selectUserPaymentMethod({ ...card, value });
    this.props.navigation.navigate('SelectedUserBillCheckout');
  };

<<<<<<< HEAD
  toggleModal = toggle => {
    this.setState({ helpModalVisible: toggle });
=======
  toggleModal = (toggle) => {
    this.setState({helpModalVisible: toggle});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    this.props.navigation.setParams({
      modalVisible: toggle,
    });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      showHelp: false,
      modalVisible: false,
      toggleModal: this.toggleModal,
    });

    const { selectUserBill, selectUserPaymentMethod } = this.props;

    if (this.props.needRedirect) {
      this.setState({ addPaymentClicked: true });
      this.props.navigation.setParams({ showHelp: true });
    } else {
      selectUserBill(null);
      // selectUserPaymentMethod({ value: 0 });
    }

    this.didFocus = this.props.navigation.addListener('didFocus', () => {
      if (this.props.navigation.getParam('refresh')) {
        this.props.selectUserBill(null);
        // this.setState({ height: 85 });
        // this.props.selectUserBill(null);
        // selectUserPaymentMethod(null);
      }
    });
  }

  componentDidUpdate(prevProps) {
    const { bills } = this.props;
    if (
      bills !== prevProps.bills &&
      bills &&
      bills.statusData === 'phone_validation'
    ) {
      this.props.navigation.navigate('Cid');
    }
  }

  renderBillRow = ({ item }) => {
    if (!item) {
      return null;
    }

    const {balance, dueDate, paymentMethods} = item;

    if (!balance || balance == 0) {
      return null;
    }

    const payable =
      paymentMethods.indexOf('creditcard') != -1 ||
      paymentMethods.indexOf('bank') != -1;
    if (!payable) {
      return null;
    }

    const days = moment(dueDate).diff(moment(), 'day');

    const vendorLogo =
      item.image == defaultImageDev || item.image == defaultImageProd
        ? `https://sandbox.finovera.com/static_3.0/resources/images/logos/86x50/${item.logo}`
        : item.image;

    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (this.props.selectedUserBill == null) {
            LayoutAnimation.spring();
            this.setState({ height: 0 });
            this.props.selectUserBill(item);
          } else {
            LayoutAnimation.easeInEaseOut();
            this.props.selectUserBill(null);
          }
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#d7d7d7',
            borderRadius: 15,
            backgroundColor: '#f4f7ff',
            padding: 5,
<<<<<<< HEAD
          }}
        >
          <View style={{ width: 65, height: 55 }}>
            <AvatarWithLoader size={55} source={{ uri: vendorLogo }} />
=======
          }}>
          <View style={{width: 65, height: 55}}>
            <AvatarWithLoader size={55} source={{uri: vendorLogo}} />
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {/* {item.image === null ||
            item.image ===
              'https://billzero-dev.s3.amazonaws.com/vendors/image110x110.jpg' ? (
              <Avatar
                rounded
                size={55}
                title={vendorAvatarTitle}
                titleStyle={{
                  fontFamily: SFProFontName,
                  fontSize: 18,
                  fontWeight: 'bold'
                }}
              />
            ) : (
              <AvatarWithLoader size={55} source={{uri: item.image}} refresh />
            )} */}
          </View>
<<<<<<< HEAD
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 4, justifyContent: 'center' }}>
                <Text style={{ fontFamily: SFProFontName }}>{item.name}</Text>
=======
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Text style={{fontFamily: SFProFontName}}>{item.name}</Text>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              </View>
              {/* <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#b0b0b0', fontFamily: SFProFontName }}>${Math.ceil(total)}</Text>
              </View> */}
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: isIPhoneX() ? 21 : 21,
                    fontWeight: 'bold',
                    color: 'red',
                    fontFamily: SFProFontName,
                  }}
                >
                  ${Math.ceil(balance)}
                </Text>
              </View>
              <View style={{ flex: 4, justifyContent: 'center' }}>
                <Text
                  style={{
                    fontSize: isIPhoneX() ? 21 : 21,
                    fontWeight: 'bold',
                    textAlign: 'right',
                    fontFamily: SFProFontName,
                    marginRight: 5,
                    color: days >= 0 ? 'black' : 'red',
                  }}
                >
                  {days >= 0 ? `${days}D DUE` : `${-days}D LATE`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderBillsList = () => {
<<<<<<< HEAD
    const { loading, selectedUserBill, selectedUserBills } = this.props;
=======
    const {loading, selectedUserBill, selectedUserBills} = this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    if (loading) {
      return <Loading size={30} />;
      // return <Text style={{fontFamily: SFProFontName}} >Loading...</Text>
    }

    let items = selectedUserBill ? [selectedUserBill] : selectedUserBills;

    if (items.length === 0) {
      return (
        <Text
          h4
          style={{
            marginTop: 50,
            marginBottom: 16,
            textAlign: 'center',
            width: '80%',
            fontFamily: SFProFontName,
            fontSize: 22,
            fontWeight: 'bold',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          No Active Bills
        </Text>
      );
    } else {
      return (
        <Fragment>
          <View
<<<<<<< HEAD
            style={{
              height: this.state.height && 'auto',
              alignItems: 'center',
            }}
            onLayout={e =>
              this.setState({ height: e.nativeEvent.layout.height })
            }
          >
=======
            style={{height: this.state.height && 'auto', alignItems: 'center'}}
            onLayout={(e) =>
              this.setState({height: e.nativeEvent.layout.height})
            }>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              h4
              style={{
                marginTop: 16,
                fontFamily: SFProFontName,
                fontSize: 35,
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Verified Bills
            </Text>
            <Text
              h5
              style={{
                marginBottom: 16,
                color: '#a6a6a6',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Select Below
            </Text>
          </View>
          <FlatList
            style={{
              width: '100%',
              paddingRight: 7,
              paddingLeft: 7,
              marginTop: 10,
            }}
            contentContainerStyle={{
              paddingBottom: selectedUserBill ? 0 : 200,
            }}
            data={items}
            renderItem={this.renderBillRow}
            keyExtractor={(item, index) => item.logo}
            extraData={this.props.selectedUserBill}
          />
        </Fragment>
      );
    }

    return null;
  };

  onBillPay = () => {
<<<<<<< HEAD
    const { selectedUserBill } = this.props;
=======
    const {selectedUserBill} = this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    this.props.billsPay(selectedUserBill.id);
  };

  renderBills = () => {
    const { selectedUserBill } = this.props;

    return (
      <>
        <View style={{ alignItems: 'center' }}>{this.renderBillsList()}</View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {selectedUserBill && (
            <SelectedUserBillScreen
              currentUser={this.props.user}
              payBill={this.onBillPay}
              selectedUserBill={{
                ...selectedUserBill,
                balance: Math.ceil(selectedUserBill.balance),
              }}
              onPaymentSelected={this.onPaymentSelected}
              onAddPaymentClicked={this.onAddPaymentClicked}
              loading={this.billsLoading}
            />
          )}
        </View>
      </>
    );
  };

  render() {
    const {selectedUser} = this.props;

    return (
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: 'white' }}>
=======
      <View style={{flex: 1, backgroundColor: 'white'}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        {this.state.addPaymentClicked ? (
          <AddPaymentMethod
            onBack={this.onAddPaymentClicked}
            onDone={this.onAddPaymentDone}
            payAmount={this.props.payAmount}
            modalVisible={this.state.helpModalVisible}
            hideModal={() => this.toggleModal(false)}
          />
        ) : (
          <>
            <UserAvatarNameLocation user={selectedUser} refresh />
            {this.renderBills()}
          </>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  selectedUser: state.users.selectedUser,
  selectedUserBill: state.selectedUserBill,
  selectedUserBills: state.selectedUserBills.items,
  loading: state.selectedUserBills.loading,

  bills: state.bills.data,
  billsLoading: state.bills.loading,

  needRedirect: state.user.needRedirect,

  payAmount: state.selectedUserPaymentMethod.value,
});

export default connect(mapStateToProps, {
  billsPay,
  selectUserBill,
  selectUserPaymentMethod,
})(SelectedUserScreen);
