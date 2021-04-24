import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from 'react-native-elements';
import {} from 'components';
export const EventsListing = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <Header
        centerComponent={{
          text: 'Events Listing',
          style: {color: '#fff', fontSize: 16},
        }}
      />
      <View>
        <Text>Textssd</Text>
      </View>
    </View>
  );
};
