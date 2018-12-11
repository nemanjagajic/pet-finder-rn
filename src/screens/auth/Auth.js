import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';

import backgroundImage from '../../../assets/dog-background.jpg';
import Header from "../../components/UI/Header";
import ButtonCustom from "../../components/UI/ButtonCustom";
import InputField from "../../components/UI/InputField";

class Auth extends Component {
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Header color={'#f2f2f2'} fontSize={28}>Welcome to Pet Finder</Header>
                    <View style={styles.buttonContainer}>
                        <ButtonCustom color='#4d4d4d' width={'47%'} opacity={0.5}>Register</ButtonCustom>
                        <ButtonCustom color='#4d4d4d' width={'47%'} opacity={0.5}>Guest</ButtonCustom>
                    </View>
                    <ButtonCustom color='#4d4d4d' width={'100%'}>Login</ButtonCustom>
                    <View style={styles.authForm}>
                        <InputField placeholder='Username' backgroundColor='#f2f2f2'/>
                        <InputField placeholder='Password' backgroundColor='#f2f2f2'/>
                        <ButtonCustom color='#009688' width={100}>Log in</ButtonCustom>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    authForm: {
        width: '100%',
        marginTop: 40,
        alignItems: 'center'
    }
});

export default Auth;