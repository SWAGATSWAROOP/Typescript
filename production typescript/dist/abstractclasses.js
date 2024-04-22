"use strict";
// Abstract classes can have function definations as well but interfaces cannot
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 1;
    }
}
// Abstract Classes cannot have objects
// const st = new TakePhoto("test","test")
class instagram extends TakePhoto {
    getSwagat() {
        console.log("Hello Swagat");
    }
}
