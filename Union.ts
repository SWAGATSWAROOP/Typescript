let score: number | string = 12;

score = 44
score = "2"

type User = {
    name:string;
    id:number
}

type Admin = {
    username: string;
    id:number
}

let swagat : User | Admin = {name:"Swagat",id:223}
swagat = {username:"swag",id:331}

// function 
// error
// function getDbID(id: number | string){
//     id.toLowerCase();
// }

// to Solve above error
// Union narrowing
function getDBId(id: number| string){
    if(typeof id === 'string'){
        return ""
    }
    id + 2;
}

// Array
// Not possible const data : number [] | string []
const data: (number | string)[] = ["1",2,3];

// To only have fixed values
let seatallotment : "window" | "aisle";
seatallotment = "aisle";
seatallotment = "window"

