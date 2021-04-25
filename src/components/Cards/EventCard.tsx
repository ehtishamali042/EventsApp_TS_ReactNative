import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {AsyncStorageAPI, getFullDate, getFullTime} from 'utilities';

const {getFromAsyncStore, setInAsyncStore} = AsyncStorageAPI;

export const EventCard = ({item, refetchEvents}: any) => {
  const navigation = useNavigation();

  const date = getFullDate(item.date);
  const startTime = getFullTime(item.startTime);
  const endTime = getFullTime(item.endTime);

  const deleteEvent = () => {
    getFromAsyncStore('@events')
      .then(allEvents => {
        if (allEvents === null) return;

        const filteredEvents = allEvents.filter(obj => obj.id !== item.id);
        setInAsyncStore('@events', filteredEvents)
          .then(() => {
            refetchEvents();
            Alert.alert('Delete Event Success');
          })
          .catch(() => Alert.alert('Delete Event Failed'));
      })
      .catch(() => Alert.alert('Delete Event Failed'));
  };

  return (
    <Card>
      <View style={styles.header}>
        <Text style={{fontSize: 16}}>{item.name}</Text>
        <View style={styles.iconContainer}>
          <Button
            onPress={() => deleteEvent()}
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="trash" size={22} />}
          />
          <Button
            onPress={() => navigation.navigate('CreateEvent', {id: item.id})}
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="pencil" size={22} />}
          />
        </View>
      </View>
      <Card.Divider />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.textStyles}>
          {date} - {startTime} : {endTime}
        </Text>
        <Text style={styles.textStyles}>{item.description}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    height: 40,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyles: {marginTop: 8},
});
