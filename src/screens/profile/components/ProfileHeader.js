import React, { Component } from 'react';
import UserAvatarNameLocation from '../../../components/UserAvatarNameLocation';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SFProFontName } from '../../../app';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 0,
  },
  titleView: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cfcfcf',
    width: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: SFProFontName,
    fontWeight: 'bold',
  },
});

class ProfileHeader extends Component {
  render() {
    const { user, title, onAvatarClicked } = this.props;
    return (
      <View style={styles.main}>
        <UserAvatarNameLocation
          user={user}
          onAvatarClicked={onAvatarClicked}
          refresh
        />
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {title ? title.toUpperCase() : 'TITLE'}
          </Text>
        </View>
      </View>
    );
  }
}

export default ProfileHeader;
