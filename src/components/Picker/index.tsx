import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
const options = [
  {
    label: 'All',
    value: 'all',
  },
  {label: 'Event', value: 'event'},
  {label: 'Out of Office', value: 'out_of_office'},
  {label: 'Task', value: 'task'},
];

export const Picker = ({items = options, onChangeItem = () => {}}) => {
  return (
    <DropDownPicker
      placeholder="Event Type"
      items={items}
      containerStyle={{height: 40, width: 120}}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      onChangeItem={onChangeItem}
    />
  );
};
