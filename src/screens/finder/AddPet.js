import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import ButtonCustom from "../../components/UI/ButtonCustom";
import {Ionicons} from '@expo/vector-icons';

class AddPet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.imagePlaceholder}>
                        <Ionicons name={'md-images'} color={'white'} size={50}/>
                    </View>
                    <ButtonCustom color={'#808080'} width={'100%'} height={50}>Add image</ButtonCustom>
                    <TextInput multiline={true} style={styles.description} placeholder='Description'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        paddingTop: 30
    },
    row: {
        width: '80%',
        alignItems: 'center'
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
        justifyContent: 'center'
    }
});

export default AddPet;