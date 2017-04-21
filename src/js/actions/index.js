import { RECEIVE_ITEMS } from "../constants/ActionType.js";
import { CONFIG } from "../constants/Config.js";
import $ from 'jquery';
// import fetch from "node-fetch";

function receiveItems(json) {
    return {
        type: RECEIVE_ITEMS,
        payload: {
            posts: json
        }
    }
}

export function getItems() {

    return dispatch => {

        return $.ajax({
            url: CONFIG.Request.url,
            success: json => {
                dispatch(receiveItems(json));
            },
            error: () => {
                window.location.href = href;
            }
        });
        // return fetch(CONFIG.Request.url,{ method: 'GET' })
        // .then(function(res) {
        //     return res.json();
        // }).then(function(json) {
        //     console.log(json);
        //     dispatch(receiveItems(json));
        // });
        // }
    }
}