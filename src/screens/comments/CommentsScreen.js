import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import {bindActionCreators} from "redux";
import {fetchPetComments, fetchPetAdComments} from "../../store/pet/actions";
import CommentsList from "../../components/comments/List";
import CommentInput from "../../components/comments/CommentInput";
import { Ionicons } from '@expo/vector-icons';

class CommentsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      headerRight: (
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={state.params.fetchComments}
        >
          <Ionicons name={"ios-refresh"} color="white" size={20}/>
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      fetchComments: this.fetchComments
    });
    this.fetchComments();
  }

  fetchComments = () => {
    if (this.props.navigation.getParam('isPetAd')) {
      this.props.fetchPetAdComments(this.props.navigation.getParam('petId'));
    } else {
      this.props.fetchPetComments(this.props.navigation.getParam('petId'));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {
          !this.props.isFetching && (
            <CommentsList
              comments={this.props.comments}
              petId={this.props.navigation.getParam('petId')}
              isPetAd={this.props.navigation.getParam('isPetAd')}
            />
          )
        }
        {
          this.props.isFetching && (
            <View style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
            }}>
              <CommentInput disabled={true}/>
              <ActivityIndicator
                style={styles.loader}
                size="large"
                color="#009688"
              />
            </View>
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
  loader: {
    marginTop: 20
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
    fetchPetComments,
    fetchPetAdComments
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsScreen);
