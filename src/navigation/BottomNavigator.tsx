import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EventsListing, EventsCalendar} from 'screens';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 15}}}>
      <Tab.Screen
        name="EventsListing"
        component={EventsListing}
        options={{
          tabBarLabel: 'List View',
        }}
      />
      <Tab.Screen
        name="EventsCalendar"
        component={EventsCalendar}
        options={{
          tabBarLabel: 'Calendar View',
        }}
      />
    </Tab.Navigator>
  );
};
