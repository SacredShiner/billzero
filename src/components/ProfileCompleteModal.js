import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';

import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

import { SFProFontName, stateList } from '../app';

import { updateUser } from '../redux/actions/user';

class ProfileCompleteModal extends Component {
  state = {
    firstName: '',
    lastName: '',
    dob: '',
    zipCode: '',
    city: '',
    state: '',
  };

  componentDidMount() {
    const {
      user: {
        address: { state, city, postal_code },
        firstName,
        lastName,
        dob: { year, month, day },
      },
    } = this.props;

    let dob = year && month && day ? `${year}-${month}-${day}` : '';

    this.setState({
      state: state ? state : '',
      city: city ? city : '',
      zipCode: postal_code,
      firstName: firstName ? firstName : '',
      lastName: lastName ? lastName : '',
      dob: dob,
    });
  }

  saveProfile = () => {
    const { zipCode, state, city, firstName, lastName, dob } = this.state;
    const {
      user: {
        address: { country },
      },
    } = this.props;

    const dobArr = dob.split('-');

    this.props.updateUser({
      address: {
        country,
        state,
        postal_code: zipCode,
        city,
      },
      firstName,
      lastName,
      dob: {
        year: dobArr[0],
        month: dobArr[1],
        day: dobArr[2],
      },
    });

    this.props.submit();
  };

  renderInputField = (title, name, keyboardType = 'default') => {
    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.inputFieldTextStyle}>{title}</Text>
          <Input
            inputStyle={styles.inputFieldInputStyle}
            inputContainerStyle={styles.inputFieldContainerStyle}
            keyboardType={keyboardType}
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            value={this.state[name]}
<<<<<<< HEAD
            onChangeText={value => this.setState({ [name]: value })}
=======
            onChangeText={(value) => this.setState({[name]: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          />
        </View>
      </Fragment>
    );
  };

  renderDOB = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.dobTitle}>Date Of Birth</Text>
        <View style={styles.dobView}>
          <DatePicker
            style={styles.dobDatePicker}
            date={this.state.dob}
            mode="date"
            placeholder="Date Of Birth"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                borderWidth: 0,
              },
            }}
            showIcon={false}
<<<<<<< HEAD
            onDateChange={date => {
              this.setState({ dob: date });
=======
            onDateChange={(date) => {
              this.setState({dob: date});
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            }}
          />
        </View>
      </View>
    );
  };

  renderState = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.stateTitle}>State</Text>
        <RNPickerSelect
<<<<<<< HEAD
          onValueChange={value => this.setState({ state: value })}
=======
          onValueChange={(value) => this.setState({state: value})}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          value={this.state.state}
          items={stateList}
          style={{
            inputIOS: styles.stateInputIOS,
            inputAndroid: styles.stateInputAndroid,
          }}
          placeholder={{ label: '', value: '' }}
        />
      </View>
    );
  };

  render() {
    const { isVisible, onBackdropPress, title } = this.props;
    const { firstName, lastName, dob, zipCode, city, state } = this.state;

    const disabled =
      firstName === '' ||
      lastName === '' ||
      dob === '' ||
      zipCode == null ||
      zipCode.length !== 5 ||
      city === '' ||
      state === '';
    return (
      <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Complete to Proceed</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.mainRow}>
              {this.renderInputField('First Name (Legal)', 'firstName')}
              {this.renderInputField('Last Name (Legal)', 'lastName')}
            </View>
            <View style={styles.mainRow}>
              {this.renderDOB()}
              {this.renderInputField('ZIP Code', 'zipCode', 'numeric')}
            </View>
            <View style={styles.mainRow}>
              {this.renderInputField('City', 'city')}
              {this.renderState()}
            </View>
          </View>
          <Button
            title={title}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            disabled={disabled}
            onPress={this.saveProfile}
          />
        </View>
      </Modal>
    );
  }
}

const borderRadius = 15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    height: 350,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: borderRadius,
  },
  header: {
    height: 50,
    backgroundColor: '#03a5f9',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: SFProFontName,
    fontWeight: 'bold',
  },
  main: {
    height: 230,
    marginTop: 10,
    marginBottom: 10,
  },
  mainRow: {
    flexDirection: 'row',
  },
  inputFieldTextStyle: {
    color: '#a6a6a6',
    marginLeft: 12,
    fontFamily: SFProFontName,
  },
  inputFieldInputStyle: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    backgroundColor: '#d6d6d6',
    textAlign: 'center',
    borderRadius: 4,
    fontFamily: SFProFontName,
  },
  inputFieldContainerStyle: {
    marginBottom: 0,
    borderBottomWidth: 0,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff0030',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 21,
    fontFamily: SFProFontName,
    fontWeight: 'bold',
  },
  dobTitle: {
    color: '#a6a6a6',
    marginLeft: 12,
    fontFamily: SFProFontName,
  },
  dobView: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
  },
  dobDatePicker: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    backgroundColor: '#d6d6d6',
    borderRadius: 4,
  },
  stateTitle: {
    color: '#a6a6a6',
    marginLeft: 12,
    fontFamily: SFProFontName,
  },
  stateInputIOS: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    backgroundColor: '#d6d6d6',
    borderRadius: 4,
    fontFamily: SFProFontName,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  stateInputAndroid: {
    backgroundColor: '#d6d6d6',
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 4,
    fontSize: 18,
    fontFamily: SFProFontName,
    color: 'black',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps, {
  updateUser,
})(ProfileCompleteModal);

export function isProfileComplete(user) {
  const {
    address: { state, city, postal_code },
    firstName,
    lastName,
    dob: { year, month, day },
  } = user;
  let dob = year && month && day ? `${year}-${month}-${day}` : '';
  return (
    firstName !== null &&
    firstName !== '' &&
    lastName !== null &&
    lastName !== '' &&
    city !== null &&
    city !== '' &&
    state !== null &&
    state !== '' &&
    dob !== null &&
    dob !== '' &&
    postal_code !== null &&
    postal_code.length === 5
  );
}
