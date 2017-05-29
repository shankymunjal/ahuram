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


memberData = [
        {'id':1, 'name':'Lucy', 'phone_number':2000},
        {'id':3, 'name':'Lucy', 'phone_number':2000}]

class MemberActivity extends React.Component {
  static navigationOptions = {
    title: 'Activities',
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
    var Members = memberData.map(function(member){
      return (
        <Member navigate={navigate} name={member.name} phone_number={member.phone_number} key={member.id}/>
        )
    })    
    return (
      <View style={styles.container}>
        {Members}
      </View>
    );
  }
}
var styles = StyleSheet.create({

    container:{
      // flex: 1
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

module.exports = MemberActivity;