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

class Summary extends React.Component {
  static navigationOptions = {
    title: 'Summary',
  };

  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {'id':1, 'name':'Lucy', 'phone_number':2000},
        {'id':2, 'name':'ANdrew', 'phone_number':5000}]),
    };
  }

  renderCommittee(rowData){
    return(
      <TouchableHighlight onPress={() => 
        this.props.navigation.navigate('CommitteeDetail')}>
        <View>
          <Text>{rowData.name}({rowData.phone_number})</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    
    return (
      <View>
        <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this.renderCommittee.bind(this)}/>
      </View>
    );
  }
}

module.exports = Summary;