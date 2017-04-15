import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Icon from 'react-native-vector-icons/EvilIcons';

import TextInput from './textinput';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }

    handleSend() {
        if(!this.state.message.length) return;
        this.props.sendMessage(this.state.message);
        this.setState({message: ""});
    }

    render() {
        return (
            <View style={styles.footer} >
                <TextInput
                    style={styles.input}
                    placeholder="Type message..."
                    returnKeyType="send"
                    onChangeText={message => this.setState({message})}
                    value={this.state.message}
                />
                <TouchableOpacity style={styles.sendButton} onPress={() => this.handleSend()} >
                    <Icon style={styles.sendIcon} name="arrow-right" />
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, actions)(Footer);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        elevation: 10
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderRadius: 8,
        margin: 10,
        flex: 1,
        fontSize: 16
    },
    sendButton: {
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    sendIcon: {
        fontSize: 40,
        color: '#03A9F4'
    }
});