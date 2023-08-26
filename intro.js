"use strict";
// define variable
exports.__esModule = true;
var name = 'krish';
name.toUpperCase();
function login(name, email, isLogin) {
    return isLogin + name;
}
login('kk', 'k@gmail.com', true);
function handleError(errormessage) {
    throw new Error('failed');
}
handleError('fetchApi');
