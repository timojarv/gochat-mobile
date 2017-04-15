import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native'; 
import Icon from 'react-native-vector-icons/EvilIcons';

import UsernameWidget from './usernamewidget';


export default function Header(props) {
    return (
        <View style={styles.header} >
            <StatusBar backgroundColor="#03A9F4" />
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                onPress={askConfirmation.bind(null, props.handleBackButton)}
            >
                <View>
                    <Icon name="chevron-left" style={styles.backIcon} />
                </View>
            </TouchableNativeFeedback>
            <Text style={styles.headerText} >GoChat</Text>
            <UsernameWidget />
        </View>
    );
}

function askConfirmation(handler) {
    Alert.alert(
        'Logging out',
        'Are you sure?',
        [
            { text: 'No' },
            { text: 'yes', onPress: handler }
        ]
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#03A9F4",
        padding: 16,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        flex: 1
    },
    backIcon: {
        color: '#fff',
        fontSize: 40
    }
});