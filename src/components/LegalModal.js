<<<<<<< HEAD
import React, { Component } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
=======
import React, {Component} from 'react';
import {View, TextInput, ScrollView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import Modal from 'react-native-modal';

import { platform } from '../app';
import { Loading } from './Loader';

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  htmlContainer: {
    flex: 1,
    margin: 10,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  modalTextInput: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  modalIOS: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDROID: {
    flex: 1,
    alignItems: 'center',
    marginTop: '50%',
  },
});

class LegalModal extends Component {
  renderModalBodyIOS = () => {
    return (
      <View style={styles.modalBody}>
        {this.props.loading ? (
          <View style={styles.modalIOS}>
            <Loading size={50} />
          </View>
        ) : (
          <TextInput editable={false} multiline style={styles.modalTextInput}>
            {this.props.body}
          </TextInput>
        )}
      </View>
    );
  };

  renderModalBodyDROID = () => {
    return (
      <ScrollView style={styles.modalBody}>
        {this.props.loading ? (
          <View style={styles.modalDROID}>
            <Loading size={50} />
          </View>
        ) : (
          <Text editable={false} multiline style={styles.modalTextInput}>
            {this.props.body}
          </Text>
        )}
      </ScrollView>
    );
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    }

    return (
      <Modal isVisible={true} onBackdropPress={this.props.hideModal}>
        {platform === 'ios'
          ? this.renderModalBodyIOS()
          : this.renderModalBodyDROID()}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  body: state.legal.data,
  loading: state.legal.loading,
  error: state.legal.error,
});

export default connect(mapStateToProps, null)(LegalModal);
