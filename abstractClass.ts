abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSapio():void
    getReelTime(): number {
        // some complex calculation
        return 8
    }
}


// class getPhoto extends TakePhoto {}

// const hc = new getPhoto("test", "Test")

/**
 *      if we gave the abstract keyword, we cannot directly create an object
 *      we need to extend first, and only to the extend class we can create object.
 */

class Instagram extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ){
        super(cameraMode, filter)
    }
    getSapio(): void {
        console.log('hello instagram')
    }
}

const hc = new Instagram("test", "Test")
