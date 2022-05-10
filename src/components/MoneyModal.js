import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
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

export class NoBillsModal extends Component {
  render() {
<<<<<<< HEAD
    const { isVisible, onBack, onAdd } = this.props;
=======
    const {isVisible, onBack, onAdd} = this.props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBack}
        animationIn="fadeInUp"
        animationInTiming={500}
        animationOut="fadeOutDown"
<<<<<<< HEAD
        animationOutTiming={500}
      >
=======
        animationOutTiming={500}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: borderRadius,
<<<<<<< HEAD
          }}
        >
=======
          }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>
              Must Add at least 1 Bill
            </Text>
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
                color: 'white',
                fontFamily: SFProFontName,
                fontSize: 32,
                textAlign: 'center',
                fontWeight: 'bold',
<<<<<<< HEAD
              }}
            >
=======
              }}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
              Add a Bill to Enable
            </Text>
          </View>
          <Button
            title={'Add Bill Now'}
            buttonStyle={styles.modalFooter}
            titleStyle={{
              color: 'white',
              fontSize: 21,
              fontFamily: SFProFontName,
              fontWeight: 'bold',
            }}
            onPress={onAdd}
          />
        </View>
      </Modal>
    );
  }
}
