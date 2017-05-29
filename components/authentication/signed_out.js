import { StackNavigator } from "react-navigation";

import SignUp from "./registration";
import Login from "./login";

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign In"
    }
  }
});
module.exports = SignedOut;