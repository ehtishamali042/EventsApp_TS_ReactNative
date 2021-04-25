import React from 'react';
import DTP from '@react-native-community/datetimepicker';
import {Button} from 'react-native-elements';
import {IS_ANDROID, getFullDate, getFullTime} from 'utilities';

export const DateTimePicker = ({
  mode,
  date,
  onChange,
  type,
  showPicker,
  setShowPicker,
  style,
}) => {
  return (
    <>
      {IS_ANDROID && (
        <Button
          title={mode === 'date' ? getFullDate(date) : getFullTime(date)}
          buttonStyle={{width: 120}}
          onPress={() => setShowPicker(true)}
        />
      )}
      {showPicker && (
        <DTP
          value={date}
          mode={mode}
          minimumDate={new Date()}
          style={{width: '100%', height: 40, ...style}}
          is24Hour={false}
          display="default"
          onChange={(e, date) => onChange(e, date, type)}
        />
      )}
    </>
  );
};
