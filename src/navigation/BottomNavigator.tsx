import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EventsListing, EventsCalendar} from 'screens';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EventsListing" component={EventsListing} />
      <Tab.Screen name="EventsCalendar" component={EventsCalendar} />
    </Tab.Navigator>
  );
};
