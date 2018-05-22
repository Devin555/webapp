import {fetch} from "./fetch.js";

//根据id查商品详情
function checkUser(param) {
    return fetch({
        url:'../static/json/login.json',
        method: 'get',
        params: param
    })
}


export {checkUser}