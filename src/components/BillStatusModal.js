import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

import { SFProFontName } from '../app';

const borderRadius = 15;

const styles = StyleSheet.create({
  modalHeader: {
    height: 50,
    backgroundColor: '#03a5f9',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  modalFooter: {
    height: 50,
    backgroundColor: '#ff0030',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  modalHeaderTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: SFProFontName,
    fontWeight: 'bold',
  },
});

export default class BillStatusModal extends Component {
  render() {
    const { title, firstLine, secondLine } = this.props;
    return (
      <Modal
        isVisible={true}
        animationIn="fadeInUp"
        animationInTiming={500}
        animationOut="fadeOutDown"
        animationOutTiming={500}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: borderRadius,
          }}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
          </View>
          <View
            style={{
              height: 150,
              backgroundColor: '#000000',
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
                // color: '#0cf600',
                color: 'white',
                fontFamily: SFProFontName,
                fontSize: 35,
                fontWeight: 'bold',
              }}
            >
              {firstLine}
            </Text>
            <Text
              style={{
                // color: '#0cf600',
                color: 'white',
                fontFamily: SFProFontName,
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: 15,
              }}
            >
              {secondLine}
            </Text>
          </View>
          <View style={styles.modalFooter} />
        </View>
      </Modal>
    );
  }
}
