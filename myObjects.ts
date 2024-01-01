const User = {
    name: "Veshal",
    email: "veshal@mail.com",
    isActive: true
}

function createUser({name, email, isPaid}: {name: string; email: string; isPaid: boolean}) {}

createUser({name: "Veshal", email: "veshal@mail.com",  isPaid: true})

function createCourse(user: {name: string, email: string, isPaid: boolean}):{name: string, isPaid: boolean}{
    return { name: user.name, isPaid: user.isPaid}
}

let newUser = {name: "veshal", isPaid: false, email: "veshal@mail.com"}

createUser(newUser)


