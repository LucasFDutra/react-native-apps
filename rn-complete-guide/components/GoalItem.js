import React, { useEffect } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

const GoalInput = ({ title, onDelete, id }) => (
  <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.3}>
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    // backgroundColor: '#ccc',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default GoalInput;
