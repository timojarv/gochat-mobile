import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import * as actions from '../actions';

import ws from '../services/websocket';

import Navigator from './navigator';


class App extends Component {
    componentWillMount() {
        ws.registerHandler(this.props.handleIncoming);
    }

    render() {
        return <Navigator
            navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}
        />;
    }
}


export default connect(state => ({ nav: state.nav }), actions)(App);