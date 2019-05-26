import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Image,
} from 'react-native';
import {ImagePicker, Permissions} from 'expo';
import {connect} from 'react-redux';
import {updateUser} from "../../store/user/actions";
import {BASE} from "../../services/api/constants";

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    const {loggedUser} = this.props;
    this.state = {
      id: loggedUser.id,
      username: loggedUser.username,
      fullName: loggedUser.fullName,
      phoneNumber: loggedUser.phoneNumber,
      password: loggedUser.password,
      image: loggedUser.image,
      uploadedNewImage: false
    };
  }

  updateUser = () => {
    const userData = {
      username: this.state.username,
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      image: this.state.uploadedNewImage ? this.state.image : null
    };

    this.props.updateUser(userData, this.props.loggedUser.id);
    this.setState({uploadedNewImage: false});
  };

  getImageSource = () => {
    const {uploadedNewImage, image} = this.state;
    return uploadedNewImage ? image.uri : (
      this.state.image
        ? `${BASE}/storage/images/users/${this.state.id}/${this.state.image}`
        : ''
    );
  };

  uploadImage = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 2]
    });

    if (!result.cancelled) {
      this.setState({
        image: result,
        uploadedNewImage: true
      });
    }
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{uri: this.getImageSource()}}
          />
          <TouchableOpacity
            style={styles.changeImageBanner}
            title={'Add image'}
            onPress={this.uploadImage}
          >
            <Text style={styles.changeImageText}>Change profile image </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderLine}/>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          value={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />
        <TextInput
          style={styles.input}
          placeholder={'Full Name'}
          value={this.state.fullName}
          onChangeText={text => this.setState({fullName: text})}
        />
        <TextInput
          style={styles.input}
          placeholder={'Phone Number'}
          value={this.state.phoneNumber}
          onChangeText={text => this.setState({phoneNumber: text})}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          value={this.state.password}
          onChangeText={text => this.setState({password: text})}
        />
        {
          this.props.isUpdating ? (
            <ActivityIndicator
              style={{marginTop: 40, marginBottom: 45}}
              size="large"
              color="#009688"
            />
          ) : (
            <TouchableOpacity
              style={styles.saveButton}
              title={'Save'}
              onPress={this.updateUser}
            >
              <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#26A69A',
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderLine: {
    width: '100%',
    height: 50,
    backgroundColor: '#00897B',
    marginBottom: 30
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: '#f2f2f2',
    borderRadius: 60,
    borderColor: '#f2f2f2',
    borderWidth: 1
  },
  input: {
    width: '80%',
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 10,
    color: '#737373'
  },
  saveButton: {
    height: 40,
    width: 140,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: '#26A69A',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
  },
  changeImageBanner: {
    backgroundColor: '#26A69A',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  changeImageText: {
    color: '#fff',
    fontSize: 16
  }
});

const mapStateToProps = state => ({
  loggedUser: state.auth.loggedUser,
  isUpdating: state.user.isUpdating
});

const mapDispatchToProps = {
  updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);