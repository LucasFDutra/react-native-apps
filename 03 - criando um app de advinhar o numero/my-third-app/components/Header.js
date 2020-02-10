import React from 'react';
import {
  StyleSheet, Text, View, Platform,
} from 'react-native';
import TitleText from './TitleText';
import Colors from '../constants/colors';
import colors from '../constants/colors';

const Header = (props) => (
  <View style={styles.header}>
    <TitleText style={styles.headerTitle}>{props.title}</TitleText>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? colors.primary : '#f5f5f5',
  },
});

export default Header;
