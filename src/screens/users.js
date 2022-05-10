<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import moment from 'moment-timezone';

import {SearchBar, ListItem, Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import CachedAvatar from '../components/CachedAvatar';

<<<<<<< HEAD
import { searchUsersByUsername, selectUser } from '../redux/actions/user';
import { billsListByUsername } from '../redux/actions/bill';
import { getPayRule } from '../redux/actions/payments';
=======
import {searchUsersByUsername, selectUser} from '../redux/actions/user';
import {billsListByUsername} from '../redux/actions/bill';
import {getPayRule} from '../redux/actions/payments';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import HomeBackButton from '../components/HomeBackButton';

import {SFProFontName, defaultUserImage} from '../app';
import HeaderLogo from '../components/HeaderLogo';
import {Loading} from '../components/Loader';

class UsersScreen extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <HeaderLogo onPress={() => navigation.navigate('Home')} />,
      // title: 'Users',
      // headerTitleStyle: {
      //   fontFamily: SFProFontName
      // },
      headerLeft: (
        <HomeBackButton onPress={() => navigation.navigate('Home')} />
      ),
    };
  };

  updateSearch = (search) => {
    this.setState({search});
    if (search.length > 0) {
      this.props.searchUsersByUsername(search);
    }
  };

  onClear = () => {
    this.setState({search: ''});
  };

  componentDidMount() {
    // this.props.selectUser(null);
    const { searchText } = this.props;

    if (searchText) {
      // this.setState({ search: searchText });
      this.updateSearch(searchText);
    }
  }

  // static navigationOptions = {
  //   title: null
  // };

  onUserSelect = user => {
    this.props.getPayRule();
    this.props.selectUser(user);
    this.props.billsListByUsername(user.userName);
    // this.props.billsList(user.id)
    this.props.navigation.navigate('SelectedUser');
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <Animatable.View animation="bounceInLeft" delay={100}>
      <ListItem
        leftAvatar={{
          title:
            item.userName && item.userName.length > 0
              ? item.userName[0].toUpperCase()
              : '',
          source: item.profileImage
            ? {
                uri: `${item.profileImage}?random=${moment().format(
<<<<<<< HEAD
                  'YYYYMMDDHHmm'
=======
                  'YYYYMMDDHHmm',
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
                )}`,
              }
            : defaultUserImage,
          size: 50,
          renderPlaceholderContent: <Loading size={50} />,
        }}
        // leftAvatar={
        //   <CachedAvatar
        //     source={{ uri: item.profileImage }}
        //     size={50}
        //   />
        // }
        title={item.userName}
        titleStyle={{fontFamily: SFProFontName, fontSize: 24}}
        // subtitle={`${item.firstName ? item.firstName: ''} ${item.lastName ? item.lastName: ''}`}
        // subtitleStyle={{ fontFamily: SFProFontName }}
        chevron
        topDivider
        onPress={() => this.onUserSelect(item)}
      />
    </Animatable.View>
  );

  render() {
    const {users, loading} = this.props;
    const {search} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <SearchBar
          lightTheme
          round
          placeholder="Search"
          onChangeText={this.updateSearch}
          onClear={this.onClear}
          value={search}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          containerStyle={{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingRight: 10,
            paddingLeft: 10,
          }}
          inputStyle={{
            fontFamily: SFProFontName,
          }}
        />
<<<<<<< HEAD
        {loading && (
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Loading size={40} />
          </View>
        )
        // <ActivityIndicator style={{ margin: 20 }} />
        }
        {search.length == 0 || users.length == 0 ? (
          <View style={{ alignItems: 'center', marginTop: 20 }}>
=======
        {
          loading && (
            <View style={{alignItems: 'center', marginTop: 30}}>
              <Loading size={40} />
            </View>
          )
          // <ActivityIndicator style={{ margin: 20 }} />
        }
        {search.length == 0 || users.length == 0 ? (
          <View style={{alignItems: 'center', marginTop: 20}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontFamily: SFProFontName,
                fontWeight: 'bold',
                fontSize: 25,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {search.length == 0 ? 'Search for User...' : 'No Results'}
            </Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={users}
            extraData={this.state}
            renderItem={this.renderItem}
            refreshing={true}
            // onRefresh={ () => null }
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    fontSize: 60,
    margin: 10,
    color: '#000000',
  },
});

const mapStateToProps = (state) => ({
  users: state.users.items,
  loading: state.users.loading,
  searchText: state.users.searchText,
});

export default connect(mapStateToProps, {
  searchUsersByUsername,
  selectUser,
  billsListByUsername,
  getPayRule,
})(UsersScreen);
