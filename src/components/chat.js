import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './header';
import MessageList from './messagelist';
import Footer from './footer';

class Chat extends Component {
    static navigationOptions = {
        title: 'GoChat'
    }

    render() {
        return (
            <View style={styles.container} >
                <Header handleBackButton={this.props.logout} />
                <MessageList />
                <Footer />
            </View>
        );
    }
}


export default connect(null, actions)(Chat);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});