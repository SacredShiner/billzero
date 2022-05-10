import React from 'react';
import { View, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function getDims(user) {
  const isNewUser =
    user == null ||
    user.userName === 'guest' ||
    user.address.postal_code == null ||
    user.address.postal_code === '';

  let bgSource;
  let spacing1, spacing2, spacing3, spacing4, spacing5;
  let logoSource, logoWidth, logoHeight;
  let earnInviteSize, earnUserSize, earnMoneySize, earnBalanceSize;
  let debitSource, debitWidth, debitHeight;
  let debitNumberTop, debitNumberLeft, debitNumberSize;
  let debitExpTop, debitExpLeft, debitExpSize;
  let debitNameTop, debitNameLeft, debitNameSize;
  let connectBillSource, connectBillWidth, connectBillHeight;
  let emptyMargin, emptyFontSize;
  let emptyBillSource, emptyBillWidth, emptyBillHeight;
  let emptyFillWidth, emptyFillHeight;
  let payBillSource, payBillWidth, payBillHeight;
  let profileSize, profileBottom;
  let karmaSource, karmaWidth, karmaHeight, karmaRight, karmaBottom;
  let inviteSource, inviteBottom;
  let karmaImageHeight = 150;
  if (Platform.OS === 'ios') {
    if (screenHeight < 700) {
      bgSource = require('../images/main/1x.750.IPH/1x-main-background-750_1334_IPH.jpg');
      spacing1 = 15;
      spacing2 = 37;
      spacing3 = isNewUser ? 77 : 55;
      spacing4 = 15;
      spacing5 = 60;
      logoSource = require('../images/main/1x.750.IPH/1x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 47;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/1x.750.IPH/1x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 22;
      debitNumberSize = 4;
      debitExpTop = 49;
      debitExpLeft = 59;
      debitExpSize = 5;
      debitNameTop = 54;
      debitNameLeft = 25;
      debitNameSize = 5;

      connectBillSource = isNewUser
        ? require('../images/main/1x.750.IPH/1x-main-btn-connect-a-bill_ANON.png')
        : require('../images/main/1x.750.IPH/1x-main-btn-connect-a-bill_USER.png');
      connectBillWidth = 375;
      connectBillHeight = 50;
      emptyMargin = 20;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/1x.750.IPH/1x-predef-mybill-empty_ANON.png')
        : require('../images/main/1x.750.IPH/1x-predef-mybill-empty_USER.png');
      emptyBillWidth = 56;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = isNewUser ? 71 : 44;
      emptyFillHeight = emptyFillWidth;
      payBillSource = require('../images/main/1x.750.IPH/1x-main-btn-pay-a-bill_USER_ANON.png');
      payBillWidth = 375;
      payBillHeight = 51.5;
      profileSize = 75;
      profileBottom = 10;
      karmaSource = require('../images/main/1x.750.IPH/1x-karmala-btn.png');
      karmaWidth = 70;
      karmaHeight = 49;
      karmaRight = 41;
      karmaBottom = 41;
      inviteBottom = 70;
      karmaImageHeight = 150;
    } else if (screenHeight < 800) {
      bgSource = require('../images/main/2x,1080.IPH-DROID/2x-main-background-1080_1920_IPH_DROID.jpg');
      spacing1 = 28;
      spacing2 = 37;
      spacing3 = isNewUser ? 80 : 73;
      spacing4 = isNewUser ? 38 : 20;
      spacing5 = 50;
      logoSource = require('../images/main/2x,1080.IPH-DROID/2x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 53;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/2x,1080.IPH-DROID/2x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 22;
      debitNumberSize = 4;
      debitExpTop = 49;
      debitExpLeft = 59;
      debitExpSize = 5;
      debitNameTop = 54;
      debitNameLeft = 25;
      debitNameSize = 5;

      connectBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-main-btn-connect-a-bill_ANON.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-main-btn-connect-a-bill_USER.png');
      connectBillWidth = 414;
      connectBillHeight = 57;
      emptyMargin = 15;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-predef-mybill-empty_ANON_IPH_DROID.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-predef-mybill-empty_USER_IPH_DROID.png');
      emptyBillWidth = 71;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = isNewUser ? 81 : 47;
      emptyFillHeight = emptyFillWidth;
      payBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-main-btn-pay-a-bill_ANON_IPH_DROID.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-main-btn-pay-a-bill_USER_IPH_DROID.png');
      payBillWidth = 414;
      payBillHeight = 57;
      profileSize = 84;
      profileBottom = 10;
      karmaSource = require('../images/main/2x,1080.IPH-DROID/2x-karmala-btn_IPH_DROID.png');
      karmaWidth = 80;
      karmaHeight = 62;
      karmaRight = 45;
      karmaBottom = 45;
      inviteBottom = 80;
      karmaImageHeight = 200;
    } else {
      bgSource = require('../images/main/3x.1242.IPH/bg.jpg');
      spacing1 = 28;

      if (screenWidth > 375) {
        spacing2 = 51;
        spacing3 = isNewUser ? 120 : 104;
        spacing4 = isNewUser ? 38 : 24;
        spacing5 = isNewUser ? 130 : 91;
        connectBillWidth = 414;
        connectBillHeight = 58;
        payBillWidth = 414;
        payBillHeight = 63;
      } else {
        spacing2 = 30;
        spacing3 = isNewUser ? 90 : 70;
        spacing4 = isNewUser ? 38 : 24;
        spacing5 = isNewUser ? 130 : 71;
        connectBillWidth = 375;
        connectBillHeight = 52;
        payBillWidth = 375;
        payBillHeight = 57;
      }

      spacing2 = 80;
      spacing4 = 20;
      spacing5 = 45;

      logoSource = require('../images/main/3x.1242.IPH/3x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 53;

      earnInviteSize = 25;
      earnUserSize = 18;
      earnMoneySize = 53;
      earnBalanceSize = 25;
      debitSource = require('../images/main/3x.1242.IPH/3x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 47;
      debitNumberLeft = 19;
      debitNumberSize = 4;
      debitExpTop = 51;
      debitExpLeft = 57;
      debitExpSize = 5;
      debitNameTop = 57;
      debitNameLeft = 19;
      debitNameSize = 5;

      connectBillSource = require('../images/main/3x.1242.IPH/3x-main-btn-connect-a-bill_IPH_ANON_USER.png');
      // connectBillWidth = 414;
      // connectBillHeight = 57;
      emptyMargin = 15;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/3x.1242.IPH/3x-predef-mybill-empty_ANON_IPH.png')
        : require('../images/main/3x.1242.IPH/3x-mybill-empty-USER_IPH.png');
      emptyBillWidth = 75;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = isNewUser ? 74 : 54;
      emptyFillHeight = emptyFillWidth;
      payBillSource = require('../images/main/3x.1242.IPH/3x-main-btn-pay-a-bill_IPH_USER_ANON.png');
      // payBillWidth = 414;
      // payBillHeight = 57;
      profileSize = 96;
      profileBottom = 30;
      karmaSource = require('../images/main/3x.1242.IPH/3x-karmala-btn_IPH.png');
      karmaWidth = 80;
      karmaHeight = 62;
      karmaRight = 22;
      karmaBottom = 60;
      inviteBottom = 100;
      karmaImageHeight = 233;
    }
  } else {
    if (screenHeight > 740) {
      bgSource = require('../images/main/3x.1440.DROID/3x-main-background-1440_2560_DROID.jpg');
      spacing1 = 0;
      spacing2 = 32;
      spacing3 = isNewUser ? 60 : 45;
      spacing4 = isNewUser ? 20 : 15;
      spacing5 = isNewUser ? 100 : 65;
      logoSource = require('../images/main/3x.1440.DROID/3x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 113;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/3x.1440.DROID/3x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 18;
      debitNumberSize = 4;
      debitExpTop = 51;
      debitExpLeft = 59;
      debitExpSize = 5;
      debitNameTop = 57;
      debitNameLeft = 20;
      debitNameSize = 5;

      connectBillSource = require('../images/main/3x.1440.DROID/3x-main-btn-connect-a-bill_DROID_ANON_USER.png');
      connectBillWidth = 414;
      connectBillHeight = 58;
      emptyMargin = isNewUser ? 30 : 40;
      emptyFontSize = 12;
      emptyBillSource = require('../images/main/3x.1440.DROID/3x-predef-mybill-empty_ANON_USER_DROID.png');
      emptyBillWidth = 60;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = 54;
      emptyFillHeight = emptyFillWidth;
      payBillSource = isNewUser
        ? require('../images/main/3x.1440.DROID/3x-main-btn-pay-a-bill_DROID_ANON.png')
        : require('../images/main/3x.1440.DROID/3x-main-btn-pay-a-bill_DROID_USER.png');
      payBillWidth = 411;
      payBillHeight = 67;
      profileSize = 80;
      profileBottom = 10;
      karmaSource = require('../images/main/3x.1440.DROID/3x-karmala-btn_DROID.png');
      karmaWidth = 87;
      karmaHeight = 66;
      karmaRight = 35;
      karmaBottom = 35;
      inviteBottom = 70;
      karmaImageHeight = 233;
    } else if (screenHeight > 650) {
      bgSource = require('../images/main/2x,1080.IPH-DROID/2x-main-background-1080_1920_IPH_DROID.jpg');
      spacing1 = 15;
      spacing2 = 32;
      spacing3 = isNewUser ? 60 : 28;
      spacing4 = isNewUser ? 15 : 10;
      spacing5 = isNewUser ? 81 : 38;
      logoSource = require('../images/main/2x,1080.IPH-DROID/2x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 53;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/2x,1080.IPH-DROID/2x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 22;
      debitNumberSize = 4;
      debitExpTop = 49;
      debitExpLeft = 60;
      debitExpSize = 5;
      debitNameTop = 55;
      debitNameLeft = 23;
      debitNameSize = 5;

      connectBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-main-btn-connect-a-bill_ANON.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-main-btn-connect-a-bill_USER.png');
      connectBillWidth = 414;
      connectBillHeight = 58;
      emptyMargin = isNewUser ? 7 : 20;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-predef-mybill-empty_ANON_IPH_DROID.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-predef-mybill-empty_USER_IPH_DROID.png');
      emptyBillWidth = 54;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = isNewUser ? 71 : 48;
      emptyFillHeight = emptyFillWidth;
      payBillSource = isNewUser
        ? require('../images/main/2x,1080.IPH-DROID/2x-main-btn-pay-a-bill_ANON_IPH_DROID.png')
        : require('../images/main/2x,1080.IPH-DROID/2x-main-btn-pay-a-bill_USER_IPH_DROID.png');
      payBillWidth = 411;
      payBillHeight = 58;
      profileSize = 70;
      profileBottom = 10;
      karmaSource = require('../images/main/2x,1080.IPH-DROID/2x-karmala-btn_IPH_DROID.png');
      karmaWidth = 80;
      karmaHeight = 62;
      karmaRight = 35;
      karmaBottom = 35;
      inviteBottom = 70;
      karmaImageHeight = 190;
    } else if (screenHeight > 590) {
      bgSource = require('../images/main/1x.720.DROID/1x-main-background-720_1280_DROID.jpg');
      spacing1 = 15;
      spacing2 = 32;
      spacing3 = isNewUser ? 60 : 28;
      spacing4 = isNewUser ? 25 : 5;
      spacing5 = isNewUser ? 81 : 38;
      logoSource = require('../images/main/1x.720.DROID/1x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 44;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/1x.720.DROID/1x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 21;
      debitNumberSize = 4;
      debitExpTop = 49;
      debitExpLeft = 59;
      debitExpSize = 5;
      debitNameTop = 55;
      debitNameLeft = 25;
      debitNameSize = 5;

      connectBillSource = isNewUser
        ? require('../images/main/1x.720.DROID/1x-main-btn-connect-a-bill_ANON.png')
        : require('../images/main/1x.720.DROID/1x-main-btn-connect-a-bill_USER.png');
      connectBillWidth = 331;
      connectBillHeight = 47;
      emptyMargin = isNewUser ? 7 : 50;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/1x.720.DROID/1x-predef-mybill-empty_ANON.png')
        : require('../images/main/1x.720.DROID/1x-predef-mybill-empty_USER.png');
      emptyBillWidth = 50;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = isNewUser ? 71 : 44;
      emptyFillHeight = emptyFillWidth;
      payBillSource = require('../images/main/1x.720.DROID/1x-main-btn-pay-a-bill_USER_ANON.png');
      payBillWidth = 375;
      payBillHeight = 51.5;
      profileSize = 60;
      profileBottom = 10;
      karmaSource = require('../images/main/1x.720.DROID/1x-karmala-btn.png');
      karmaWidth = 70;
      karmaHeight = 49;
      karmaRight = 35;
      karmaBottom = 35;
      inviteBottom = 70;
      karmaImageHeight = 120;
    } else {
      bgSource = require('../images/main/1x.720.DROID/1x-main-background-720_1280_DROID.jpg');
      spacing1 = 15;
      spacing2 = 5;
      spacing3 = isNewUser ? 50 : 20;
      spacing4 = isNewUser ? 10 : 10;
      spacing5 = isNewUser ? 65 : 28;
      logoSource = require('../images/main/1x.720.DROID/1x-main-logo.png');
      logoWidth = '100%';
      logoHeight = 44;

      earnInviteSize = 22;
      earnUserSize = 14;
      earnMoneySize = 43;
      earnBalanceSize = 22;
      debitSource = require('../images/main/1x.720.DROID/1x-ico-debit.png');
      debitWidth = 137.5;
      debitHeight = 86.5;
      debitNumberTop = 45;
      debitNumberLeft = 22;
      debitNumberSize = 4;
      debitExpTop = 49;
      debitExpLeft = 59;
      debitExpSize = 5;
      debitNameTop = 54;
      debitNameLeft = 21;
      debitNameSize = 5;

      connectBillSource = isNewUser
        ? require('../images/main/1x.720.DROID/1x-main-btn-connect-a-bill_ANON.png')
        : require('../images/main/1x.720.DROID/1x-main-btn-connect-a-bill_USER.png');
      connectBillWidth = 331;
      connectBillHeight = 47;
      emptyMargin = isNewUser ? 5 : 10;
      emptyFontSize = 12;
      emptyBillSource = isNewUser
        ? require('../images/main/1x.720.DROID/1x-predef-mybill-empty_ANON.png')
        : require('../images/main/1x.720.DROID/1x-predef-mybill-empty_USER.png');
      emptyBillWidth = 45;
      emptyBillHeight = emptyBillWidth;
      emptyFillWidth = 40;
      emptyFillHeight = emptyFillWidth;
      payBillSource = require('../images/main/1x.720.DROID/1x-main-btn-pay-a-bill_USER_ANON.png');
      payBillWidth = 320;
      payBillHeight = 35;
      profileSize = 60;
      profileBottom = 10;
      karmaSource = require('../images/main/1x.720.DROID/1x-karmala-btn.png');
      karmaWidth = 55;
      karmaHeight = 40;
      karmaRight = 35;
      karmaBottom = 35;
      inviteBottom = 70;
      karmaImageHeight = 90;
    }
  }

  connectBillSource = require('../images/new/3x-main-btn-CONNECT-DEFAULT_IPH_USER_ANON.jpg');
  moneySource = require('../images/new/3x-main-btn-MONEY-DEFAULT_IPH_USER_ANON.jpg');
  moneyRequestSource = require('../images/new/3x-main-btn-MONEY-REQUEST_IPH_USER_ANON.jpg');
  karmaSource = require('../images/new/3x-karmala-btn.jpg');
  inviteSource = require('../images/new/3x-invite-btn.png');

  return {
    bgSource,
    spacing1,
    spacing2,
    spacing3,
    spacing4,
    spacing5,
    logoSource,
    logoWidth,
    logoHeight,
    earnInviteSize,
    earnUserSize,
    earnMoneySize,
    earnBalanceSize,
    debitSource,
    debitWidth,
    debitHeight,
    debitNumberTop,
    debitNumberLeft,
    debitNumberSize,
    debitExpTop,
    debitExpLeft,
    debitExpSize,
    debitNameTop,
    debitNameLeft,
    debitNameSize,
    connectBillSource,
    connectBillWidth,
    connectBillHeight,
    emptyMargin,
    emptyFontSize,
    emptyBillSource,
    emptyBillWidth,
    emptyBillHeight,
    emptyFillWidth,
    emptyFillHeight,
    payBillSource,
    payBillWidth,
    payBillHeight,
    profileSize,
    profileBottom,
    karmaSource,
    karmaWidth,
    karmaHeight,
    karmaRight,
    karmaBottom,
    inviteSource,
    inviteBottom,

    moneySource,
    moneyRequestSource,
    karmaImageHeight,
  };
}

export function spacing(size) {
  return <View style={{ marginTop: size }} />;
}
