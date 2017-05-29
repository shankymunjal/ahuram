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
  ListView,
  StatusBar, AsyncStorage, Alert
} = ReactNative;

import Member from './member';

class MemberSummary extends React.Component {
  static navigationOptions = {
    title: 'Summary',
  };

  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(memberData),
    };
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.memberInfo]}>Amans Summary</Text>
        </View>
        <View>
          <Text style={[styles.defaultText, styles.paid]}>Total Paid</Text>
        </View>
        <View>
          <Text style={[styles.defaultText]}>Total taken</Text>
        </View>
        <View>
          <Text style={[styles.defaultText]}>Paid according to instalments</Text>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({

    container:{
      flex: 1
    },
    defaultText:{
      fontSize: 20,
      fontWeight:'bold',
      height: 40,
      padding: 10,
    },
    paid:{
      
    },
    memberInfo:{
      fontSize: 25,
      marginTop: 30,
      textAlign: 'center',
      fontWeight:'bold',
      height: 40,
    },
    buttonText:{
      height: 40,
      color: 'black',
      fontWeight:'bold',
      fontSize: 18,
      textAlign: 'center',
      alignSelf: 'center',
      padding:6,
      fontFamily: 'HelveticaNeue-Medium',
    },
    addButton: {
      borderColor: 'dodgerblue',
      borderWidth: 1,
      margin: 10,
      borderRadius:5,
      backgroundColor: 'dodgerblue'      
    }
});

module.exports = MemberSummary;