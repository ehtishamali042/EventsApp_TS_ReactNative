import React, {useState} from 'react';
import {StatusBar, ScrollView, View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Header} from 'components';

export const CreateEvent = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onDateChange = (event, dob) => {
    if (event.type === 'dismissed') {
      return;
    }
    setShow(false);
    console.log(dob);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'flex-start'}}>
        <StatusBar />
        <Header title="Create Event" />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingVertical: 20,
          }}>
          <View style={styles.btnContainer}>
            <Input placeholder="Name" />
            <Input placeholder="Description" />
            <View style={{paddingHorizontal: 10, width: '100%'}}>
              <Text h4 h4Style={{fontSize: 17}}>
                Set Date
              </Text>
              <DateTimePicker
                value={date}
                mode={'date'}
                minimumDate={new Date()}
                style={{width: '100%', height: 40}}
                is24Hour={false}
                display="default"
                onChange={onDateChange}
              />
            </View>
            <View style={styles.timeContainer}>
              <View>
                <Text>Start Time</Text>
                <DateTimePicker
                  value={date}
                  mode={'time'}
                  minimumDate={new Date()}
                  style={{width: 140, height: 40}}
                  is24Hour={false}
                  display="default"
                  onChange={onDateChange}
                />
              </View>
              <View>
                <Text>End Time</Text>
                <DateTimePicker
                  value={date}
                  mode={'time'}
                  minimumDate={new Date()}
                  style={{width: 140, height: 40}}
                  is24Hour={false}
                  display="default"
                  onChange={onDateChange}
                />
              </View>
            </View>
          </View>
          <View style={styles.btnView}>
            <Button title="Create Event" buttonStyle={{width: '100%'}} />
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
