import React, { Component } from 'react';
import { View, ListView, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

import { connect } from 'react-redux';

class MessageList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.messages)
        };
    }

    componentWillReceiveProps(newProps) {
        console.log("Updating state");
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newProps.messages)
        });
    }

    renderRow(message) {
        return (
            <View style={styles.row} >
                {message.sender === this.props.username ? <View style={styles.spacer} ></View> : null}
                <View style={styles.message} >
                    <Text style={styles.title} >{message.sender}:</Text>
                    <Text style={styles.body} >{message.body}</Text>
                </View>
                {message.sender !== this.props.username ? <View style={styles.spacer} ></View> : null}
            </View>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections={true}
                ref={ref => this.messageList = ref}
                onContentSizeChange={() => this.messageList.scrollToEnd({animated: true})}
                style={styles.messages}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const mapStateToProps = state => ({ messages: state.messages, username: state.username });

export default connect(mapStateToProps)(MessageList);

let styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    message: {
        padding: 20,
        backgroundColor: "#eee",
        margin: 12,
        borderRadius: 8,
        flex: 4
    },
    title: {
        fontWeight: "bold"
    },
    messages: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    body: {
        color: '#555',
        opacity: 1
    },
    spacer: {
        flex: 1,
        height: 20
    }
});