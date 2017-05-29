import { isSignedIn } from "./authentication/auth";
import App from "./app";
import SignedOut from './authentication/signed_out'

let React = require('react');
let ReactNative = require('react-native');
const {
  View,
  Text,
  StatusBar, AsyncStorage, Alert
} = ReactNative;

class AhuraMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert(err));
  }
  
  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    if (signedIn) {
      return <App />;
    } else {
      return <SignedOut />;      
    }
  }
}

module.exports = AhuraMobile;