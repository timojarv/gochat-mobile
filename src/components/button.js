import React, { Component } from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';

export default function Input(props) {
    return (
        <View style={styles.radius} >
            <TouchableNativeFeedback onPress={props.onPress} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} >
                <View style={styles.button} >
                    <Text style={styles.buttonText} >{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    radius: {
        borderRadius: 12
    },
    button: {
        backgroundColor: "#03A9F4",
        padding: 20,
        borderRadius: 12
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
});