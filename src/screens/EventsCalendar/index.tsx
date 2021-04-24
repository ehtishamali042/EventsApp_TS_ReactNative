import React from 'react';
import {StatusBar, ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EventCard, Header} from 'components';
export const EventsCalendar = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar />
        <Header title="Events Calendar" />
        <View style={styles.buttonContainer}>
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
          {[1].map(key => (
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
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 100,
    paddingRight: 20,
  },
});
