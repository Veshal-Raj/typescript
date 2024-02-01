interface Eater{
    eat(food: string): void
}

class Animall {
    name: string;
    constructor (name: string) {
        this.name = name
    }

    makeSound():void {
        console.log('Animal Sound')
    }
}

class Dogg extends Animall implements Eater {
    makeSound(): void {
        console.log('Bark')
    }
    eat(food: string): void {
        console.log(`${this.name} is eating ${food}`)
    }
}

class Catt extends Animall implements Eater {
    makeSound(): void {
        console.log('Meow')
    }
    eat(food: string): void {
        console.log(`${this.name} is eating ${food}`)
    }
}

const dog: Eater = new Dogg('Buddy')
const cat: Eater = new Catt('Whiskers')

dog.eat('bones')
cat.eat('fish')