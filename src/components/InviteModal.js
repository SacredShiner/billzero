import React, { Component } from 'react';
import { View, Text, FlatList, Alert, PermissionsAndroid } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';

import Contacts from 'react-native-contacts';

import { Loading } from './Loader';
import { screenHeight, SFProFontName, platform } from '../app';

import { sendInvite } from '../redux/actions/user';

const borderRadius = 15;

class InviteModal extends Component {
  state = {
    contacts: [],
    loading: false,

    selectAllCheck: true,
  };

  UNSAFE_componentWillMount() {
    this.setState({ loading: true });
    if (platform === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'BillZero app would like to view your contacts.',
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  }

  loadContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        this.setState({ loading: false });
        console.log(err);
        return;
      }
<<<<<<< HEAD
      contacts.forEach(item => (item.check = true));
      this.setState({ contacts, loading: false });
=======
      contacts.forEach((item) => (item.check = true));
      this.setState({contacts, loading: false});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      console.log(contacts);
    });
  };

  inviteFriendsNow = () => {
    let phones = [];
    this.state.contacts.forEach((item) => {
      if (item.check === true && item.phoneNumbers) {
        let phoneNumbers = item.phoneNumbers;
        for (var i = 0; i < phoneNumbers.length; i++) {
          phones.push(phoneNumbers[i].number);
        }
      }
    });
    // console.log(phones);
    const { text } = this.props;
    this.props.sendInvite(phones, text);
    Alert.alert(
      'Success',
      'Invitation has been sent',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
      { cancelable: false }
    );
  };

  renderContactRow = ({ item, index }) => {
    // const name = `${item.givenName} ${item.middleName} ${item.familyName}`;
    let name = '';
    if (item.givenName === '' && item.familyName === '') {
      if (item.company === '') {
        return null;
      }
      name = item.company;
    } else {
      name = `${item.givenName} ${item.familyName}`;
    }
    return (
      <View>
        <CheckBox
          title={name}
          checked={item.check}
          onPress={() => {
            let contacts = [...this.state.contacts];
            contacts[index].check = !contacts[index].check;
            console.log(contacts);
            this.setState({ contacts });
          }}
        />
      </View>
    );
  };

  renderModalBody = () => {
    const { title, buttonTitle } = this.props;
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: screenHeight - 150,
          borderRadius: borderRadius,
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: '#03a5f9',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: borderRadius,
            borderTopRightRadius: borderRadius,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontFamily: SFProFontName,
              fontWeight: 'bold',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            {title}
          </Text>
        </View>
        {this.state.loading ? (
          <View
            style={{
              flex: 1,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Loading size={40} />
          </View>
        ) : this.state.contacts.length !== 0 ? (
          <View
            style={{
              flex: 1,
              margin: 5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <CheckBox
              title={'SELECT ALL'}
              checked={this.state.selectAllCheck}
              onPress={() => {
                const selectAllCheck = !this.state.selectAllCheck;
                let contacts = [...this.state.contacts];
                for (var i = 0; i < contacts.length; i++) {
                  contacts[i].check = selectAllCheck;
                }
                this.setState({ contacts, selectAllCheck });
                // contacts[index].check = !contacts[index].check;
                // console.log(contacts);
                // this.setState({contacts});
              }}
            />
            <FlatList
              data={this.state.contacts}
              renderItem={this.renderContactRow}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontSize: 25,
                fontFamily: SFProFontName,
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              No Contacts
            </Text>
          </View>
        )}
        <Button
          title={buttonTitle}
          buttonStyle={{
            width: '100%',
            height: 50,
            backgroundColor: '#ff0030',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          }}
          titleStyle={{
            color: 'white',
            fontSize: 21,
            fontFamily: SFProFontName,
            fontWeight: 'bold',
          }}
          onPress={this.inviteFriendsNow}
        />
      </View>
    );
  };

  render() {
    return (
      <Modal isVisible={true} onBackdropPress={this.props.hideModal}>
        {this.renderModalBody()}
      </Modal>
    );
  }
}

export default connect(null, {
  sendInvite,
})(InviteModal);
