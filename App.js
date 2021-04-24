/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
export default App;
