import {fetch} from "./fetch.js";

//登陆
function checkUser(param) {
    return fetch({
        url:'../static/json/login.json',
        method: 'get',
        params: param
    })
}

//首页-猜你喜欢
function shop(param) {
    return fetch({
        url:'/api/shop',
        method: 'get',
        params: param
    })
}

//附近-享美食
function goodfood(param) {
    return fetch({
        url:'/api/goodfood',
        method: 'get',
        params: param
    })
}

//首页-轮播图片
function shuffling(param) {
    return fetch({
        url:'../static/json/shuffling.json',
        method: 'get',
        params: param
    })
}

//首页-栏目
function lanmu(param) {
    return fetch({
        url:'../static/json/Lanmu.json',
        method: 'get',
        params: param
    })
}

//首页-广告
function ad(param) {
    return fetch({
        url:'../static/json/ad.json',
        method: 'get',
        params: param
    })
}



export {checkUser,shuffling,lanmu,ad,shop,goodfood}