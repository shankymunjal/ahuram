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

let Form = tcombForm.form.Form;

// here we are: define your domain model
let Instalment = tcombForm.struct({
  name: tcombForm.String,
  amount: tcombForm.Number,              // a required string
});

let options = {};

class NewInstalment extends React.Component {
  static navigationOptions = {
    title: 'Add new Instalment',
  };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      navigate: this.props.navigation.navigate,
    }
  }

  submitForm(){
    this.state.navigate("CommitteeDetail")
  }

  render() {
    return (
      <View style={styles.container}>
      <Form
          ref="form"
          type={Instalment}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
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

module.exports = NewInstalment;