import { RECEIVE_ITEMS } from "../constants/ActionType.js";
import {CONFIG} from "../constants/Config.js";

import fetch from "node-fetch";

function receiveItems(json){
    return {
        type:RECEIVE_ITEMS,
        payload:{
                posts:json
            }
    }
}

export function getItems(){

return dispatch => {

    fetch(CONFIG.Request.url)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        dispatch(receiveItems(json));
    });
    }
}