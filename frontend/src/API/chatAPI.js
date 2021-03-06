
import { BASE_URL } from "../config";
import token from "./getToken"
import { getToken, getUserId } from './getToken'

const API = BASE_URL + '/api'

export const getMessageFromChannel = async ({ channelId }) => {
    var token = getToken()
    return await fetch(`${API}/chat/${channelId}?page=1&limit=100&sort=asc`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const getLastMessage = async ({ channelId }) => {
    var token = getToken()
    return await fetch(`${API}/chat/last/${channelId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};