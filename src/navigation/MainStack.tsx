import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateEvent} from 'screens';
import {BottomNavigator} from './BottomNavigator';

export type MainStackParamList = {
  Home: undefined;
  CreateEvent: {id?: string} | undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
}
