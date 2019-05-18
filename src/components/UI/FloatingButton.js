import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FloatingButton = props => (
  <TouchableOpacity {...props} style={[styles.floatingButton, { backgroundColor: props.color }]}>
    <Ionicons name={props.icon} color="white" size={20} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    alignSelf: 'center'
  },
});

export default FloatingButton;
