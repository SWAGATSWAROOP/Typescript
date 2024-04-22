console.log("Swagat")

console.log("Hello")

function Swagat(num:number):number{
    return num;
}

// Classes

class User{
    // We need to predefine all the variables
    email : string
    name : string
    private readonly city : string
    // But we can declare private also in other way
    // #name : string in JS
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
        this.city = "Delhi"
    }
}

const swagat = new User("Swagat@gmail.com","Swagat");

// Professional People write code in this way

