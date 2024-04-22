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
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "Cuttuck";
        this.coursecount = 1;
        this.email = email;
        this.name = name;
    }
    // getter for email
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCOUNT() {
        return this.coursecount;
    }
    // In setter there should not be any return type
    set courseCount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this.coursecount = coursenum;
    }
    deleteToken() {
        console.log("Swagat");
    }
}
class SubUser extends user {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.coursecount;
    }
}
