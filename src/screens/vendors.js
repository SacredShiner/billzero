<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
=======
import React, {Component, Fragment} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ImageBackground,
  FlatList,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
<<<<<<< HEAD
import { Image, CheckBox, Button } from 'react-native-elements';
import { connect } from 'react-redux';
=======
import {Image, CheckBox, Button} from 'react-native-elements';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import moment from 'moment-timezone';

import Modal from 'react-native-modal';

<<<<<<< HEAD
import { debounce } from 'lodash';
=======
import {debounce} from 'lodash';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

import {
  ThemeProvider,
  SearchBar,
  Text,
  ButtonGroup,
} from 'react-native-elements';
import {
  fetchCommonVendors,
  fetchVendorsByType,
  fetchVendorsByName,
  selectVendor,
} from '../redux/actions/vendors';

import { sendHelp } from '../redux/actions/user';

import {
  SFProFontName,
  helpIconUp,
  helpIconDown,
  screenWidth,
  defaultImageDev,
  defaultImageProd,
} from '../app';
import HomeBackButton from '../components/HomeBackButton';
import HeaderLogo from '../components/HeaderLogo';
import { Loading, ImageWithLoader } from '../components/Loader';

import MsgModal from '../components/MsgModal';

class VendorsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      selectedIndex: 0,
      // buttons: [
      //   {title: 'Popular', code: null},
      //   {title: 'Mobile', code: 'cell phone'},
      //   {title: 'Utility', code: 'utilities'},
      //   {title: 'Loans', code: 'student loans'},
      // ],

      // buttons: [
      //   {title: 'Popular', code: null, selected: true},
      //   {title: 'Utility', code: 'utilities', selected: false},
      //   {title: 'Insurance', code: 'insurance', selected: false},
      //   {title: 'Bank', code: 'bank', selected: false},
      //   {title: 'Stocks', code: 'stocks', selected: false},
      //   {title: 'Loan', code: 'loan', selected: false},
      //   {title: 'Credit', code: 'creditCard', selected: false},
      //   {title: 'Investment', code: 'investment', selected: false},
      //   {title: 'Mortgage', code: 'mortgage', selected: false},
      //   {title: 'Brokerage', code: 'brokerage', selected: false},
      // ],

      buttons: [
        { title: 'Popular', code: null, selected: true },
        { title: 'Phone', code: 'cell phone', selected: false },
        { title: 'Internet', code: 'internet', selected: false },
        { title: 'Car', code: 'car', selected: false },
        { title: 'Utility', code: 'utilities', selected: false },
        { title: 'Insurance', code: 'insurance', selected: false },
        { title: 'Services', code: 'services', selected: false },
        { title: 'School', code: 'school', selected: false },
        { title: 'Credit', code: 'credit card', selected: false },
        { title: 'Rent/Mortgage', code: 'rentmortgage', selected: false },
        { title: 'Medical', code: 'medical', selected: false },
        { title: 'Invest', code: 'invest', selected: false },
        { title: 'Other', code: 'other', selected: false },
      ],

      modalVisible: false,
      helpCheck: true,

      helpText: '',

      helpSubmit: false,
      helpSubmitText: '',
    };

    this.updateIndex = this.updateIndex.bind(this);
    this.renderVendorRow = this.renderVendorRow.bind(this);
    this.fetchVendorsByName = debounce(this.props.fetchVendorsByName, 300);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    const helpIcon = params.modalVisible ? helpIconUp : helpIconDown;
    return {
      headerTitle: <HeaderLogo onPress={() => navigation.navigate('Home')} />,
      // title: 'Vendors',
      // headerTitleStyle: {
      //   fontFamily: SFProFontName
      // },
      // headerLeft: (
      //   <HomeBackButton onPress={() => navigation.dispatch({ type: 'Navigation/BACK' })} />
      // ),
      headerLeft: (
        <HomeBackButton onPress={() => navigation.navigate('Home')} />
      ),
      headerRight: (
        <View style={styles.helpIcon}>
          <ImageWithLoader
            onPress={() => params.toggleModal(true)}
            source={helpIcon}
            width={43}
            height={43}
            disableLoading
          />
        </View>
      ),
    };
  };
  componentDidMount() {
    const category = this.props.category;
    if (category === 0) {
      this.props.fetchCommonVendors();
    } else {
      let new_buttons = [];
      this.state.buttons.forEach((button, i) => {
        if (category === i) {
          new_buttons.push({ ...button, selected: true });
        } else {
          new_buttons.push({ ...button, selected: false });
        }
      });
      this.setState({ buttons: new_buttons });
      this.props.fetchVendorsByType(new_buttons[category].code);
    }

    this.props.navigation.setParams({
      modalVisible: this.state.modalVisible,
      toggleModal: this.toggleModal,
    });

    // setTimeout(() => {
    //   if (this.cateListRef) {
    //     this.cateListRef.scrollToIndex({animated: true, index: category});
    //   }
    // }, 500);
  }

<<<<<<< HEAD
  toggleModal = toggle => {
    this.setState({ modalVisible: toggle });
=======
  toggleModal = (toggle) => {
    this.setState({modalVisible: toggle});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    this.props.navigation.setParams({
      modalVisible: toggle,
    });
  };

  // static navigationOptions = {
  //   title: null
  // };

  updateSearch = (search) => {
    this.setState({search});
    if (search.length >= 1) {
      this.fetchVendorsByName(search);
    }
  };

  onClear = () => {
    this.updateIndex(0);
  };

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    if (this.state.buttons[selectedIndex].code) {
      this.props.fetchVendorsByType(this.state.buttons[selectedIndex].code);
    } else {
      this.props.fetchCommonVendors();
    }
  }

  renderVendorRow({ item }) {
    // const imageVendors = ['Southern California Edison', 'Bank of America', 'Ally Bank']

    return (
      <TouchableHighlight
        onPress={() => {
          this.props.selectVendor(item);
          this.props.navigation.navigate('Vendor');
        }}
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#d7d7d7',
          borderRadius: 5,
          backgroundColor: '#ffffff',
        }}
      >
        {item.image !== defaultImageProd ? (
          // <ImageWithLoader
          //   height={75}
          //   width={screenWidth - 40}
          //   source={{uri: `${item.imagex}?random=${new Date().getTime()}`}}
          // />
          <Image
            source={{
              uri: `${item.imagex}?random=${moment().format('YYYYMMDDHHmm')}`,
            }}
            style={{
              flex: 1,
              height: 75,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            imageStyle={{
              resizeMode: 'cover',
            }}
            PlaceholderContent={<Loading size={75} />}
            placeholderStyle={{
              backgroundColor: 'white',
            }}
          />
        ) : (
          <ImageBackground
            style={{
              height: 70,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
<<<<<<< HEAD
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: SFProFontName }}>
=======
            }}>
            <Text style={{fontSize: 20, fontFamily: SFProFontName}}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              {item.name}
            </Text>
          </ImageBackground>
        )}
      </TouchableHighlight>
    );
  }

  refreshVendorsList = () => {
    // console.log('--- refreshing: ', this.state.search);
    // if (this.state.search.length >= 1) {
    //   this.fetchVendorsByName(this.state.search);
    // } else if (this.state.buttons[this.state.selectedIndex].code) {
    //   this.props.fetchVendorsByType(
    //     this.state.buttons[this.state.selectedIndex].code,
    //   );
    // } else {
    //   this.props.fetchCommonVendors();
    // }
  };

  renderVendorsList = () => {
    const { loading, vendors } = this.props;

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

    if (vendors.length > 0) {
      return (
        <FlatList
          style={{
            width: '100%',
            paddingRight: 10,
            paddingLeft: 10,
          }}
          data={vendors}
          renderItem={this.renderVendorRow}
          keyExtractor={(item, index) => index.toString() + ' ' + item.image}
          onRefresh={this.refreshVendorsList}
          refreshing={false}
          extraData={this.state}
        />
      );
    } else {
      return (
<<<<<<< HEAD
        <View style={{ alignItems: 'center', marginTop: 25 }}>
=======
        <View style={{alignItems: 'center', marginTop: 25}}>
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
            No Results
          </Text>
        </View>
      );
    }

    return null;
  };

  renderModalBody = () => {
    const subject = "Can't Find Vendor / Biller Verified";

    return (
      <View style={styles.modalBody}>
        <CheckBox title={subject} checked={this.state.helpCheck} />
        <TextInput
          maxLength={50}
          style={styles.helpTextInput}
          placeholder="Type Missing Vendor / Biller Here"
          value={this.state.helpText}
<<<<<<< HEAD
          onChangeText={value => this.setState({ helpText: value })}
=======
          onChangeText={(value) => this.setState({helpText: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        />
        <View style={styles.sendBtnView}>
          <Button
            title={'send'}
            titleStyle={styles.sendBtnTitleStyle}
            buttonStyle={styles.sendBtnStyle}
            onPress={async () => {
              await this.props.sendHelp(subject, this.state.helpText);

              this.toggleModal(false);

              setTimeout(() => {
                this.setState({
                  helpSubmit: true,
                  helpSubmitText: 'Your issue has been submitted',
                });
              }, 200);
            }}
          />
        </View>
      </View>
    );
  };

  renderModal = () => {
    return (
      <Modal
        isVisible={this.state.modalVisible}
        onBackdropPress={() => this.toggleModal(false)}
      >
        <View style={styles.modalView}>{this.renderModalBody()}</View>
      </Modal>
    );
  };

  render() {
    const {search, selectedIndex, buttons, vendors} = this.state;

    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ThemeProvider>
          <View
            style={{
              backgroundColor: '#f9f9f9',
              borderBottomWidth: 2,
              borderColor: '#e7e7e7',
<<<<<<< HEAD
            }}
          >
=======
            }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text
              h4
              style={{
                paddingLeft: 12,
                marginTop: 10,
                fontFamily: SFProFontName,
                fontSize: 35,
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Billers
            </Text>
            <SearchBar
              lightTheme
              round
              placeholder="Search"
              onChangeText={this.updateSearch}
              onClear={this.onClear}
              value={search}
              containerStyle={{
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                borderBottomWidth: 0,
                paddingRight: 10,
                paddingLeft: 10,
                marginTop: -3,
              }}
              autoCompleteType={'off'}
            />
            {search === '' && (
              <FlatList
                ref={(ref) => (this.cateListRef = ref)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.buttons}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  return (
                    <Button
                      title={item.title}
                      buttonStyle={{
                        backgroundColor: 'transparent',
                      }}
                      titleStyle={{
                        color: item.selected ? '#d05755' : '#4c5564',
                        fontFamily: SFProFontName,
                        fontSize: 23,
                        fontWeight: '600',
                      }}
                      onPress={() => {
                        let new_buttons = [];
                        this.state.buttons.forEach((button, i) => {
                          if (index === i) {
                            new_buttons.push({ ...button, selected: true });
                          } else {
                            new_buttons.push({ ...button, selected: false });
                          }
                        });
                        if (new_buttons[index].code) {
                          this.props.fetchVendorsByType(
                            new_buttons[index].code
                          );
                        } else {
                          this.props.fetchCommonVendors();
                        }
                        this.setState({ buttons: new_buttons });
                      }}
                    />
                  );
                }}
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: -10,
                }}
              />
              // <ButtonGroup
              //   onPress={this.updateIndex}
              //   selectedIndex={selectedIndex}
              //   buttons={buttons.map(b => b.title)}
              //   containerStyle={{
              //     height: 30,
              //     backgroundColor: 'transparent',
              //     borderBottomWidth: 0,
              //     borderTopWidth: 0,
              //     borderLeftWidth: 0,
              //     borderRightWidth: 0,
              //     marginTop: -3,
              //   }}
              //   innerBorderStyle={{ width: 0 }}
              //   selectedTextStyle={{
              //     color: '#d05755'
              //   }}
              //   textStyle={{
              //     fontFamily: SFProFontName,
              //     fontSize: 23
              //   }}
              //   selectedButtonStyle={{
              //     backgroundColor: 'transparent'
              //   }}
              // />
            )}
          </View>
        </ThemeProvider>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#ffffff',
            justifyContent:
              vendors && vendors.length > 0 ? 'center' : 'flex-start',
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          {this.renderVendorsList()}
        </View>

        {this.state.modalVisible && this.renderModal()}

        <MsgModal
          isVisible={this.state.helpSubmit}
          onBack={() => this.setState({ helpSubmit: false })}
          title="Status"
          body={this.state.helpSubmitText}
          onOK={() => this.setState({ helpSubmit: false })}
        />
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
  helpIcon: {
    marginTop: -10,
    marginRight: 10,
  },
  modalView: {
    height: 200,
    backgroundColor: 'white',
    marginTop: -30,
  },
  modalBody: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  helpTextInput: {
    opacity: 0.5,
    borderColor: 'gray',
    borderWidth: 2,
    height: 75,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: SFProFontName,
    fontSize: 18,
  },
  sendBtnView: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  sendBtnStyle: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 60,
  },
  sendBtnTitleStyle: {
    fontFamily: SFProFontName,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    textAlign: 'right',
  },
});

const mapStateToProps = (state) => ({
  vendors: state.vendors.items,
  loading: state.vendors.loading,
  category: state.vendors.category,
});

export default connect(mapStateToProps, {
  fetchCommonVendors,
  fetchVendorsByType,
  fetchVendorsByName,
  selectVendor,
  sendHelp,
})(VendorsScreen);
