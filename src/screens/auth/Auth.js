import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, KeyboardAvoidingView, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import backgroundImage from '../../../assets/dog-background.jpg';
import Header from "../../components/UI/Header";
import ButtonCustom from "../../components/UI/ButtonCustom";
import InputField from "../../components/UI/InputField";
import {logIn, register} from '../../store/auth/actions';

class Auth extends Component {
    state = {
        selectedOption: 'login',
        fullName: '',
        username: '',
        password: '',
        rePassword: '',
        validRePassword: true,
    };

    componentDidUpdate() {
        if (this.props.loggedUser && typeof(this.props.loggedUser) !== 'number') {
            this.props.navigation.navigate('ExploreStack');
        }
    }

    handleLogin = () => {
        const {username, password} = this.state;
        this.props.logIn({
            username,
            password
        });
    };

    handleRegister = () => {
        const {fullName, username, password, rePassword} = this.state;af
        this.setState(() => ({validRePassword: true}));


        if (password !== rePassword) {
            this.setState(() => ({validRePassword: false}));
            return;
        }

        this.props.register({
           fullName,
           username,
           password
        });

        this.setState(() => ({password: '', rePassword: ''}));
    };

    render() {
        // Login form
        const loginForm = (
            <View style={styles.authForm}>
                <InputField
                    placeholder='Username'
                    backgroundColor={this.props.loggedUser !== 404 ? '#f2f2f2' : '#FF9494'}
                    autoCapitalize='none'
                    onChangeText={text => this.setState({username: text})}
                    value={this.state.username}
                />
                <InputField
                    placeholder='Password'
                    backgroundColor={this.props.loggedUser !== 401 ? '#f2f2f2' : '#FF9494'}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                />
                {
                    this.props.loggedUser === 422
                        ?
                        <Text style={styles.message}>Required fields cannot be empty</Text>
                        :
                        <Text style={styles.message}/>
                }
                <ButtonCustom
                    color={'#009688'}
                    width={100}
                    onPress={this.handleLogin}
                >
                    Log in
                </ButtonCustom>
            </View>
        );

        // Register form
        const registerForm = (
            <View style={styles.authForm}>
                <InputField
                    placeholder='Full name'
                    backgroundColor='#f2f2f2'
                    autoCapitalize='none'
                    onChangeText={text => this.setState({fullName: text})}
                    value={this.state.fullName}
                />
                <InputField
                    placeholder='Username'
                    backgroundColor='#f2f2f2'
                    autoCapitalize='none'
                    secureTextEntry={false}
                    onChangeText={text => this.setState({username: text})}
                    value={this.state.username}
                />
                <InputField
                    placeholder='Password'
                    backgroundColor='#f2f2f2'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                />
                <InputField
                    placeholder='Repeat password'
                    backgroundColor={this.state.validRePassword ? '#f2f2f2' : '#FF9494'}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({rePassword: text})}
                    value={this.state.rePassword}
                />
                {
                    this.props.registeredMessage !== ''
                        ?
                        <Text style={styles.message}>{this.props.registeredMessage}</Text>
                        :
                        <Text style={styles.message}/>
                }
                <ButtonCustom
                    color={'#009688'}
                    width={100}
                    onPress={this.handleRegister}

                >
                    Register
                </ButtonCustom>
            </View>
        );

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior='padding'>
                    <Header color={'#f2f2f2'} fontSize={28}>Welcome to Pet Finder</Header>

                    <View style={styles.buttonContainer}>
                        <View
                            style={[styles.buttonWrapper, this.state.selectedOption === 'register' ? {opacity: 1} : {opacity: 0.5}]}>
                            <ButtonCustom
                                color={'#4d4d4d'}
                                onPress={() => this.setState({selectedOption: 'register'})}
                                icon='md-person'
                            >
                                Register
                            </ButtonCustom>
                        </View>
                        <View style={[styles.buttonWrapper, {opacity: 0.5}]}>
                            <ButtonCustom
                                color={'#4d4d4d'}
                                icon='md-finger-print'
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
                            icon='md-log-in'
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
    buttonLayout: {},
    mainButtonWrapper: {
        width: '100%'
    },
    message: {
        height: 25,
        paddingBottom: 5,
        color: '#f2f2f2',
        fontSize: 16
    }
});

const mapStateToProps = state => ({
    loggedUser: state.auth.loggedUser,
    registeredMessage: state.auth.registeredMessage
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            logIn,
            register
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Auth);