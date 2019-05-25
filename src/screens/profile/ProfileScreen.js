import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';
import {updateUser} from "../../store/user/actions";

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    const {loggedUser} = this.props;
    this.state = {
      username: loggedUser.username,
      fullName: loggedUser.fullName,
      phoneNumber: loggedUser.phoneNumber,
      password: loggedUser.password
    };
  }

  updateUser = () => {
    this.props.updateUser(this.state, this.props.loggedUser.id);
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View style={styles.image}>

          </View>
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
    borderRadius: 60
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