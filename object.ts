const User = {
    name: "Swagat",
    email : "swagat@gmail.com",
    isActive: true
}

function createUser({name:string,isPaid:boolean}){};

createUser({name:'Swagat',isPaid:false})

// When object returns object
function createCourse():{name:string,price:number}{
    return {name:'reactjs',price : 2999}
}

// Odd behaviour of typescript

let newUser = {name:"swagat",isPaid:false,email:"a@gmail.com"}

// It should stop but not stoping
createUser(newUser)

// Type Alias
type User2 = {
    name: string;
    email : string;
    isActive: boolean
}

type mystring = string

function createUser2(user:User2):User2{
    return {name:"",email:"",isActive:false}
}

export {}