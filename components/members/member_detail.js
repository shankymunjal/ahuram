let React = require('react');
let ReactNative = require('react-native');
const {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  ScrollView,Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StatusBar, AsyncStorage, Alert
} = ReactNative;

import { TabNavigator, } from 'react-navigation';
import MemberSummary from './member_summary';
import MemberActivity from './member_activity';

const MemberDetail = TabNavigator( 
  {
    MemberSummary: { screen: MemberSummary },
    MemberActivity: { screen: MemberActivity },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        alignSelf: 'center',
      },
      style: {
        backgroundColor: 'white',

      },
    },
  },
);

module.exports = MemberDetail;