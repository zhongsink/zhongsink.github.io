import { RECEIVE_ITEMS, RECEIVE_PROJECTITEMS, SIGNIN_SUCCESS } from "../constants/ActionType.js";
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
function receiveProjectItems(json) {
    return {
        type: RECEIVE_PROJECTITEMS,
        payload: {
            posts: json
        }
    }
}

function signinsuccess(json) {
    return {
        type: SIGNIN_SUCCESS,
        payload: {
            posts: json
        }
    }
}
export function getItems() {

    return dispatch => {

        $.ajax({
            url: CONFIG.Request.url + "getItems",
            success: json => {
                localStorage.setItem("Items",json);
                dispatch(receiveItems(json));
            },
            error: () => {

            }
        });
        // fetch(CONFIG.Request.url + "getItems", {
        //     method: 'GET',
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //     "Accept-Encoding":"gzip"

        // })
        //     .then(function (res) {
        //         return res.json();
        //     }).then(function (json) {
        //         // console.log(json);
        //         dispatch(receiveItems(json));
        //     });
        $.ajax({
            url: CONFIG.Request.url + "getProjectItem",
            success: json => {
                localStorage.setItem("projectItems",json);
                dispatch(receiveProjectItems(json));
            },
            error: () => {

            }
        });
        //     fetch(CONFIG.Request.url + "getProjectItem", {
        //         method: 'GET',
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     })
        //         .then(function (res) {
        //             return res.json();
        //         }).then(function (json) {
        //             // console.log(json);
        //             dispatch(receiveProjectItems(json));
        //         });

    }
}

export function signIn(obj) {
    return dispatch => {
        fetch(CONFIG.Request.url + "signin", {
            method: "POST",
            headers: {
                // "Content-Type": "multipart/form-data"
            },
            body: obj
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (JSON.parse(json).success)
                dispatch(signinsuccess());
        });
    }

}