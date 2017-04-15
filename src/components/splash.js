import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function Splash(props) {
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="#03A9F4" />
            <Text style={styles.title} >GoChat</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#03A9F4",
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold'
    }
});