interface User {
    readonly dbId: number
    email : string,
    userId : number,
    googleId?: string,
    startTrail : () => string,
    swagat(): string,
    getCoupon(couponname:string,values:number):number
}

// Reopening of interfaces
interface User {
    githubToken : string
}

const swagat : User = {
    dbId : 22,email:"swagat",userId: 4,
    startTrail: () => {
        return "trial started";
    },
    swagat : ()=> "hello",
    getCoupon: (name:"Swagat",values:1) => {
        return 10
    },
    githubToken : "SWAGATSWAROOP"
}

// Inheritance in interfaces
interface Admin extends User {
    role : "admin" | "ta" | "learner"
}

