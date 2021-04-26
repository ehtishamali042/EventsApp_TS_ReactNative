import React, {useState} from 'react';
import {StatusBar, ScrollView, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {EventCard, Header, useCurrentUserEvents, RowSpacer} from 'components';
import {getFullDate} from 'utilities';

export const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | string>(new Date());
  const {events, refetchEvents} = useCurrentUserEvents();
  const navigation = useNavigation();

  const filteredEvents = events.filter(
    item => getFullDate(item.date) === getFullDate(selectedDate),
  );

  return (
    <SafeAreaView>
      <StatusBar />
      <Header title="Events Calendar" />
      <ScrollView>
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
            onPress={() => navigation.navigate('CreateEvent')}
          />
        </View>
        <Calendar
          style={{
            height: 350,
          }}
          current={selectedDate}
          onDayPress={day => {
            console.log(new Date(day.dateString), 'day');
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'purple',
              selectedTextColor: 'white',
            },
          }}
        />
        <View style={{height: 'auto'}}>
          {filteredEvents.length ? (
            filteredEvents.map((item, key) => (
              <EventCard item={item} key={key} refetchEvents={refetchEvents} />
            ))
          ) : (
            <Text h4 h4Style={{textAlign: 'center', marginTop: 80}}>
              No events to show yet
            </Text>
          )}

          <RowSpacer />
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
