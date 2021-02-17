/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Activity from './src/screens/Activity';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Activity />
    </>
  )
}

export default App;
