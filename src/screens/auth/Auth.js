import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';

import backgroundImage from '../../../assets/dog-background.jpg';
import Header from "../../components/UI/Header";
import ButtonCustom from "../../components/UI/ButtonCustom";
import InputField from "../../components/UI/InputField";
import {setLoggedUser} from '../../store/auth/actions';

class Auth extends Component {
    state = {
        selectedOption: 'login'
    };

    render() {
        // Login form
        const loginForm = (
            <View style={styles.authForm}>
                <InputField placeholder='Username' backgroundColor='#f2f2f2'/>
                <InputField placeholder='Password' backgroundColor='#f2f2f2' secureTextEntry={true}/>
                <ButtonCustom
                    color={'#009688'}
                    width={100}
                    onPress={() => this.props.setLoggedUser('Nemanja')}
                >
                    Log in
                </ButtonCustom>
            </View>
        );

        // Register form
        const registerForm = (
            <View style={styles.authForm}>
                <InputField placeholder='Username' backgroundColor='#f2f2f2'/>
                <InputField placeholder='Password' backgroundColor='#f2f2f2' secureTextEntry={true}/>
                <InputField placeholder='Repeat password' backgroundColor='#f2f2f2' secureTextEntry={true}/>
                <ButtonCustom color={'#009688'} width={100}>Register</ButtonCustom>
            </View>
        );

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <Header color={'#f2f2f2'} fontSize={28}>Welcome to Pet Finder</Header>

                    <View style={styles.buttonContainer}>
                        <View
                            style={[styles.buttonWrapper, this.state.selectedOption === 'register' ? {opacity: 1} : {opacity: 0.5}]}>
                            <ButtonCustom
                                color={'#4d4d4d'}
                                onPress={() => this.setState({selectedOption: 'register'})}
                            >
                                Register
                            </ButtonCustom>
                        </View>
                        <View style={[styles.buttonWrapper, {opacity: 0.5}]}>
                            <ButtonCustom
                                color={'#4d4d4d'}
                                onPress={() => console.log(this.props.auth)}
                            >
                                Guest
                            </ButtonCustom>
                        </View>
                    </View>
                    <View
                        style={[styles.mainButtonWrapper, this.state.selectedOption === 'login' ? {opacity: 1} : {opacity: 0.5}]}>
                        <ButtonCustom
                            color={'#4d4d4d'}
                            width={'100%'}
                            onPress={() => this.setState({selectedOption: 'login'})}
                        >
                            Login
                        </ButtonCustom>
                    </View>

                    {this.state.selectedOption === 'login' ? loginForm : registerForm}
                </KeyboardAvoidingView>
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
    },
    buttonWrapper: {
        width: '47%'
    },
    mainButtonWrapper: {
        width: '100%'
    }
});

const mapStateToProps = state => ({
   auth: state.auth
});

const mapDispatchToProps = dispatch => ({
   setLoggedUser: user => dispatch(setLoggedUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);