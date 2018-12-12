import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const ButtonCustom = props => {
    return (
        <TouchableOpacity {...props} style={{width: props.width, height: props.height}}>
            <View style={[styles.button, {backgroundColor: props.color}]}>
                {props.icon ? <Ionicons name={props.icon} color={'white'} size={20}/> : null}
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        color: 'white',
        marginLeft: 5
    }
});

export default ButtonCustom;

