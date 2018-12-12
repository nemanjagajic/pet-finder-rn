import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField = props => {
    return (
        <TextInput {...props} style={[styles.inputField, {backgroundColor: props.backgroundColor}]}/>
    );
};

const styles = StyleSheet.create({
   inputField: {
       width: '100%',
       borderRadius: 5,
       padding: 7,
       paddingLeft: 10,
       marginBottom: 15
   }
});

export default InputField;
