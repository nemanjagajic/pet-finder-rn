import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Camera} from 'expo';
import ButtonCustom from "../UI/ButtonCustom";
import FloatingButton from "../UI/FloatingButton";

class CustomCamera extends Component {
    state = {
        type: Camera.Constants.Type.back,
    };

    render() {
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={this.state.type}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                    </View>
                </Camera>
                <View style={styles.options}>
                    <FloatingButton color={'#009688'} icon='md-camera'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        width: '100%',
        height: '75%',
    },
    options: {
        backgroundColor: '#333333',
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CustomCamera;