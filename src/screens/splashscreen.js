import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

class SplashScreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 5000)
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../icons/splash.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
    );
  }
}

export default connect(null, {})(SplashScreen);
