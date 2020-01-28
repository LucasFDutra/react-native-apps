import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StarGameScreen from './screen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      <StarGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
