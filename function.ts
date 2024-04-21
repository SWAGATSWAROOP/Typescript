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

const getHello = (s:string):string => {
    return ""
}

console.log(getHello("Swagat"))

const heros = [1,"spiderman","ironman",true];

// Context switching 
// returning a string
heros.map((hero ): string => {
    return `hero is ${hero}`
})

function consoleError(errmas:string):void{
    console.log(errmas)
}

// For handling error and not crashing the website we should use never
// For Error execution and termination never is used
function handleError(errmas:string):never{
    throw new Error(errmas)
}






export {}