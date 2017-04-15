import { store } from 'redux';
import { handleIncoming } from '../actions';

import { Webbs } from 'webbs';

const conn = new Webbs(`ws://gochat.timojarv.com/ws`);

const ws = {
    token: false,
    send(data) {
        if(ws.token) {
            conn.send(JSON.stringify(data));
        }
    },
    setToken(token) {
        console.log("Set token called");
        ws.token = token;
        conn.open();
    },
    removeToken() {
        ws.token = false;
        conn.close();
    },
    registerHandler(func) {
        ws.func = func;
    } 
};

conn.onmessage = e => {
    if(ws.func) ws.func(JSON.parse(e.data));
};

conn.onopen = authenticate;

function authenticate() {
    if(ws.token) {
        console.log("Authenticating...");
        conn.send(JSON.stringify({ body: ws.token }));
    }
}

export default ws;