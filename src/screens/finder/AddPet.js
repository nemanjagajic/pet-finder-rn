import React, {Component} from 'react';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import ButtonCustom from "../../components/UI/ButtonCustom";
import {MapView} from 'expo';
import {Ionicons} from '@expo/vector-icons';

import FloatingButton from "../../components/UI/FloatingButton";
import BottomButton from "../../components/UI/BottomButton";


class AddPet extends Component {
    state = {
        showMap: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showMap: true
            })
        }, 250);
    }

    render() {
        const map = (
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}
            />
        );

        return (
            <View style={styles.container}>
                <ScrollView style={{width: '100%'}}>
                    <View style={styles.row}>
                        <View style={styles.centeredContent}>
                            {this.state.showMap ? map : <View style={styles.mapPlaceHolder}/>}
                            <ButtonCustom color={'#808080'} width={'100%'} height={50}>Locate me</ButtonCustom>
                            <View style={styles.imagePlaceholder}>
                                <Ionicons name={'md-images'} color={'white'} size={50}/>
                            </View>
                            <ButtonCustom color={'#808080'} width={'100%'} height={50}>Add image</ButtonCustom>
                            <TextInput multiline={true} style={styles.description} placeholder='Description'/>
                            <View style={styles.buttonWrapper}>
                                <BottomButton color={'#009688'} icon={'md-checkmark'}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
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
    imagePlaceholder: {
        backgroundColor: '#d9d9d9',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        height: 200,
        marginBottom: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
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
    map: {
        width: '100%',
        height: 180,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        overflow: 'hidden'
    },
    buttonWrapper: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    }
});

export default AddPet;