import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';


import {getPayRule} from '../redux/actions/payments';
import {selectUserBillById} from '../redux/actions/bill';
import {selectUserByName} from '../redux/actions/user';
import {selectVendor} from '../redux/actions/vendors';

import SplashScreen from 'react-native-splash-screen';

class InitScreen extends Component {
<<<<<<< HEAD
  async componentDidMount() {
    SplashScreen.hide();
    this.props.navigation.navigate('Home');
=======
  constructor() {
    super();
    this.branchSubscriber = this.branchSubscriber.bind(this);
    this.navigated = false;
  }

  componentDidMount() {
    this.branchUnsubscribe && this.branchUnsubscribe();
    this.branchUnsubscribe = branch.subscribe(this.branchSubscriber);
    
  }

  branchSubscriber (...args) {
    try {
      this._branchSubscriber(...args)
    } catch (error) {
      console.error(error)
    }
  }
  
  _branchSubscriber({ err, params }) {
    if (err != null) {
      console.error(err)
      return
    }

    if (params && params.bzdata) {
      const {navigationTarget} = params.bzdata;
      
      if (navigationTarget === 'user') {
        return this._navigateToUser(params);
      } else if (navigationTarget === 'vendor') {
        return this._navigateToVendor(params);
      }
    }

    if (!this.navigated) {
      this.navigate('Home')
    }
  }

  async _navigateToUser(params) {
    if (!params || !params.bzdata) {
      return;
    }

    this.props.getPayRule();
    const {userName, billId} = params.bzdata;

    if (userName) {
      const status = await this.props.selectUserByName(userName);

      if (status === 'fail') {
        return;
      }

      if (billId && billId !== '') {
        this.props.selectUserBillById(userName, billId);
      }

      this.navigate('SelectedUser');
    }
  }

  async _navigateToVendor(params) {
    const {vendor} = params.bzdata;

    if (vendor) {
      await this.props.selectVendor(vendor);
      this.navigate('Vendor');
      return;
    }

    this.navigate('Vendor');
  }

  navigate(targetScreen) {
    
    if (!this.navigated) {
      SplashScreen.hide();
    }

    this.navigated = true
    this.props.navigation.navigate(targetScreen);
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  }

  // async createNotificationListeners() {
  //   const billUpdateMsg = 'Your bill is updated';

  //   this.notificationListener = firebase
  //     .notifications()
  //     .onNotification(notification => {
  //       const {
  //         body,
  //         data: {billid, status},
  //       } = notification;
  //       if (body === billUpdateMsg) {
  //         this.props.updateBillStatus({
  //           vendorId: billid,
  //           vendorName: '',
  //           status,
  //         });
  //       }
  //     });

  //   this.notificationOpenedListener = firebase
  //     .notifications()
  //     .onNotificationOpened(notificationOpen => {
  //       const {
  //         body,
  //         data: {billid, status},
  //       } = notificationOpen.notification;
  //       if (body === billUpdateMsg) {
  //         this.props.updateBillStatus({
  //           vendorId: billid,
  //           vendorName: '',
  //           status,
  //         });
  //         this.props.navigation.navigate('Profile');
  //       }
  //     });

  //   // const notificationOpen = await firebase
  //   //   .notifications()
  //   //   .getInitialNotification();
  //   // if (notificationOpen) {
  //   //   const {title, body} = notificationOpen.notification;
  //   //   console.log('--- noti open: ', title + ' : ' + body);
  //   // }

  //   // this.messageListener = firebase.messaging().onMessage(message => {
  //   //   console.log('--- message: ', JSON.stringify(message));
  //   // });
  // }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../icons/splash.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps, {})(InitScreen);
=======
const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, {
  getPayRule,
  selectUserBillById,
  selectUserByName,
  selectVendor,
})(InitScreen);
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
