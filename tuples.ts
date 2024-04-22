const user : ( string | number)[] = ["hc",1];

// lets say you want a string, number and boolean in a specific way
// then we use tuples

let tuser: [string,number,boolean];

tuser = ["Swagat",1,true];
// But I cannot change the order like this
// tuser = [true,1,"Swagat"]

let rgb: [number,number,number] = [255,255,255]
type ttuser = [string,number];

const newUser: ttuser = ["Swagat",112];
// the values can change
newUser[1] = 10;

// But weird behaviour is that we can use array method and push values and its fine with that
// But it could be only of the assigned types
newUser.push("Swagat");


export {}