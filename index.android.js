/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

import { authenticate, showLoginScreen } from './src/actions';

import App from './src/components/app';

const store = createStore(reducers, applyMiddleware(thunk));

AsyncStorage.getItem("token")
	.then(token => {
		if(token) {
			store.dispatch(authenticate(token));
		} else {
			setTimeout(
				() => showLoginScreen(store.dispatch),
				1000
			);
		}
	})
	.catch(console.log);

export default class GoChatMobile extends Component {
	render() {
		return (
			<Provider store={store} >
					<App />
			</Provider>
		);
	}
}
AppRegistry.registerComponent('GoChatMobile', () => GoChatMobile);
