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
  StatusBar, AsyncStorage, Alert
} = ReactNative;

import Instalment from './instalment';
import API from '../../apis/instalment';
import tcombForm from 'tcomb-form-native';

let Form = tcombForm.form.Form;

let InstalmentForm = tcombForm.struct({
  name: tcombForm.String,
  amount: tcombForm.Number,
});

let options = {};

class Instalments extends React.Component {
  static navigationOptions = {
    title: 'Instalments',
  };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      instalments: [],
      committeeId: this.props.navigation.state.params.committee.id
    }
    API.getInstalments(this.state.committeeId).then((instalments) => {
      this.setState({instalments: instalments})
    })
  }

  submitForm(){    
    let instalment = this.refs.form.getValue();
    let committee = this.props.navigation.state.params.committee
    let committeeId = committee.id
    let that = this;
    API.createInstalment(instalment, committeeId).then((instalment) => {
      that.state.instalments.push(instalment)
      that.setState({'instalments': that.state.instalments})
    })
  }

  render() {
    const {navigate} = this.props.navigation
    var Instalments = this.state.instalments.map(function(instalment){
      return (
        <Instalment navigate={navigate} name={instalment.name} amount={instalment.amount} key={instalment.id}/>
        )
    })    
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Form
            ref="form"
            type={InstalmentForm}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.submitForm} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
  
        {Instalments}
      </View>
    );
  }
}
var styles = StyleSheet.create({
  formContainer:{
    margin: 25,
  },
  addButton: {
    borderColor: 'dodgerblue',
    borderWidth: 1,
    margin: 10,
    borderRadius:5,
    backgroundColor: 'dodgerblue'      
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

module.exports = Instalments;