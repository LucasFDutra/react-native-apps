import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = (props) => (
  <ScrollView>
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
  </ScrollView>
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
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  highlight: {
    color: Colors.primary,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  resultContainer: {
    marginVertical: Dimensions.get('window').height / 60,
    width: '80%',
  },
});

export default GameOverScreen;
