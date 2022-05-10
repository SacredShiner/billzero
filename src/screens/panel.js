<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  LayoutAnimation,
} from 'react-native';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value(),
    };
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  }

  render() {
    let btn = 'down';

    if (this.state.expanded) {
      btn = 'up';
    }

    return (
<<<<<<< HEAD
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
=======
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}>
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
<<<<<<< HEAD
            underlayColor="#f1f1f1"
          >
=======
            underlayColor="#f1f1f1">
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
            <Text>{btn}</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
  },
  body: {
    padding: 10,
    paddingTop: 0,
  },
});

export default Panel;
