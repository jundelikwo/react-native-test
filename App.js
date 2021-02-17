/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Login from './src/screens/Login';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Login />
    </>
  )
}

export default App;
