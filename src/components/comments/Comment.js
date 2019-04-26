import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import userService from "../../services/api/UserService";

class Comment extends React.Component {
  state = {
    user: null
  };

  async componentDidMount() {
    const response = await userService.getById(this.props.item.user_id);
    this.setState({
      user: response.data[0]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          {this.props.item.content}
          <Text style={styles.user}> - {this.state.user && this.state.user.username}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    color: '#666666',
    padding: 15
  },
  user: {
    color: '#26A69A'
  }
});

export default Comment;
