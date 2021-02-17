/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Rooms from './src/screens/Rooms';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Rooms />
    </>
  )
}

export default App;
