import React, {useState} from 'react';
import {StatusBar, View, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {
  Picker,
  EventCard,
  Header,
  useCurrentUserEvents,
  RowSpacer,
  EventType,
} from 'components';

export const EventsListing = () => {
  const [eventType, setEventType] = useState<'all' | EventType['eventType']>(
    'all',
  );
  const {events, refetchEvents} = useCurrentUserEvents();
  const navigation = useNavigation();

  const filteredEvents =
    eventType === 'all'
      ? events
      : events.filter(item => item.eventType === eventType);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header title="Events Listing" />
      <View style={styles.buttonContainer}>
        <Picker
          defaultValue={eventType}
          onChangeItem={e => setEventType(e.value)}
        />
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
      <View style={styles.cardsParent}>
        <FlatList
          data={filteredEvents}
          renderItem={({item}) => (
            <EventCard item={item} refetchEvents={refetchEvents} />
          )}
          keyExtractor={item => item.id}
          ListFooterComponent={<RowSpacer />}
          ListEmptyComponent={
            <Text h4 h4Style={{textAlign: 'center', marginTop: 80}}>
              No events to show yet
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: 100,
    maxHeight: 100,
  },
  cardsParent: {
    flex: 1,
    zIndex: -1,
  }, // using zIndex because of https://github.com/hossein-zare/react-native-dropdown-picker/issues/242
});
