import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import TextInput from './textinput';
import Button from './button';

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    static navigationOptions = {
        title: 'Login'
    }

    handleLogin() {
        console.log("Handling login");
        console.log(this.state);
        this.props.login(this.state.username, this.state.password)
            .then(() => this.setState({username: "", password: ""}))
            .then(() => Keyboard.dismiss());
    }

    render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="#03A9F4" />

                <Text style={styles.title} >Log in</Text>

                <TextInput
                    onChangeText={text => this.setState({username: text})}
                    placeholder="Username"
                    style={styles.input}
                    value={this.state.username}
                />

                <TextInput
                    onChangeText={text => this.setState({password: text})}
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry
                    value={this.state.password}
                />

                <Button style={styles.button} onPress={this.handleLogin.bind(this)} title="Log in" />
            </View>
        );
    }
}

export default connect(null, actions)(LoginDialog);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 75,
        marginBottom: 60,
    },
    title: {
        fontSize: 50,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '200'
    },
    input: {
        textAlign: 'center',
        marginBottom: 20
    },
    button: {
        marginTop: 20
    }
});