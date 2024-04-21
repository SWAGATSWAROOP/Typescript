type user = {
    // readonly
    readonly _id : string;
    name : string;
    email : string;
    isActive : boolean;
    // For marking optional
    creditcardDetails?: number
}

let myUser : user = {
    _id : "1234",
    name : "Swagat",
    email:"S@g.com",
    isActive: false,
}

myUser.email = "S";

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: Number
}
