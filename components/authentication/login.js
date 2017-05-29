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

import tcombForm from 'tcomb-form-native';
import API from '../../apis/member';

let Form = tcombForm.form.Form;

// here we are: define your domain model
let Member = tcombForm.struct({
  mobile_phone: tcombForm.Number,
  password: tcombForm.String,
});

var options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    }
  }
};

class Login extends React.Component {
  static navigationOptions = {
    title: 'Add new Member',
  };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      navigation: this.props.navigation
    }
  }

  submitForm(){
    let member = this.refs.form.getValue();
    let committee = this.props.navigation.state.params.committee
    let committeeId = committee.id
    let that = this;
    API.createMember(member, committeeId).then((member) => {
      that.state.navigation.navigate("MemberList", {committee: committee})
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Form
          ref="form"
          type={Member}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop: 25,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = Login;