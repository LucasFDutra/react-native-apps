import React from 'react';
import {
  StyleSheet, Text, View, Button, Image,
} from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <TitleText>The Game is Over</TitleText>
    <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')} />
    </View>
    <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        {'Your phone needed '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text>
        {' rounds to guess the number '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
    </View>
    <MainButton onPress={() => props.onRestart()}>NEW GAME</MainButton>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginTop: 10,
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    textAlign: 'center',
  },
  resultContainer: {
    marginVertical: 20,
    width: '80%',
  },
});

export default GameOverScreen;
