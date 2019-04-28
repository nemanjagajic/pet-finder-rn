import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Dimensions, StyleSheet, TextInput, View, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from "redux";
import {postPetComment, postPetAdComment} from "../../store/comments/actions";

class CommentInput extends Component {
  state = {
    text: ''
  };

  addComment = () => {
    if (this.props.disabled) return;

    if (this.props.isPetAd) {
      this.props.postPetAdComment({
        petAdId: this.props.petId,
        userId: this.props.loggedUser.id,
        content: this.state.text
      });
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
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    height: 150,
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 15,
    marginBottom: 10
  },
  textInput: {
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    height: 100,
    backgroundColor: '#FFF',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    color: '#737373',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10
  },
  postButton: {
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10
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
    postPetComment,
    postPetAdComment
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);