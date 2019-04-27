import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Dimensions, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from "redux";
import {postPetComment} from "../../store/comments/actions";

class CommentInput extends Component {
  state = {
    text: ''
  };

  addComment = () => {
    if (this.props.disabled) return;

    if (this.props.isPetAd) {
      // TODO implement this
    } else {
      this.props.postPetComment({
        petId: this.props.petId,
        userId: this.props.loggedUser.id,
        content: this.state.text
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={'Leave a comment...'}
          multiline={true}
          onChangeText={text => this.setState({text})}
        />
        <TouchableOpacity
          style={[
            styles.postButton, {backgroundColor: this.props.disabled ? '#999999' : '#26A69A'}
          ]}
          onPress={this.addComment}
        >
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 150,
    position: 'absolute',
    top: 0,
  },
  textInput: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    height: 100,
    backgroundColor: '#FFF',
    borderColor: '#b3b3b3',
    borderWidth: 1,
    borderBottomWidth: 0,
    color: '#737373',
    padding: 10
  },
  postButton: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    padding: 10
  },
  text: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 5
  },
});

const mapStateToProps = state => ({
  loggedUser: state.auth.loggedUser
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    postPetComment: postPetComment
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);