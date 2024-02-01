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