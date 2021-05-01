import React, {useEffect, useState} from 'react';
import {StatusBar, ScrollView, View, StyleSheet, Alert} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {
  Header,
  Picker,
  useCurrentUserEvents,
  DateTimePicker,
  EventType,
} from 'components';
import {AsyncStorageAPI, IS_ANDROID} from 'utilities';
import {MainStackParamList} from 'navigation';

const {getFromAsyncStore, setInAsyncStore} = AsyncStorageAPI;

// This Screen will serve CreateEvent and UpdateEvent functionality

type CreateEventScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'CreateEvent'
>;
type CreateEventScreenRouteProp = RouteProp<MainStackParamList, 'CreateEvent'>;

type Props = {
  navigation: CreateEventScreenNavigationProp;
  route: CreateEventScreenRouteProp;
};

export const CreateEvent: React.FC<Props> = ({route, navigation}) => {
  const isEventCreateScreen = !route.params;

  const {refetchEvents, events} = useCurrentUserEvents();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState<'all' | EventType['eventType']>(
    'all',
  );
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(
    IS_ANDROID ? false : true,
  );
  const [showStartTimePicker, setShowStartTimePicker] = useState(
    IS_ANDROID ? false : true,
  );
  const [showEndTimePicker, setShowEndTimePicker] = useState(
    IS_ANDROID ? false : true,
  );

  useEffect(() => {
    if (!isEventCreateScreen && route.params && route.params.id) {
      // This is UpdateEvent Screen

      const itemId = route.params.id;
      const getItem = events.filter(item => item.id === itemId);
      if (!getItem.length) return;
      const item = getItem[0];
      setName(item.name);
      setDescription(item.description);
      setEventType(item.eventType);
      setDate(new Date(item.date));
      setStartTime(new Date(item.startTime));
      setEndTime(new Date(item.endTime));
    }
  }, [isEventCreateScreen, events]);

  const onDateChange = (
    event: Event,
    date_value: Date | undefined,
    type: 'date' | 'startTime' | 'endTime',
  ) => {
    setShowDatePicker(IS_ANDROID ? false : true);
    setShowStartTimePicker(IS_ANDROID ? false : true);
    setShowEndTimePicker(IS_ANDROID ? false : true);

    if (event.type === 'dismissed' || !date_value) {
      return;
    }
    if (type === 'date') {
      setDate(date_value);
    } else if (type === 'startTime') {
      setStartTime(new Date(date_value));
    } else if (type === 'endTime') {
      setEndTime(new Date(date_value));
    }
  };
  const validateForm = () => {
    if (!name) {
      Alert.alert('Enter Event Name');
      return false;
    }
    if (eventType === 'all') {
      Alert.alert('Select Event Type');
      return false;
    }
    if (new Date(endTime).getTime() >= new Date(startTime).getTime()) {
      Alert.alert('Time should not be same');
      return false;
    }
    return true;
  };

  const createEventHandler = async () => {
    const validate = validateForm();
    if (!validate) return;
    const item = {
      id: new Date().getTime().toString(),
      name,
      description,
      date,
      startTime,
      endTime,
      eventType,
    };

    getFromAsyncStore('@events')
      .then((allEvents: EventType[] | null) => {
        if (allEvents === null) allEvents = [];
        allEvents.unshift(item);
        console.log(allEvents.length, 'allEvents');
        setInAsyncStore('@events', allEvents)
          .then(() => {
            refetchEvents();
            Alert.alert('Create Event Success');
            navigation.goBack();
          })
          .catch(() => Alert.alert('Create Event Failed'));
      })
      .catch(() => Alert.alert('Create Event Failed'));
  };

  const updateEventHandler = async () => {
    if (isEventCreateScreen) return;
    const validate = validateForm();
    if (!validate) return;
    if (route.params && route.params.id) {
      const item = {
        name,
        description,
        date,
        startTime,
        endTime,
        eventType,
        id: route.params.id,
      };

      getFromAsyncStore('@events')
        .then((allEvents: EventType[] | null) => {
          if (allEvents === null) return;

          const filteredEvents = allEvents.filter(obj => obj.id !== item.id);
          const newItems = [item, ...filteredEvents];
          setInAsyncStore('@events', newItems)
            .then(() => {
              refetchEvents();
              Alert.alert('Update Event Success');
            })
            .catch(() => Alert.alert('Update Event Failed'));
        })
        .catch(() => Alert.alert('Update Event Failed'));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'flex-start'}}>
        <StatusBar />
        <Header title={isEventCreateScreen ? 'Create Event' : 'Update Event'} />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <View style={styles.btnContainer}>
            <Input
              placeholder="Name"
              value={name}
              onChangeText={v => setName(v)}
            />
            <Input
              value={description}
              placeholder="Description"
              onChangeText={v => setDescription(v)}
            />
            <View style={{paddingHorizontal: 10, width: '100%', marginTop: 10}}>
              <Text h4 h4Style={{fontSize: 17}}>
                Set Date
              </Text>
              <DateTimePicker
                type="date"
                mode="date"
                date={date}
                onChange={onDateChange}
                showPicker={showDatePicker}
                setShowPicker={setShowDatePicker}
              />
            </View>
            <View style={styles.timeContainer}>
              <View>
                <Text>Start Time</Text>
                <DateTimePicker
                  type="startTime"
                  mode="time"
                  date={startTime}
                  onChange={onDateChange}
                  showPicker={showStartTimePicker}
                  setShowPicker={setShowStartTimePicker}
                  style={{width: 140, height: 40}}
                />
              </View>
              <View>
                <Text>End Time</Text>
                <DateTimePicker
                  type="endTime"
                  mode="time"
                  date={endTime}
                  onChange={onDateChange}
                  showPicker={showEndTimePicker}
                  setShowPicker={setShowEndTimePicker}
                  style={{width: 140, height: 40}}
                />
              </View>
            </View>
            <View style={{margin: 10}}>
              <Text h4 h4Style={{fontSize: 17}}>
                Event Type
              </Text>
              <Picker
                defaultValue={eventType}
                onChangeItem={e => setEventType(e.value)}
              />
            </View>
          </View>
          <View style={styles.btnView}>
            {isEventCreateScreen ? (
              <Button
                title={'Create Event'}
                buttonStyle={{width: '100%'}}
                onPress={createEventHandler}
              />
            ) : (
              <Button
                title={'Update Event'}
                buttonStyle={{width: '100%'}}
                onPress={updateEventHandler}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 10,
  },
  timeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
  },
  btnView: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
