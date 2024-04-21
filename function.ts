function addTwo(num:number){
    return num+2;
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase();
}

getUpper("4");

function signUpUser(name:string,email:string,password:string,isPaid:boolean){

}

// default parameters
let loginUser = (name:string,email:string,isPaid:boolean = true):string => {
    return "Swagat";
}

// returning value of multiple type
function getValue(myVal:number):boolean | string{
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}

console.log(getValue(5))
console.log(getValue(3))
signUpUser("swagat","swagat@gmail.com","Swagat@1234",true);



export {}