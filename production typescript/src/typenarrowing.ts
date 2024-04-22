function detectType(val:number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val+3;
}

function provideId(id:string | null){
    if(!id){
        console.log("Please Provide ID")
        return
    }
    id.toLowerCase();
}

// Don't do this 
// Because "" type of string is not covered that is an empty string
// Also we have not covered case when value is null
function printAll(strs:string| string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }else if(typeof strs === "string"){
            console.log(strs);
        }
    }
}

interface User{
    name: string,
    email: string
}

interface Admin{
    name:string,
    email:string,
    isAdmin: boolean
}

function isAdmin(account: Admin | User):boolean{
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}

// using in instanceof
function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim: () => void}
type Birds = {fly : () => void}

function isFish(pet:Fish | Birds): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Birds){
    if(isFish(pet)){
        pet;
        return "fishfood"
    }else{
        pet
        return "bird food"
    }
}

interface Circle{
    kind : "circle"
    radius: number
}

interface Rectange{
    kind: "Rectange"
    length: number,
    breadth : number
}

type Shape = Rectange | Circle;

function getTrueShape(shape: Shape){
    if(shape.kind === 'circle'){
        return Math.PI * shape.radius **2;
    }
    return shape.length * shape.breadth;
}

function getArea(shape :Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "Rectange":
            return shape.length * shape.breadth;

        // default method that does not run
        default:
            const _defaultforShape: never = shape
            return _defaultforShape;
    }
}






