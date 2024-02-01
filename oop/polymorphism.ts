// ================================== method overriding
class Animals {
    makeSound(): void {
        console.log('Animal Sound')
    }
}

class Dogs extends Animals {
    makeSound(): void {
        console.log('Barkkk')
    }
}

class Cats extends Animals{}


function makeAnimalSound(animal: Animals){
    animal.makeSound()
}

let Animal1 = new Animals()
let Animal2 = new Dogs()
let Animal3 = new Cats()
// console.log(Animal1)
// console.log(Animal2)
// Animal1.makeSound()
// Animal2.makeSound()

makeAnimalSound(Animal1)
makeAnimalSound(Animal2)
makeAnimalSound(Animal3)



// ============================================= method overloading


class Calculator {
    add(x: number, y: number): number
    add(x: string, y: string): string
    add(x: any, y: any): any {
        if (typeof x === 'number' && typeof y === 'number') return x+y
        else if (typeof x === 'string' && typeof y === 'string') return x+y
    }
}

const calc = new Calculator()

console.log(calc.add(1,2))
console.log(calc.add('1','2'))