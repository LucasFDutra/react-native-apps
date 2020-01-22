import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerAdd}>
        <TextInput placeholder='Course Goal' style={styles.courseGoalInput} />
        <Button title='ADD' />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  courseGoalInput: {
    margin: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
  },
  containerAdd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
