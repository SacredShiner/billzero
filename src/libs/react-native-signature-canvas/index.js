import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import htmlContent from './h5/html';
import injectedSignaturePad from './h5/js/signature_pad';
import injectedApplication from './h5/js/app';

const styles = StyleSheet.create({
  signature: {
    width: 200,
    height: 110,
    borderWidth: 2,
    borderColor: 'grey',
  },
  signaturBg: {
    alignItems: 'center',
    marginTop: 20,
  },
  webView: {},
  webBg: {
    width: '100%',
    backgroundColor: '#FFF',
    flex: 1,
  },
});

class SignatureView extends Component {
  static defaultProps = {
    webStyle: '',
    onOK: () => {},
    onEmpty: () => {},
    onEnd: () => {},
    descriptionText: 'Sign above',
    clearText: 'Clear',
    confirmText: 'Confirm',
  };

  constructor(props) {
    super(props);
<<<<<<< HEAD
    const {
      descriptionText,
      clearText,
      confirmText,
      emptyText,
      webStyle,
    } = props;
=======
    const {descriptionText, clearText, confirmText, emptyText, webStyle} =
      props;
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    this.state = {
      base64DataUrl: props.dataURL || null,
    };

    const injectedJavaScript = injectedSignaturePad + injectedApplication;
    let html = htmlContent(injectedJavaScript);
    html = html.replace('<%style%>', webStyle);
    html = html.replace('<%description%>', descriptionText);
    html = html.replace('<%confirm%>', confirmText);
    html = html.replace('<%clear%>', clearText);

<<<<<<< HEAD
    this.source = { html };
=======
    this.source = {html};
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
  }

  getSignature = (e) => {
    const {onOK, onEmpty, onEnd} = this.props;

    if (e.nativeEvent.data === 'EMPTY') {
      onEmpty();
    } else if (e.nativeEvent.data === 'onEnd') {
      onEnd();
    } else {
      onOK(e.nativeEvent.data);
    }
  };

<<<<<<< HEAD
  _renderError = args => {
=======
  _renderError = (args) => {
>>>>>>> bbb9992acecacd16c89878ebff0d2326dcd3eebf
    console.log('error', args);
  };

  render() {
    return (
      <View style={styles.webBg}>
        <WebView
          useWebKit={true}
          style={styles.webView}
          source={this.source}
          onMessage={this.getSignature}
          javaScriptEnabled={true}
          onError={this._renderError}
        />
      </View>
    );
  }
}

export default SignatureView;
