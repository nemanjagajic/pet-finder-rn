import React, {Component} from 'react';
import {View, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import ButtonCustom from "../UI/ButtonCustom";

class AddImage extends Component {
    render() {
        return (
            <View>
                <View style={styles.imagePlaceholder}>
                    <Ionicons name={'md-images'} color={'white'} size={50}/>
                </View>
                <ButtonCustom
                    color={'#808080'}
                    width={'100%'}
                    height={50}
                >
                    Add image
                </ButtonCustom>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default AddImage;