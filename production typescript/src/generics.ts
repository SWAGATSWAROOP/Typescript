const score:Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number):boolean | number{
    return val;
}

function identityTwo(val:any):any{
    return val;
}

// We are locking the type
function identityThree<Type>(val:Type):Type{
    return val;
}

console.log(identityThree("Swagat"));

// Most of the people define this as

function identityFour<T>(val:T):T{
    return val;
}

console.log(identityFour("Hello"));

interface Bottle{
    brand : string,
    type: number
}

// But If you have to pass your own
identityFour<Bottle>({
    brand : "Swagat",
    type : 1
})

function getSearchProducts<T>(products:T[]):T{
    const myIndex = 3;
    return products[myIndex];
}

// Converting to Arrow functions
// This , is put that is not a tag but a 
const getMoreSerachProducts = <T,>(products:Array<T>):T => {
    return products[3];
}



