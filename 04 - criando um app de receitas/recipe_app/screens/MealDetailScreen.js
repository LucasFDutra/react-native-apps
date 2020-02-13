import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = (props) => (
  <View style={styles.screen}>
    <Text>The detail meals screen!</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
