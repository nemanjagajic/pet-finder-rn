import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import PetAdList from "../../components/petAd/List";
import {bindActionCreators} from "redux";
import {fetchPetAds} from "../../store/pet/actions";

class FoundPetsScreen extends Component {
    componentDidMount() {
        this.props.fetchPetAds();
    }

    render() {
        return (
            <View style={styles.container}>
                {console.log(this.props.adItems)}
                <PetAdList pets={[{description: 'da'}, {description: 'heh'}]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchPetAds
        },
        dispatch
    );

const mapStateToProps = state => ({
    auth: state.auth,
    adItems: state.pets.adItems
});

export default connect(mapStateToProps, mapDispatchToProps)(FoundPetsScreen);