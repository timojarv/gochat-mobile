import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
    return (
        <TextInput
            style={styles.input}
            underlineColorAndroid="#03A9F4"
        {...props} />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 15,
        color: '#222',
        paddingHorizontal: 10
    }
});