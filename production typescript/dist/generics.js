"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// We are locking the type
function identityThree(val) {
    return val;
}
console.log(identityThree("Swagat"));
// Most of the people define this as
function identityFour(val) {
    return val;
}
console.log(identityFour("Hello"));
// But If you have to pass your own
identityFour({
    brand: "Swagat",
    type: 1
});
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
// Converting to Arrow functions
// This , is put that is not a tag but a 
const getMoreSerachProducts = (products) => {
    return products[3];
};
// Lets say we only want object to be passed
function anotherFunctioon(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
// But Lets sat we do 
function anotherfunc(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherfunc(3, 8.9);
interface;
