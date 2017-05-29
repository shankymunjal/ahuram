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
import Icon from 'react-native-vector-icons/FontAwesome';

class Member extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.memberInfo} onPress={() => 
          this.props.navigate('MemberDetail', {member: this.props})}>
            <View>
              <Text style={styles.firstRow}>
                {this.props.member.name}({this.props.member.mobile_phone})
              </Text>
              <Text style={styles.secondRow}>
                Total paid - 
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.addIcon} onPress={() => 
            this.props.navigate('InstalmentForm', 
              {
                committee: this.props.committee,
                member: this.props.member
              })}>
            <View>
              <Icon name="plus-circle" size={30} color="#900" />
            </View>
          </TouchableHighlight>
        </View>
      
      </View>
    )
  }
}

var styles = StyleSheet.create({

  container:{
    flexDirection: 'row',
    height:60,
    backgroundColor:'whitesmoke',
    marginBottom: 2,
  },
  addIcon:{
    flex:1,
    alignSelf: 'center',
  },
  memberInfo:{
    flex: 5,
    padding: 2,
    marginLeft: 5
  },
  secondRow:{
    fontSize:15,
    marginTop: 2,
  },
  firstRow:{
    fontSize:20
  }
});

module.exports = Member;