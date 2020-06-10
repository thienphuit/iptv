/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native';
import Block from './src/components/Block';
import Login from './src/screens/Login';
import Welcome from './src/screens/Welcome';
import {createStackNavigator} from '@react-navigation/stack';
import Navigation from './src/navigation';
import {createStore, applyMiddleware} from 'redux';
import {channelReducer} from './src/reducers/channelReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import appReducers from './src/reducers/index';

const Stack = createStackNavigator();
const images = [
  require("./src/assets/icons/back.png"),
  require("./src/assets/icons/plants.png"),
];
const store =  createStore(appReducers,
   applyMiddleware(thunk))
const App = () => {
  return (
     <Provider store={store}>
        <Navigation />
     </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
