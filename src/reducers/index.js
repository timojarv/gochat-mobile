import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation';

import { FLUSH_STATE } from '../actions/types';

import messages from './messages'
import username from './username'
import auth from './auth'
import nav from './nav'

const appReducer = combineReducers({
    messages,
    username,
    auth,
    nav
});

export default (state, action) => {
    if(action.type == FLUSH_STATE) {
        state = undefined;

        // Reset to login screen
        action = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        });
    }

    return appReducer(state, action);
};