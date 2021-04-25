import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from 'navigation';
import {UserEventsProvider} from 'components';
const App = () => {
  return (
    <UserEventsProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </UserEventsProvider>
  );
};
export default App;
