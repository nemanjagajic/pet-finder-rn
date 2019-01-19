import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AlertIOS,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    ToastAndroid,
    View
} from 'react-native';
import {Ionicons} from "../found/AddFoundPetScreen";
import AddImage from "../../components/image/AddImage";
import BottomButton from "../../components/UI/BottomButton";
import {bindActionCreators} from "redux";
import {postLostPet} from "../../store/pet/actions";

class AddLostPetScreen extends Component {
    state = {
        image: null,
        description: '',
        locationInfo: '',
        phoneNumber: ''
    };

    addLostPet = () => {
        const {image, description, locationInfo, phoneNumber} = this.state;

        if (description === '' || locationInfo === '' || phoneNumber === '') {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Required fields cannot be empty', ToastAndroid.SHORT);
            } else {
                AlertIOS.alert('Required fields empty', 'Required fields cannot be empty');
            }
            return;
        }

        const pet = {
            user: this.props.loggedUser,
            locationInfo,
            image,
            description,
            phoneNumber
        };

        this.props.postLostPet(pet);
        this.props.navigation.pop();
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.row}>
                        <View style={styles.centeredContent}>
                            <AddImage
                                onImageAdded={image => this.setState({image})}
                            />
                            <TextInput
                                multiline={true}
                                style={styles.description}
                                placeholder='Description'
                                onChangeText={text => this.setState({description: text})}
                            />
                            <TextInput
                                style={styles.basicInput}
                                placeholder='Location info (Country, City)'
                                onChangeText={text => this.setState({locationInfo: text})}
                            />
                            <TextInput
                                style={styles.basicInput}
                                placeholder='Phone number'
                                onChangeText={text => this.setState({phoneNumber: text})}
                            />
                            <View style={styles.buttonWrapper}>
                                <BottomButton
                                    color={'#009688'}
                                    icon={'md-checkmark'}
                                    onPress={this.addLostPet}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
    },
    row: {
        width: '100%',
        alignItems: 'center'
    },
    centeredContent: {
        width: '80%'
    },
    description: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        height: 150,
        textAlignVertical: 'top',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        color: '#737373'
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },
    basicInput: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        color: '#737373'
    }
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            postLostPet
        },
        dispatch
    );

const mapStateToProps = state => ({
    loggedUser: state.auth.loggedUser
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLostPetScreen);