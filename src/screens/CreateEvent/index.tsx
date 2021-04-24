import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const CreateEvent = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'orange'}}>
      <StatusBar />
      <View>
        <Text>CreateEvent</Text>
      </View>
    </SafeAreaView>
  );
};
