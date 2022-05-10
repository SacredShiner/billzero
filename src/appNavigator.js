import React from 'react';
import { View } from 'react-native';

import { helpIconUp, helpIconDown } from './app';
import { ImageWithLoader } from './components/Loader';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './screens/home';
import VendorScreen from './screens/vendor';
import VendorsScreen from './screens/vendors';
import UsersScreen from './screens/users';
import SmsVerificationScreen from './screens/sms';
import CidScreen from './screens/cid';

import ProfileSetupScreen from './screens/profileSetup';
import ProfileSettingsScreen from './screens/profileSettings';
// import ProfileSetup1Screen from './screens/profileSetup1';
// import ProfileSetup2Screen from './screens/profileSetup2';

import SelectedUserScreen from './screens/selectedUser';
import SelectedUserBillCheckoutScreen from './screens/selectedUserBillCheckout';

import ProfileBillsScreen from './screens/profile/profileBillsScreen';
import ProfilePaymentsScreen from './screens/profile/profilePaymentsScreen';
import ProfilePayersScreen from './screens/profile/profilePayersScreen';
import ProfileSubscriptionsScreen from './screens/profile/profileSubscriptionsScreen';
import ProfilePayMethodsScreen from './screens/profile/profilePayMethodsScreen';

import ReceiptScreen from './screens/Receipt';
import SplashScreen from './screens/splashscreen';
import InitScreen from './screens/initScreen';
import QRScreen from './screens/qRScreen';

import HomeBackButton from './components/HomeBackButton';
import SettingsHeaderButton from './screens/profile/components/SettingsHeaderButton';
import HeaderLogo from './components/HeaderLogo';

function createTabScreen(component, title, iconName) {
  return {
    screen: createStackNavigator({
      [title]: {
        screen: component,
        navigationOptions: ({ navigation }) => {
          const { params = {} } = navigation.state;
          const helpIcon = params.modalVisible ? helpIconUp : helpIconDown;

          return {
            headerTitle: (
              <HeaderLogo onPress={() => navigation.navigate('Home')} />
            ),
            // title: 'Profile',
            // headerTitleStyle: {
            //   fontFamily: SFProFontName
            // },
            headerLeft: (
              <HomeBackButton onPress={() => navigation.navigate('Home')} />
            ),
            // headerRight: (
            //   <SettingsHeaderButton onPress={() => navigation.navigate('ProfileSettings')} />
            // )
            headerRight:
              title !== 'Methods' ? null : params.showHelp ? (
                <View style={{ marginTop: -10, marginRight: 10 }}>
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
        },
      },
    }),
<<<<<<< HEAD
    tabBarComponent: props => {
      <BottomTabBar
        {...props}
        style={{ borderTopColor: 'red', color: 'red' }}
      />;
=======
    tabBarComponent: (props) => {
      <BottomTabBar {...props} style={{borderTopColor: 'red', color: 'red'}} />;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    },
    navigationOptions: {
      title: title,
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name={iconName} size={24} color={tintColor} />
      ),
    },
  };
}

const ProfileTabNavigator = createBottomTabNavigator({
  ProfileBills: createTabScreen(
    ProfileBillsScreen,
    'Bills',
    'file-invoice-dollar'
  ),
  ProfilePayMethods: createTabScreen(
    ProfilePayMethodsScreen,
    'Methods',
    'credit-card'
  ),
  ProfilePayments: createTabScreen(
    ProfilePaymentsScreen,
    'Payments',
    'money-check-alt'
  ),
  ProfilePayers: createTabScreen(ProfilePayersScreen, 'Payers', 'user-friends'),
  ProfileSubscriptions: createTabScreen(
    ProfileSubscriptionsScreen,
    'Subs',
    'sync-alt'
  ),
});

const VendorsStackNavigation = createStackNavigator({
  Vendors: {
    screen: VendorsScreen,
  },
  Vendor: {
    screen: VendorScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
});

const UsersStackNavigation = createStackNavigator({
  Users: {
    screen: UsersScreen,
  },
  SelectedUser: {
    screen: SelectedUserScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  SelectedUserBillCheckout: {
    screen: SelectedUserBillCheckoutScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  Receipt: {
    screen: ReceiptScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  ProfileSettings: {
    screen: ProfileSettingsScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
});

const SignInStackNavigation = createStackNavigator({
  Cid: {
    screen: CidScreen,
  },
  Sms: {
    screen: SmsVerificationScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  ProfileSetup: {
    screen: ProfileSetupScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  // ProfileSetup1: {
  //   screen: ProfileSetup1Screen
  // },
  // ProfileSetup2: {
  //   screen: ProfileSetup2Screen
  // }
});

const MainSwitchNavigator = createAnimatedSwitchNavigator(
  {
    Home: HomeScreen,
    Vendors: VendorsStackNavigation,
    Users: UsersStackNavigation,
    SignIn: SignInStackNavigation,
    Profile: ProfileTabNavigator,
    Splash: SplashScreen,
    Init: InitScreen,
    QR: QRScreen,
  },
  {
    initialRouteName: 'Init',
    defaultNavigationOptions: {
      headerBackTitle: 'Back',
    },
  }
);

export const AppNavigator = createAppContainer(MainSwitchNavigator);

// const AppNavigator___ = createAppContainer(
//   createStackNavigator(
//     {
//       Home: {
//         screen: HomeScreen,
//       },
//       Vendors: {
//         screen: VendorsScreen,
//       },
//       Vendor: {
//         screen: VendorScreen,
//         navigationOptions: {
//           gesturesEnabled: false,
//         },
//       },

//       Profile: ProfileTabNavigator,
//     },
//     {
//       initialRouteName: 'Home',
//       defaultNavigationOptions: {
//         headerBackTitle: 'Back',
//       },
//     },
//   ),
// );
