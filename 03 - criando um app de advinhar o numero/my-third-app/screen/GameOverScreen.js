import React, { useState, useEffect } from 'react';
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

const GameOverScreen = (props) => {
  const [avalibleDeviceWidth, setAvalibleDeviceWidth] = useState(Dimensions.get('window').width);
  const [avalibleDeviceHeight, setAvalibleDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setAvalibleDeviceWidth(Dimensions.get('window').width);
      setAvalibleDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return (() => {
      Dimensions.removeEventListener('change', updateLayout);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over</TitleText>
        <View style={{
          width: avalibleDeviceWidth * 0.7,
          height: avalibleDeviceWidth * 0.7,
          borderRadius: avalibleDeviceWidth * 0.7 / 2,
          borderWidth: 3,
          borderColor: 'black',
          overflow: 'hidden',
          marginVertical: avalibleDeviceHeight / 30,
        }}
        >
          <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')} />
        </View>
        <View style={{
          marginVertical: avalibleDeviceHeight / 60,
          width: '80%',
        }}
        >
          <BodyText style={{
            textAlign: 'center',
            fontSize: avalibleDeviceHeight < 400 ? 16 : 20,
          }}
          >
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
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
