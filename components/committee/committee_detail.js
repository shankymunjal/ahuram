let React = require('react');
let ReactNative = require('react-native');

import { TabNavigator, } from 'react-navigation';
import MemberList from '../members/member_list';
import Instalments from '../instalments/instalments';
import Summary from './summary';

const CommitteeDetail = TabNavigator( 
  {
    // MemberList: { screen: props => <MemberList name='shanky'/> },
    MemberList: { screen: MemberList },
    Instalments: { screen: Instalments },
    Summary: { screen: Summary },  
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
        // color: 'white',
      },
      style: {
        backgroundColor: 'white',

      },
    },
  },
);

<CommitteeDetail screenProps={{name: 'shanky'}}/>

module.exports = CommitteeDetail;