import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {bindActionCreators} from "redux";
import {fetchPetComments} from "../../store/pet/actions";
import { Ionicons } from '@expo/vector-icons';
import CommentsList from "../../components/comments/List";

class CommentsScreen extends Component {
  componentDidMount() {
    this.props.fetchPetComments(this.props.navigation.getParam('petId'));
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.isFetching && (
            this.props.comments.length > 0
              ? <CommentsList comments={this.props.comments} />
              : (
                <View style={styles.containerCenter}>
                  <Ionicons name="ios-chatbubbles" color="#bfbfbf" size={40} />
                  <Text style={styles.emptyListText}>No comments added yet</Text>
                </View>
              )
          )
        }
        {
          this.props.isFetching && (
            <ActivityIndicator
              style={styles.containerCenter}
              size="large"
              color="#009688"
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    color: '#b3b3b3',
  }
});

const mapStateToProps = state => {
  return {
    comments: state.comments.items,
    isFetching: state.comments.isFetching
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPetComments
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsScreen);
