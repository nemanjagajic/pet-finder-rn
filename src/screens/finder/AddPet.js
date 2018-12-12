import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import BottomButton from "../../components/UI/BottomButton";
import PickLocation from "../../components/map/PickLocation";
import AddImage from "../../components/image/AddImage";
import ButtonCustom from "../../components/UI/ButtonCustom";


class AddPet extends Component {
    state = {
        showMap: false,
        focusedLocation: {
            latitude: 45.2524671,
            longitude: 19.8378565,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
        },
        image: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showMap: true
            })
        }, 250);
    }

    handleLocationPicked = coords => {
        this.setState(prevState => ({
            focusedLocation: {
                ...prevState.focusedLocation,
                latitude: coords.latitude,
                longitude: coords.longitude
            }
        }));
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.row}>
                        <View style={styles.centeredContent}>
                            {
                                this.state.showMap ?
                                    <PickLocation
                                        focusedLocation={this.state.focusedLocation}
                                        onLocationPicked={this.handleLocationPicked}
                                    />
                                    :
                                    <View>
                                        <View style={styles.mapPlaceHolder}/>
                                        <ButtonCustom
                                            color={'#808080'}
                                            width={'100%'}
                                            height={50}
                                        >
                                            Locate me
                                        </ButtonCustom>
                                    </View>
                            }
                            <AddImage/>
                            <TextInput multiline={true} style={styles.description} placeholder='Description'/>
                            <View style={styles.buttonWrapper}>
                                <BottomButton color={'#009688'} icon={'md-checkmark'}/>
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
        width: '100%'
    },
    mapPlaceHolder: {
        width: '100%',
        height: 180,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#d9d9d9',
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    }
});

export default AddPet;