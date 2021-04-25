import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize: 16, textAlign: 'center'}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 40,
  },
});
