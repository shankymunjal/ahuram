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
  name: tcombForm.String,
  mobile_phone: tcombForm.Number,
  password: tcombForm.String,
  confirm_password: tcombForm.String,
});

let options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    },
    confirm_password: {
      password: true,
      secureTextEntry: true,
    }
  }
};


class Registration extends React.Component {
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
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
      <Form
          ref="form"
          type={Member}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles.login} 
          onPress={() => navigate("Login")} underlayColor='#99d9f4'>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>        
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    // marginTop: 25,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 20,
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
  login:{
    width:100,
    alignSelf: 'center'
  },
  loginText:{
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
  }
});

module.exports = Registration;