import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 16}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
  },
});
