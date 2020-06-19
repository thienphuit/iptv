import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//Component
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Browse from '../screens/Browse';
import Forgot from '../screens/Forgot';
import {theme} from '../constants';
import SignUp from '../screens/SignUp';
import Settings from '../screens/Settings';
import Explore from '../screens/Explore';
import VideoView from '../screens/VideoView';
import BottomTab from '../screens/BottomTab';
import Information from '../screens/Information';
import Admin from '../screens/Admin';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const AddminStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Browse} />
    <HomeStack.Screen name="VideoView" component={VideoView} />
    {/* <HomeStack.Screen name="Settings" component={Settings} /> */}
  </HomeStack.Navigator>
);

const ExploreStackScreen = () => (
  <ExploreStack.Navigator
    screenOptions={{headerTitleStyle: {flex: 1, textAlign: 'center'}}}>
    <ExploreStack.Screen name="Explore" component={Explore} />
  </ExploreStack.Navigator>
);

const AddminStackScreen = () => (
  <AddminStack.Navigator>
    <AddminStack.Screen name="Information" component={Information} />
    <AddminStack.Screen name="Admin" component={Admin} />
  </AddminStack.Navigator>
);

//handle navigation authen login
const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      // headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'white',
        height: theme.sizes.base * 4,
        borderBottomColor: 'transparent',
        elevation: 0,
      },

      // headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
      //headerBackTitle: null,
    }}>
    <Stack.Screen
      options={{headerShown: false}}
      name="Welcome"
      component={Welcome}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Forgot" component={Forgot} />
    <Stack.Screen name="SignUp" component={SignUp} />
    {/* <Stack.Screen name="Browse" component={Browse} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Explore" component={Explore} />
    <Stack.Screen name="VideoView" component={VideoView} /> */}
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home1"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={AddminStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" size={26} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
    {/*  <AuthStack/> */}
  </NavigationContainer>
);
