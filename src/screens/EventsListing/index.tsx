import React from 'react';
import {StatusBar, ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Picker, EventCard, Header} from 'components';
export const EventsListing = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <Header title="Events Listing" />
        <View style={styles.buttonContainer}>
          <Picker />
          <Button
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
                style={{marginRight: 8}}
              />
            }
            title="Create Event"
          />
        </View>
        <View style={{height: 'auto'}}>
          {[1, 2, 3, 4, 5].map(key => (
            <EventCard key={key} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 100,
  },
});
