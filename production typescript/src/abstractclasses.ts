

// Abstract classes can have function definations as well but interfaces cannot
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter:string
    ){}

    abstract getSwagat():void
    getReelTime():number{
        return 1;
    }
}

// Abstract Classes cannot have objects
// const st = new TakePhoto("test","test")

class instagram extends TakePhoto{
    getSwagat(): void {
        console.log("Hello Swagat");
    }
}

