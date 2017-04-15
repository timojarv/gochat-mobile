import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


class UsernameWidget extends Component {
    render() {
        return (
            <Text style={styles.text} >{this.props.username}</Text>
        );
    }
}

const mapStateToProps = state => ({username: state.username});

export default connect(mapStateToProps)(UsernameWidget);

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 16,
        fontStyle: 'italic'
    }
});