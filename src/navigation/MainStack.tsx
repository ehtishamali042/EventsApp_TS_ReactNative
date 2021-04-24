import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateEvent} from 'screens';
import {BottomNavigator} from './BottomNavigator';
const Stack = createStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
    </Stack.Navigator>
  );
}
