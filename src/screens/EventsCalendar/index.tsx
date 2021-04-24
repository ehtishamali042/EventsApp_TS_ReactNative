import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {} from 'components';
export const EventsCalendar = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
      <StatusBar />
      <View>
        <Text>EventsCalendar</Text>
      </View>
    </SafeAreaView>
  );
};
