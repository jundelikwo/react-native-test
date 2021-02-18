/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Account from './src/screens/Account';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Account />
    </>
  )
}

export default App;
