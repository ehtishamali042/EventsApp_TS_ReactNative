import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import DTP from '@react-native-community/datetimepicker';
import {Button} from 'react-native-elements';
import {IS_ANDROID, getFullDate, getFullTime} from 'utilities';

type Props = {
  mode: 'date' | 'time';
  date: Date;
  type: 'date' | 'startTime' | 'endTime';
  style?: ViewStyle;
  onChange: (e: Event, date: Date | undefined, type: Props['type']) => void;
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
};
export const DateTimePicker: React.FC<Props> = ({
  mode,
  date,
  onChange,
  type,
  showPicker,
  setShowPicker,
  style = {},
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
