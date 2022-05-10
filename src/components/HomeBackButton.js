import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { SFProFontName } from '../app';

class HomeBackButton extends Component {
  render() {
    const { props } = this;
    return (
      <TouchableOpacity {...props}>
        <View style={styles.flexRow}>
          <Icon
            name="chevron-left"
            type="font-awesome"
            color="#087af3"
            containerStyle={styles.icon}
          />
          <Text style={styles.text}>Back</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    color: '#087af3',
    fontFamily: SFProFontName,
    fontSize: 18,
    marginLeft: 5,
  },
});

export default HomeBackButton;
