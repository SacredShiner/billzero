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
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  modalHeaderTitle: {
    color: 'white',
    fontSize: 24,
    fontFamily: SFProFontName,
    fontWeight: 'bold',
  },
});

export default class MsgModal extends Component {
  render() {
    const { title, body, second, onBack, isVisible, onOK } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBack}
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
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {body}
            </Text>
            {second && (
              <Text
                style={{
                  // color: '#0cf600',
                  color: 'white',
                  fontFamily: SFProFontName,
                  fontSize: 25,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  marginTop: 15,
                }}
              >
                {second}
              </Text>
            )}
          </View>
          <Button
            title={'OK'}
            buttonStyle={styles.modalFooter}
            titleStyle={{
              color: 'white',
              fontSize: 21,
              fontFamily: SFProFontName,
              fontWeight: 'bold',
            }}
            onPress={onOK}
          />
        </View>
      </Modal>
    );
  }
}

export class YNMsgModal extends Component {
  render() {
    const { title, body, body2, onBack, isVisible, onNO, onYES } = this.props;
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBack}
        animationIn="fadeInUp"
        animationInTiming={500}
        animationOut="fadeOutDown"
        animationOutTiming={500}
      >
        <View
          style={{
            borderRadius: borderRadius,
          }}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>{title}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#000000',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 40,
              paddingBottom: 40,
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
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {body}
            </Text>
            {body2 && (
              <Text
                style={{
                  // color: '#0cf600',
                  color: 'white',
                  fontFamily: SFProFontName,
                  fontSize: 30,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {body2}
              </Text>
            )}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Button
                title={'No'}
                buttonStyle={{
                  height: 50,
                  backgroundColor: '#ff0030',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomLeftRadius: borderRadius,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderRightWidth: 2,
                  borderColor: 'black',
                }}
                titleStyle={{
                  color: 'white',
                  fontSize: 21,
                  fontFamily: SFProFontName,
                  fontWeight: 'bold',
                }}
                onPress={onNO}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title={'Yes'}
                buttonStyle={{
                  height: 50,
                  backgroundColor: '#ff0030',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: borderRadius,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderLeftWidth: 2,
                  borderColor: 'black',
                }}
                titleStyle={{
                  color: 'white',
                  fontSize: 21,
                  fontFamily: SFProFontName,
                  fontWeight: 'bold',
                }}
                onPress={onYES}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export class DebitCardModal extends Component {
  render() {
    const { onBack, onOK } = this.props;
    return (
      <Modal
        isVisible={true}
        onBackdropPress={onBack}
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
            <Text style={styles.modalHeaderTitle}>Invite & Earn</Text>
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
              $2 for Each Full User
            </Text>
            <Text
              style={{
                color: 'white',
                fontFamily: SFProFontName,
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 20,
              }}
            >
              They Post or Pay & You Get Paid
            </Text>
          </View>
          <Button
            title={'OK'}
            buttonStyle={styles.modalFooter}
            titleStyle={{
              color: 'white',
              fontSize: 21,
              fontFamily: SFProFontName,
              fontWeight: 'bold',
            }}
            onPress={onOK}
          />
        </View>
      </Modal>
    );
  }
}
