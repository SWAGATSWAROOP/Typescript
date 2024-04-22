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
class user{
    readonly city: string = "Cuttuck"
    protected coursecount = 1;
    constructor(public name:string,public email:string){
        this.email = email;
        this.name = name;
    }

    // getter for email
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCOUNT():number{
        return this.coursecount;
    }

    // In setter there should not be any return type
    set courseCount(coursenum:number){
        if(coursenum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this.coursecount = coursenum;
    }

    private deleteToken(){
        console.log("Swagat");
    }
}


class SubUser extends user{
    isFamily:boolean = true
    changeCourseCount(){
        this.coursecount;
    }
}



