import React, {Component} from 'react';
import {View, StyleSheet, Text, Platform, ScrollView} from 'react-native';

import PickedLocation from "../../components/map/PickedLocation";
import ShowImage from "../../components/image/ShowImage";
import {Ionicons} from '@expo/vector-icons';
import userService from '../../services/api/UserService';

class FoundPet extends Component {

    state = {
        showMap: false,
        user: null
    };

    async componentDidMount() {
        const response = await userService.getById(this.props.navigation.state.params.userId);
        this.setState({
            user: response.data[0]
        });

        setTimeout(() => {
            this.setState({
                showMap: true
            });
        }, 250);
    }

    render() {
        const pet = this.props.navigation.state.params;

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.row}>
                    {
                        this.state.showMap ?
                            <PickedLocation
                                focusedLocation={pet.location}
                            />
                            :
                            <View>
                                <View style={styles.mapPlaceHolder}/>
                            </View>
                    }
                    <ShowImage image={pet.image}/>
                    <View style={styles.info}>
                        <View style={styles.infoItemPair}>
                            <View style={styles.infoItem}>
                                <Ionicons name='ios-navigate' size={18} color={'#26A69A'}/>
                                <Text style={styles.infoText}>
                                    {`${Platform.OS === 'android' ? pet.locationInfo.street + ' ' + pet.locationInfo.name : pet.locationInfo.name}`}
                                </Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Ionicons name='md-map' size={18} color={'#26A69A'}/>
                                <Text style={styles.infoText}>
                                    {`${pet.locationInfo.city}, ${pet.locationInfo.country}`}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoItemPair}>
                            <View style={styles.infoItem}>
                                <Ionicons name='ios-time' size={18} color={'#26A69A'}/>
                                <Text style={styles.infoText}>
                                    {pet.createdAt}
                                </Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Ionicons name='md-contact' size={18} color={'#26A69A'}/>
                                <Text style={styles.infoText}>
                                    {this.state.user && this.state.user.username}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{color: '#8c8c8c', fontSize: 15}}>{pet.description}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
        backgroundColor: '#f2f2f2',
        alignItems: 'center'
    },
    row: {
        width: '80%'
    },
    mapPlaceHolder: {
        width: '100%',
        height: 180,
        marginTop: 20,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#d9d9d9',
    },
    info: {
        flexDirection: 'column',
        marginTop: 15,
    },
    infoText: {
        color: '#8c8c8c',
        fontSize: 12,
        textAlign: 'center',
    },
    infoItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5,
        width: '48%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    infoItemPair: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    description: {
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d9d9d9'
    },
});

export default FoundPet;
