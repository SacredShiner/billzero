import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
<<<<<<< HEAD
import { Button, Image } from 'react-native-elements';
import { connect } from 'react-redux';
=======
import {Button, Image} from 'react-native-elements';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import ProfileHeader from './components/ProfileHeader';

import {
  paymethodsList,
  deletePaymentMethod,
} from '../../redux/actions/paymethods';
<<<<<<< HEAD
import { SFProFontName, helpIconUp, helpIconDown } from '../../../app';
=======
import {SFProFontName, helpIconUp, helpIconDown} from '../../../app';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import AddPaymentMethod from '../../components/AddPaymentMethod';
import { Loading, ImageWithLoader } from '../../components/Loader';

import { YNMsgModal } from '../../components/MsgModal';

export class ProfilePayMethodsScreen extends React.Component {
  state = {
    addClicked: false,

    helpModalVisible: false,

    msgModalVisible: false,
    msgModalText: '',
    msgModalOnYes: () => {},
  };

  componentDidMount() {
    this.props.paymethodsList();

    this.props.navigation.setParams({
      showHelp: false,
      modalVisible: false,
      toggleModal: this.toggleModal,
    });
  }

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

<<<<<<< HEAD
  renderCreditCardRow = ({ item }) => {
=======
  renderCreditCardRow = ({item}) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    if (!item) {
      return null;
    }

<<<<<<< HEAD
    const { brand, last4, id } = item;
=======
    const {brand, last4, id} = item;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    var icon = null,
      name = '';
    if (brand === 'Visa') {
      icon = require(`../../icons/visa.png`);
      name = 'VISA';
    } else if (brand === 'MasterCard') {
      icon = require(`../../icons/mastercard.png`);
      name = 'MC';
    } else if (brand === 'American Express') {
      icon = require(`../../icons/american-express.png`);
      name = 'AMEX';
    }

    return (
      <TouchableWithoutFeedback>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#e5e4dd',
            borderWidth: 1,
            borderColor: '#dbdbdb',
            marginTop: 10,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View
            style={{
              width: 100,
              height: 45,
              backgroundColor: '#fff',
              justifyContent: 'center',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <ImageWithLoader source={icon} width={100} height={40} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000000',
                fontFamily: SFProFontName,
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {name.toUpperCase()} * {last4}
            </Text>
          </View>
          <View
            style={{
              width: 100,
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Button
              onPress={() => {
                this.setState({
                  msgModalVisible: true,
                  msgModalText: 'Are you sure to remove card?',
                  msgModalOnYes: async () => {
                    await this.props.deletePaymentMethod(id);
                    this.props.paymethodsList();
                  },
                });
              }}
              title={'REMOVE'}
              titleStyle={{fontFamily: SFProFontName}}
              type={'clear'}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderPayMethods = () => {
    const {loading, data} = this.props;

    if (loading) {
      return (
<<<<<<< HEAD
        <View style={{ alignItems: 'center', marginTop: 30 }}>
=======
        <View style={{alignItems: 'center', marginTop: 30}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Loading size={40} />
        </View>
      );
      // return <ActivityIndicator />;
    }

    if (data == null || data.length === 0) {
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
            No Payment Methods
          </Text>

          <Button
            title={'ADD PAYMENT METHOD'}
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
            onPress={() => {
              this.setState({ addClicked: true });
              this.props.navigation.setParams({
                showHelp: true,
              });
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <FlatList
            style={{
              width: '100%',
              paddingRight: 10,
              paddingLeft: 10,
              flex: 1,
            }}
            data={data}
            renderItem={this.renderCreditCardRow}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button
            title={'ADD PAYMENT METHOD'}
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
            onPress={() => {
              this.setState({ addClicked: true });
              this.props.navigation.setParams({
                showHelp: true,
              });
            }}
          />
        </>
      );
    }
  };

  render() {
    return (
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {this.state.addClicked ? (
          <AddPaymentMethod
            onBack={() => {
              this.setState({ addClicked: false });
=======
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {this.state.addClicked ? (
          <AddPaymentMethod
            onBack={() => {
              this.setState({addClicked: false});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              this.props.navigation.setParams({
                showHelp: false,
              });
            }}
            onDone={() => {
<<<<<<< HEAD
              this.setState({ addClicked: false });
=======
              this.setState({addClicked: false});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              this.props.navigation.setParams({
                showHelp: false,
              });
              this.props.paymethodsList();
            }}
            modalVisible={this.state.helpModalVisible}
            hideModal={() => this.toggleModal(false)}
          />
        ) : (
          <>
            <ProfileHeader
              user={this.props.user}
              title={'PAY METHODS'}
              onAvatarClicked={() =>
                this.props.navigation.navigate('ProfileSettings')
              }
            />
            {this.renderPayMethods()}
          </>
        )}

        <YNMsgModal
          isVisible={this.state.msgModalVisible}
          onBack={() => this.setState({ msgModalVisible: false })}
          title="Status"
          body={this.state.msgModalText}
          onYES={() => {
            this.state.msgModalOnYes();
            this.setState({ msgModalVisible: false });
          }}
          onNO={() => this.setState({ msgModalVisible: false })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.data,

  data: state.paymethods.data,
  loading: state.paymethods.loading,
  error: state.paymethods.loading,
});

export default connect(mapStateToProps, {
  paymethodsList,
  deletePaymentMethod,
})(ProfilePayMethodsScreen);
