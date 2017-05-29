'use strict';
var React = require('react');
var ReactNative = require('react-native');
var {
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator,
    TabBarIOS,Alert,
    Navigator,
    AsyncStorage
} = ReactNative;

let navigationBarColor = '#24135F';

let tabs = {'nextStep':'Next Steps',
            'messages':'Messages',
            'post':'Posts',
            'notification':'Notifications',
            'resources':'More'};

class TabBarController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: Object.keys(tabs)[0],
            profileImageURL :''
        }
    }

    componentWillMount(){
      UserAction.getUserProfile(this.afterSave.bind(this));
    }
    componentWillReceiveProps(){
      this.setState({selectedTab: this.props.currentTab ? Object.keys(tabs)[this.props.currentTab] : this.state.selectedTab})
    }

    renderScene(route, navigator) {

        switch (route.name) {
          case Object.keys(tabs)[0]:
            return <NextStep navigator={navigator} />
            break;
          case Object.keys(tabs)[1]:
              return <Message navigator={navigator} />
              break;
          case Object.keys(tabs)[2]:
                return <Post navigator={this.props.navigator} />
                break;
          case Object.keys(tabs)[3]:
                return <NextStep navigator={navigator}  />
                break;
          case Object.keys(tabs)[4]:
                return <Resources navigator={this.props.navigator}  />
                break;
          case 'AppointmentList':
                return <AppointmentList navigator={navigator}  />
                break;
          case 'AddOrUpdateAppointment':
                return <AddOrUpdateAppointment navigator={navigator} appointmentData = {route.data}/>
                break;
          case 'AddOrUpdateMedication':
                return <AddOrUpdateMedication navigator={navigator} medicationData = {route.data} />
                break;
            case 'login':
                return <Login navigator = {navigator} />
            break;

          default:
            break;
        }
    }
    render() {
      return (
        <View style={{flex:1}}>
          <TopBar title={tabs[this.state.selectedTab]} navigator={this.props.navigator} profileImageURL={this.state.profileImageURL} newProfilePath = {this.props.userImageUrl}/>
          <TabNavigator tabBarStyle={{backgroundColor:'#8031A7'}}>
          <TabNavigator.Item
            selected={this.state.selectedTab === Object.keys(tabs)[0]}
            title = {tabs[Object.keys(tabs)[0]]}
            titleStyle = {{color:'#24135F'}}
            selectedTitleStyle = {{color:'white'}}
            onPress={()=>this.setState({selectedTab: Object.keys(tabs)[0]})}
            renderIcon ={() => <Icon name="list-ol" size={20} color={navigationBarColor} />}
            renderSelectedIcon ={() => <Icon name="list-ol" size={20} color='white' />}
            >
            <Navigator
              initialRoute={{name: Object.keys(tabs)[0]}}
              renderScene={this.renderScene.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === Object.keys(tabs)[1]}
            title = {tabs[Object.keys(tabs)[1]]}
            titleStyle = {{color:'#24135F'}}
            selectedTitleStyle = {{color:'white'}}
            onPress={()=>this.setState({selectedTab: Object.keys(tabs)[1]})}
            renderIcon ={() => <Icon name="comments" size={20} color={navigationBarColor} />}
            renderSelectedIcon ={() => <Icon name="comments" size={20} color='white' />}
          >
          <Navigator
            initialRoute={{name: Object.keys(tabs)[1]}}
            renderScene={this.renderScene.bind(this)}
          />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === Object.keys(tabs)[2]}
            title = {tabs[Object.keys(tabs)[2]]}
            titleStyle = {{color:'#24135F'}}
            selectedTitleStyle = {{color:'white'}}
            onPress={()=>this.setState({selectedTab: Object.keys(tabs)[2]})}
            renderIcon ={() => <Icon name="list-alt" size={20} color={navigationBarColor} />}
            renderSelectedIcon ={() => <Icon name="list-alt" size={20} color='white' />}
            >
            <Navigator
              initialRoute={{name: Object.keys(tabs)[2]}}
              renderScene={this.renderScene.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === Object.keys(tabs)[3]}
            title = {tabs[Object.keys(tabs)[3]]}
            titleStyle = {{color:'#24135F'}}
            selectedTitleStyle = {{color:'white'}}
            onPress={()=>this.setState({selectedTab: Object.keys(tabs)[3]})}
            renderIcon ={() => <Icon name="bell" size={20} color={navigationBarColor} />}
            renderSelectedIcon ={() => <Icon name="bell" size={20} color='white' />}
            >
            <Navigator
              initialRoute={{name: Object.keys(tabs)[3]}}
              renderScene={this.renderScene.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === Object.keys(tabs)[4]}
            title = {tabs[Object.keys(tabs)[4]]}
            titleStyle = {{color:'#24135F'}}
            selectedTitleStyle = {{color:'white'}}
            onPress={()=>this.setState({selectedTab: Object.keys(tabs)[4]})}
            renderIcon ={() => <Icon name="reorder" size={20} color={navigationBarColor} />}
            renderSelectedIcon ={() => <Icon name="reorder" size={20} color='white' />}
            >
            <Navigator
              initialRoute={{name: Object.keys(tabs)[4]}}
              renderScene={this.renderScene.bind(this)}

            />
          </TabNavigator.Item>
          </TabNavigator>
        </View>

      );

    }

    afterSave(status,data){
      //Set profile image
      this.setState({profileImageURL:data.user.image_url});
      //Set a default support circle in store (Setting in store bcoz we want it to set to default on killing app and coming back)
      this.setSelectedSupportCircle(data);

    }

    setSelectedSupportCircle(data){
      if(data.user.role == 'PATIENT'){
        Store.dispatch({
          type:CONSTANTS.USER_ACCOUNT_SWITCH,
          selectedSupportCircle: data.user.id
        });
      }else{
        //TODO: first check if you are primary care giver
        if (data.user.support_circles){
          Store.dispatch({
            type:CONSTANTS.USER_ACCOUNT_SWITCH,
            selectedSupportCircle: data.user.support_circles[0].patient_id
          });

        }
      }
    }
}

module.exports = TabBarController;
