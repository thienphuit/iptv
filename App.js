/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Navigation from './src/navigation';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import appReducers from './src/reducers/index';

const store = createStore(appReducers, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

//style main
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

export default App;
