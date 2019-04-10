import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = props => (
  <Text
    {...props}
    style={[styles.text, { color: props.color, fontSize: props.fontSize }]}
  >
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default Header;
