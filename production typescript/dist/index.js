"use strict";
console.log("Swagat");
console.log("Hello");
function Swagat(num) {
    return num;
}
// Classes
class User {
    // But we can declare private also in other way
    // #name : string in JS
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi";
    }
}
const swagat = new User("Swagat@gmail.com", "Swagat");
// Professional People write code in this way
