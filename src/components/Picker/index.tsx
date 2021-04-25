import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Platform} from 'react-native';
const options = [
  {
    label: 'All',
    value: 'all',
  },
  {label: 'Event', value: 'event'},
  {label: 'Out of Office', value: 'out_of_office'},
  {label: 'Task', value: 'task'},
];

export const Picker = ({
  items = options,
  onChangeItem = (e: any) => {},
  containerStyle = {},
  defaultValue = 'all',
}) => {
  return (
    <View
      style={{
        position: 'relative',
        ...(Platform.OS !== 'android' && {
          zIndex: 10,
        }),
      }}>
      <DropDownPicker
        items={items}
        containerStyle={{height: 40, width: 140}}
        defaultValue={defaultValue}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={onChangeItem}
        zIndex={5000}
        zIndexInverse={6000}
      />
    </View>
  );
};
