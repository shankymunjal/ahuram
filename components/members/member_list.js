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
import API from '../../apis/member';

class MemberList extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Members',
  });

  constructor(props) {
    super(props);
    
    this.state = {
      members: [],
      committeeId: this.props.navigation.state.params.committee.id
    };
    API.getMembers(this.state.committeeId).then((members) => {
      this.setState({members: members})
    })
  }

  render() {
    const {navigate, state} = this.props.navigation
    var Members = this.state.members.map(function(member){
      return (
        <Member 
          navigate={navigate} 
          member={member} 
          key={member.id}
          committee={state.params.committee}/>
        )
    })
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.addButton} color="#841584"
          onPress={() => navigate('MemberForm', {committee: state.params.committee})}>
          <Text style={styles.buttonText}>Add new Member</Text>
        </TouchableHighlight>
        {Members}
      </View>
    );
  }
}
var styles = StyleSheet.create({

    container:{
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

module.exports = MemberList;