const User = {
    name: 'hitesh',
    email: 'hitesh@mail.com'
}

function createUser({name, isPaid}: { name: string, isPaid: boolean}){}

createUser({name: 'hitesh', isPaid: false})

function createCourse() : {name: string, price: number} {
    return {name: 'reactjs', price: 500}
}

function book({name:string, sold: boolean}) {}

let bookObject = {name: 'Goat Life', sold: false, price: 790}
// book({name: 'Goat Life', sold: false, price: 790})   this will give us error
book(bookObject)   // now the error gone

// type Alias
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createStudent(user: User): User {
    return {name: '', email: '', isActive: true}
}

createStudent({name: '', email: '', isActive: true})

// readonly and optional
type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let myUser: User1 = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
}

// myUser._id = 'hello' // this should not allow in ts

function createUser1 (u: User){}



type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}