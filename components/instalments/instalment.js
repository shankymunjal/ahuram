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

class Instalment extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.memberInfo} onPress={() => 
            this.props.navigate('CommitteeDetail')}>
            <View>
              <Text style={styles.firstRow}>{this.props.name}({this.props.amount})</Text>
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
    marginLeft:5,
    alignSelf: 'center',
  },
  secondRow:{
    fontSize:15,
    marginTop: 2,
  },
  firstRow:{
    fontSize:20
  }
});

module.exports = Instalment;