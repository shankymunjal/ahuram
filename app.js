/**
* Created by heenadhawan on 2/7/17.
*/
'use strict';
let React = require('react');
let ReactNative = require('react-native');
const {
  View,
  StyleSheet,
  Image,
  AsyncStorage,Navigator,
} = ReactNative;

import Login from './login';
import Tab from './tab';

class App extends React.Component {
  constructor(props, navigator) {
    super(props);
    this.state = {
      currentScreen:'login',
    };
  }

  componentWillMount(){
          // this.setState({currentScreen: 'login'})
    AsyncStorage.getItem('auth-token', (err, result) => {
      if (result){
        this.setState({currentScreen: 'tab'})
      }else {
        this.setState({currentScreen: 'login'})
      }
    });
  }

  componentDidMount(){
  this.timer = setTimeout(() => {
    this.redirect(this.state.currentScreen)
  }, 5000);
}

  renderScene(route, navigator) {
    if(route.name == 'login') {
      return <Login navigator={navigator} />
    }
    if(route.name == 'tab') {
      return <Tab navigator={navigator} />
    }
    if(route.name == 'Register') {
      return <Register navigator={navigator} />
    }
  
    // if(route.name == 'home') {
    //   return <Home navigator={navigator} {...route.passProps} />
    // }
    // if(route.name == 'update') {
    //   return <Update navigator={navigator} {...route.passProps} />
    // }
  }

  redirect(routeName, accessToken){
      this.props.navigator.replace({
        name: routeName
    });
  }

  render() {
      return (
          <View style={{flex:1}}>
            <Image style={styles.container}>
              <View style={{flex:4}}/>
                <Image style={{alignSelf:'center'}}/>
                <Image style={{alignSelf:'center', marginTop:50}}/>
              <View style={{flex:4}}/>
            </Image>
          </View>
      );

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  }
});

module.exports = App;
