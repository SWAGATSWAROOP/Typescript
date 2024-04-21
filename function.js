"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("4");
function signUpUser(name, email, password, isPaid) {
}
// default parameters
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Swagat";
};
// returning value of multiple type
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(5));
console.log(getValue(3));
signUpUser("swagat", "swagat@gmail.com", "Swagat@1234", true);
