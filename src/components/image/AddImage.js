import React, { Component } from 'react';
import { View, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import ButtonCustom from "../UI/ButtonCustom";
import { ImagePicker, Permissions } from 'expo';

class AddImage extends Component {
  state = {
    image: null
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 2]
    });

    if (!result.cancelled) {
      this.setState({image: result});
    }

    this.props.onImageAdded(this.state.image);
  };

  openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 2]
    });

    if (!result.cancelled) {
      this.setState({image: result});
    }

    this.props.onImageAdded(this.state.image);
  };

  render() {
    const {image} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.imagePlaceholder}>
          {
            image === null
              ?
              <Ionicons name={'md-images'} color={'white'} size={50}/>
              :
              <Image source={{uri: image.uri}} style={styles.image}/>
          }
        </View>
        <View style={styles.buttonWrapper}>
          <ButtonCustom
            color={'#808080'}
            width={'48%'}
            height={50}
            onPress={this.pickImage}
          >
                      Add image
          </ButtonCustom>
          <ButtonCustom
            color={'#808080'}
            width={'48%'}
            height={50}
            onPress={this.openCamera}
          >
                      Take a picture
          </ButtonCustom>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  imagePlaceholder: {
    backgroundColor: '#d9d9d9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '100%',
    height: 180,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 178
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default AddImage;