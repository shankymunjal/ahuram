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

import Icon from 'react-native-vector-icons/Entypo';
import API from '../../apis/committee';

class CommitteeList extends React.Component {
  static navigationOptions = props => {
    return{
    title: 'Committees',
    headerRight: (
        <TouchableHighlight style={{marginRight: 10}} onPress={() => 
          props.navigation.navigate('CommitteeForm')}>
          <Icon name="plus" size={40} />
        </TouchableHighlight>
        ),
    }
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    API.getCommittes().then((committees) => {
      this.setState({dataSource: ds.cloneWithRows(committees)})
    })
  }

  renderCommittee(rowData){
    return(
      <View style={styles.listContainer}>
        <TouchableHighlight style={styles.memberInfo} onPress={() => 
          this.props.navigation.navigate('CommitteeDetail', {committee: rowData})}>
          <View>
            <Text style={styles.firstRow}>{rowData.name} - {rowData.amount}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this.renderCommittee.bind(this)}/>
      </View>
    );
  }
}
var styles = StyleSheet.create({

  container:{
    // flex: 1
  },
  memberInfo:{
    
    flex: 5,
    padding: 2,
    marginLeft:5,
    alignSelf: 'center',
  },
  firstRow:{
    fontSize:20
  },
  listContainer:{
    flexDirection: 'row',
    height:60,
    backgroundColor:'whitesmoke',
    marginBottom: 2,
  },


});

module.exports = CommitteeList;