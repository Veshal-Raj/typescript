class Animal {
    constructor (public name: string){}

    move(){
        console.log(this.name, 'is moving...')
    }
}

class Dog extends Animal {
    constructor(public isGoodBoy: boolean, name: string){
        super(name)
    }
    growl() {
        console.log(this.name, 'is growling...', this.isGoodBoy)
    }
}

class Cat extends Animal {
    meow() {
        console.log(this.name,'is meowing...')
    }
}

class Hen extends Animal{
    override move(): void {
        console.log(this.name,'moving... (hen)')
    }
}


let lassie = new Dog(true,'dog',)
lassie.move()
lassie.growl()

let kitty = new Cat('kitty')
kitty.meow()

let chick = new Hen('chick')
chick.move()