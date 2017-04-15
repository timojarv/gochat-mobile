import { USERNAME_SET } from '../actions/types'

export default function(state = "", action) {
    switch (action.type) {
        case USERNAME_SET:
            console.log("Username set");
            return action.payload;
    }
    return state;
}