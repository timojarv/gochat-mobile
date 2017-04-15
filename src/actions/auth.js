import axios from 'axios';
import ws from '../services/websocket';
import { AUTH, FLUSH_STATE } from './types';

import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';


// Validate token and authenticate
export function authenticate(token) {
    return dispatch => axios.post("http://gochat.timojarv.com/validate", { token })
        .then(response => {
            if(!response.data.error) {
                ws.setToken(token);
                dispatch({
                    type: AUTH,
                    payload: token
                });
                showChatScreen(dispatch);
            } else showLoginScreen(dispatch);
        });
}

export function login(username, password) {
    return dispatch => axios.post("http://gochat.timojarv.com/login", { username, password })
        .then(response => {
            if(!response.data.error) {
                console.log("Login action succeeded");
                ws.setToken(response.data.data);
                AsyncStorage.setItem("token", ws.token);
                dispatch({
                    type: AUTH,
                    payload: response.data.data
                });
				console.log("Login ok, showing chat screen");
                showChatScreen(dispatch);
            }
        });
}

export function logout() {
    ws.removeToken();
    AsyncStorage.removeItem("token");
    return {
        type: FLUSH_STATE
    }
}

export const showChatScreen = dispatch => dispatch(NavigationActions.navigate({routeName: "Chat"}));
export const showLoginScreen = dispatch => dispatch(NavigationActions.navigate({routeName: "Login"}));
export const showSplashScreen = dispatch => dispatch(NavigationActions.navigate({routeName: "Splash"}));