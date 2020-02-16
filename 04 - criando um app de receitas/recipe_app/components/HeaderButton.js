import React from 'react';
// import { HeaderButton } from 'react-navigation-header-buttons';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

import Colors from '../constants/Color';

const CustomHeaderButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={{ ...styles.button, ...props.style }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accentColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
  },
});


export default CustomHeaderButton;
