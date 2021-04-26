import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {EventsListing, EventsCalendar} from 'screens';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="EventsListing"
      tabBarOptions={{labelStyle: {fontSize: 15}}}>
      <Tab.Screen
        name="EventsListing"
        component={EventsListing}
        options={{
          tabBarLabel: 'List View',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="view-list"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="EventsCalendar"
        component={EventsCalendar}
        options={{
          tabBarLabel: 'Calendar View',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
