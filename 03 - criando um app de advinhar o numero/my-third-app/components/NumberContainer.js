import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => (
  <View style={styles.container}>
    <Text style={styles.number}>{props.children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '60%',
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 6,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
