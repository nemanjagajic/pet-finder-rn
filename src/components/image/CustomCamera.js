import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Camera} from 'expo';
import FloatingButton from "../UI/FloatingButton";

class CustomCamera extends Component {
    state = {
        type: Camera.Constants.Type.back,
    };

    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    style={styles.camera}
                    type={this.state.type}
                    ref={ref => { this.camera = ref; }}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                    </View>
                </Camera>
                <View style={styles.options}>
                    <FloatingButton
                        color={'#26A69A'}
                        icon='md-camera'
                        onPress={this.takePicture}
                    />
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