import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const ButtonCustom = props => {
    return (
        <TouchableOpacity {...props} style={{width: props.width, height: props.height}}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
});

export default ButtonCustom;

