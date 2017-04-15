import { MESSAGE_RECEIVE, MESSAGE_RESTORE } from '../actions/types'

export default function(state = [], action) {
    switch (action.type) {
        case MESSAGE_RECEIVE: 
            const newState = [...state, action.payload];
            console.log(newState);
            return newState;
        case MESSAGE_RESTORE:
            return action.payload;
    }
    return state;
}