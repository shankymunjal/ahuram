/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AsyncStorage
} from 'react-native';
import CommitteeList from '../components/committee/committee_list';
import CommitteeForm from '../components/committee/committee_form';
import CommitteeDetail from '../components/committee/committee_detail';
import Instalments from '../components/instalments/instalments';
import InstalmentForm from '../components/instalments/instalment_form';
import NewInstalment from '../components/instalments/new_instalment';
import MemberList from '../components/members/member_list';
import MemberDetail from '../components/members/member_detail';
import MemberForm from '../components/members/member_form';
import Summary from '../components/committee/summary';
import { StackNavigator, } from 'react-navigation';

const App = StackNavigator({
  CommitteeList: { screen: CommitteeList },
  CommitteeForm: { screen: CommitteeForm },
  CommitteeDetail: { screen: CommitteeDetail },
  Instalments: {screen: Instalments},
  MemberList: {screen: MemberList},
  MemberDetail: {screen: MemberDetail},
  Summary: {screen: Summary},
  MemberForm: {screen: MemberForm},
  InstalmentForm: {screen: InstalmentForm},
  NewInstalment: {screen: NewInstalment}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = App;
