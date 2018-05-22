import {fetch} from "./fetch.js";

//登陆
function checkUser(param) {
    return fetch({
        url:'../static/json/login.json',
        method: 'get',
        params: param
    })
}

//首页的轮播图片
function shuffling(param) {
    return fetch({
        url:'../static/json/shuffling.json',
        method: 'get',
        params: param
    })
}



export {checkUser,shuffling}