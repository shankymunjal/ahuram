'use strict';
let React = require('react');
let ReactNative = require('react-native');
const {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  ScrollView,Dimensions,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StatusBar, AsyncStorage, Alert
} = ReactNative;

// const dismissKeyboard = require('dismissKeyboard')
// import UserAction from './action_creator/user_action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showLoader: false,
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar barStyle='light-content'/>
      </View>
    );
  }

  addLoader(){
    if(this.state.showLoader){
      return  (<ActivityIndicator
        style={ { position :'absolute',zIndex:1,
        marginTop:Dimensions.get('window').height/4-100, marginLeft:Dimensions.get('window').width/3+10
        }}
        size="large"
        color='#24135F'
        animating={true}
        />);
      }
        return  (<View/>)
  }

  onRegisterButtonPress() {
    this.redirect('Register');
  }

  onLoginButtonPress() {
      this.setState({showLoader:true});
    if ((this.state.username) && (this.state.password)){

      UserAction.loginUser(this.makeJsonDataToSubmit(), this.afterSave.bind(this));
    }else{
            this.setState({showLoader:false});
      Alert.alert(
        'Enter Details',
        'Please enter username and password to login.',
        [
          {text: 'OK', onPress: () => console.log('permission denied'), style: 'cancel'}
        ]
      )
    }
  }

  redirect(routeName, accessToken){
    this.props.navigator.push({
      name: routeName
    });
  }

  onForgotPasswordButtonPress() {
    this.redirect('forgotPassword');
  }

  afterSave(er){
    this.setState({showLoader:false});
    if (er){
      if (er.success){
        this.redirect('tab');
      }
      //SHOW SOME ALERT FOR ERROR
      this.showErrorAlert();
    }
    else{
      this.redirect('tab');
    }
  }

  showErrorAlert(){
    Alert.alert(
      'Error',
      'Something went worng, please try later.',
      [
        {text: 'OK', onPress: () => console.log('permission denied'), style: 'cancel'}
      ]
    )
  }
  makeJsonDataToSubmit(){
    return {
      username: this.state.username,
      password: this.state.password,
    }
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    padding:30
  },
  keyboardcontainer: {
    flex: 1,
    alignItems:'stretch',
  },
  inputTextBox: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 0.60,
    marginTop: 30,
    borderRadius: 5,
    color: '#fff',
    padding: 10,
    paddingLeft:20,
    fontWeight:'bold',
    fontSize:15,
  },
  button: {
    height: 50,
    borderColor: '#00bda8',
    borderWidth: 1,
    marginTop: 30,
    borderRadius:5,
    backgroundColor: '#00bda8'
  },
  buttonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop:10
  },
  logo: {
    flex:2,marginTop:70,
    flexDirection:'row'
  },
  backgroundImage: {
    resizeMode: 'stretch',
    flex:1,
  }
});

module.exports = Login;
