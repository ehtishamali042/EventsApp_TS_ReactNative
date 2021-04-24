import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export const EventCard = () => {
  return (
    <Card>
      <View style={styles.header}>
        <Text style={{fontSize: 16}}>Title</Text>
        <View style={styles.iconContainer}>
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="trash" size={22} />}
          />
          <Button
            buttonStyle={{backgroundColor: 'transparent'}}
            icon={<Icon name="pencil" size={22} />}
          />
        </View>
      </View>
      <Card.Divider />
      <View style={{paddingHorizontal: 10}}>
        <Text style={styles.textStyles}>12-March-2021 - 3pm</Text>
        <Text style={styles.textStyles}>Description....</Text>
        <Text style={styles.textStyles}>Attachment Not Available</Text>
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
