/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {} from 'components';
export const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
      <StatusBar />
      <View>
        <Text>Textssd</Text>
      </View>
    </SafeAreaView>
  );
};
