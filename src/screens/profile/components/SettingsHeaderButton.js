import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class SettingsHeaderButton extends Component {
  render() {
<<<<<<< HEAD
    const { props } = this;
=======
    const {props} = this;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf

    return (
      <FontAwesome5
        {...props}
        name={'user-cog'}
        size={18}
<<<<<<< HEAD
        style={{ marginRight: 10 }}
=======
        style={{marginRight: 10}}
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
      />
    );
  }
}

export default SettingsHeaderButton;
