import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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

const Stack = createStackNavigator();

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
    <Stack.Screen name="Browse" component={Browse} />
    <Stack.Screen name="Forgot" component={Forgot} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="Explore" component={Explore} />
    <Stack.Screen name="VideoView" component={VideoView} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);
